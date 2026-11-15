/* Plain UI input records; no storage, DOM patching or HTML generation. */
(function(root){'use strict';let current=null;
 root.SUNOBOOM_VIEW_INPUTS=Object.freeze({get active(){return current!==null;},field:id=>current?.fields?.[id]||null,named:name=>current?.named?.[name]||[],
 withInputs(inputs,run){const previous=current;current=inputs||{fields:{},named:{}};try{return run();}finally{current=previous;}}});
})(globalThis);
