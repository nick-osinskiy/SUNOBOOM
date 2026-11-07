/* SUNOBOOM 0.77 · Local cover extraction from audio metadata, no uploads or external services. */
(function installAudioCoverReader(){
 "use strict";
 const LIMIT=10*1024*1024, TAG_LIMIT=24*1024*1024;
 const word=(b,p)=>((b[p]*0x1000000)+(b[p+1]<<16)+(b[p+2]<<8)+b[p+3])>>>0;
 const tri=(b,p)=>(b[p]<<16)|(b[p+1]<<8)|b[p+2];
 const sync=(b,p)=>b[p]*2097152+b[p+1]*16384+b[p+2]*128+b[p+3];
 const ascii=(b,p,n)=>{let out="";for(let i=0;i<n;i++)out+=String.fromCharCode(b[p+i]||0);return out;};
 const imageType=(b,p)=>{
   if(p<0||p+4>b.length)return "";
   if(b[p]===0xff&&b[p+1]===0xd8&&b[p+2]===0xff)return "image/jpeg";
   if(b[p]===0x89&&ascii(b,p+1,3)==="PNG")return "image/png";
   if(ascii(b,p,3)==="GIF")return "image/gif";
   if(ascii(b,p,4)==="RIFF"&&p+12<=b.length&&ascii(b,p+8,4)==="WEBP")return "image/webp";
   return "";
 };
 const validImage=(b,p,n,unsync=false)=>{
   if(!Number.isSafeInteger(n)||n<12||n>LIMIT||p<0||p+n>b.length)return null;
   let data=b.subarray(p,p+n);
   if(unsync){
     const output=[];
     for(let i=0;i<data.length;i++){
       output.push(data[i]);
       if(data[i]===255&&i+1<data.length&&data[i+1]===0)i++;
     }
     data=new Uint8Array(output);
   }
   const type=imageType(data,0);
   return type&&data.length<=LIMIT?new Blob([data],{type}):null;
 };
 const findDescriptionEnd=(b,p,encoding)=>{
   if(encoding===1||encoding===2){
     // ID3 UTF-16 strings are terminated by two null bytes.
     for(let i=p;i+1<b.length;i+=2)if(!b[i]&&!b[i+1])return i+2;
     return -1;
   }
   for(let i=p;i<b.length;i++)if(!b[i])return i+1;
   return -1;
 };
 function apic(payload,legacy,unsync){
   if(payload.length<12)return null;
   const encoding=payload[0];
   let ptr=1;
   if(legacy){ptr+=3;}
   else {
     const end=payload.indexOf(0,ptr);
     if(end<0||end-ptr>100)return null;
     ptr=end+1;
   }
   if(ptr>=payload.length)return null;
   const kind=payload[ptr++];
   const start=findDescriptionEnd(payload,ptr,encoding);
   if(start<0)return null;
   const picture=validImage(payload,start,payload.length-start,unsync);
   return picture?{blob:picture,preferred:kind===3}:null;
 }
 async function mp3(file){
   if(file.size<10)return null;
   const h=new Uint8Array(await file.slice(0,10).arrayBuffer());
   if(ascii(h,0,3)!=="ID3"||h[3]<2||h[3]>4)return null;
   const version=h[3],tagSize=sync(h,6);
   if(tagSize<10||tagSize>TAG_LIMIT||tagSize+10>file.size)return null;
   const b=new Uint8Array(await file.slice(10,10+tagSize).arrayBuffer());
   let at=0,first=null;
   if(h[5]&0x40){
     if(version===3){if(b.length<4)return null;at=word(b,0)+4;}
     else if(version===4){if(b.length<4)return null;at=sync(b,0);}
   }
   while(at+ (version===2?6:10)<=b.length){
     const legacy=version===2,width=legacy?6:10;
     const id=ascii(b,at,legacy?3:4);
     if(!/^[A-Z0-9]{3,4}$/.test(id))break;
     const size=legacy?tri(b,at+3):version===4?sync(b,at+4):word(b,at+4);
     if(!size||size>b.length-at-width)break;
     if(id===(legacy?"PIC":"APIC")){
       const flags=legacy?0:((b[at+8]<<8)|b[at+9]);
       if(!(flags&0x00c0)){
         const result=apic(b.subarray(at+width,at+width+size),legacy,!!(h[5]&0x80));
         if(result){
           if(result.preferred)return result.blob;
           if(!first)first=result.blob;
         }
       }
     }
     at+=width+size;
   }
   return first;
 }
 async function atomHeader(file,pos,end){
   if(pos+8>end)return null;
   const b=new Uint8Array(await file.slice(pos,Math.min(end,pos+16)).arrayBuffer());
   if(b.length<8)return null;
   let size=word(b,0),header=8;
   if(size===1){
     if(b.length<16)return null;
     size=b[8]*2**56+b[9]*2**48+b[10]*2**40+b[11]*2**32+word(b,12);
     header=16;
   }else if(size===0)size=end-pos;
   if(!Number.isSafeInteger(size)||size<header||pos+size>end)return null;
   return {type:ascii(b,4,4),data:pos+header,end:pos+size};
 }
 async function m4a(file){
   if(file.size<32)return null;
   const first=new Uint8Array(await file.slice(0,12).arrayBuffer());
   if(ascii(first,4,4)!=="ftyp")return null;
   let scanned=0;
   async function read(start,end,parent,depth){
     if(depth>7||++scanned>1200)return null;
     if(parent==="meta")start+=4; // FullBox version + flags.
     let pos=start;
     while(pos+8<=end&&scanned<1200){
       const atom=await atomHeader(file,pos,end);
       if(!atom)break;
       scanned++;
       if(parent==="covr"&&atom.type==="data"){
         const p=atom.data+8; // iTunes type indicator and locale.
         const len=atom.end-p;
         if(len>11&&len<=LIMIT){
           const bytes=new Uint8Array(await file.slice(p,atom.end).arrayBuffer());
           const blob=validImage(bytes,0,bytes.length);
           if(blob)return blob;
         }
       }else if(["moov","udta","meta","ilst","covr"].includes(atom.type)){
         const found=await read(atom.data,atom.end,atom.type,depth+1);
         if(found)return found;
       }
       pos=atom.end;
     }
     return null;
   }
   return read(0,file.size,"",0);
 }
 async function flac(file){
   if(file.size<12||ascii(new Uint8Array(await file.slice(0,4).arrayBuffer()),0,4)!=="fLaC")return null;
   let pos=4,first=null;
   for(let count=0;count<150&&pos+4<=file.size;count++){
     const head=new Uint8Array(await file.slice(pos,pos+4).arrayBuffer());
     const last=!!(head[0]&128),type=head[0]&127,len=tri(head,1),next=pos+4+len;
     if(next>file.size)break;
     if(type===6&&len<=(LIMIT+4096)){
       const b=new Uint8Array(await file.slice(pos+4,next).arrayBuffer());
       let p=0;
       if(b.length>=32){
         const picKind=word(b,p);p+=4;
         const mimeLength=word(b,p);p+=4;
         if(mimeLength<=128&&p+mimeLength+4<=b.length){
           p+=mimeLength;
           const descLen=word(b,p);p+=4;
           if(descLen<=2048&&p+descLen+20<=b.length){
             p+=descLen+16;const imageLen=word(b,p);p+=4;
             const blob=validImage(b,p,imageLen);
             if(blob){if(picKind===3)return blob;if(!first)first=blob;}
           }
         }
       }
     }
     pos=next;if(last)break;
   }
   return first;
 }
 async function extract(file){
   if(!file||typeof file.slice!=="function"||typeof file.size!=="number")return null;
   try{
     const head=new Uint8Array(await file.slice(0,12).arrayBuffer());
     const ext=String(file.name||"").toLowerCase();
     if(ascii(head,0,3)==="ID3")return mp3(file);
     if(ascii(head,0,4)==="fLaC")return flac(file);
     if(ascii(head,4,4)==="ftyp"||/\.(m4a|mp4)$/i.test(ext))return m4a(file);
     return null;
   }catch(e){return null;}
 }
 window.SUNOBOOM_COVER_READER=Object.freeze({version:"0.77",extract});
})();
