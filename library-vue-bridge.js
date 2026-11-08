/* v0.109 · Read-only Vue adapter for the existing local library. */
(function installVueLibraryBridge(){
  'use strict';
  if(typeof saved !== 'function' || typeof GENRES === 'undefined' || typeof data === 'undefined') return;
  const oldSaved = saved;
  // The untouched legacy page stays inside this host until Vue successfully mounts.
  saved = function(){
    return '<div id="sb-vue-library-collection">' + oldSaved.apply(this, arguments) + '</div>';
  };
  const genreById = id => GENRES.find(g => g.id === id);
  const genreName = id => genreById(id)?.name || 'Без жанра';
  window.SUNOBOOM_LEGACY_LIBRARY = Object.freeze({
    snapshot(){
      if(view.nav !== 'saved') return null;
      const genres = (data.favorites || []).map(genreById).filter(Boolean).map(g => ({
        id:String(g.id), name:String(g.name), family:String(g.family||''),
        bpm:Array.isArray(g.bpm)?g.bpm.slice(0,2):[],
        color:String(g.color||''), tagline:String(g.tagline||''), era:String(g.era||'')
      }));
      const ideas = (data.savedIdeas || []).map(key => {
        const [genreId, indexText] = String(key).split(':');
        const g = genreById(genreId);
        const i = Number(indexText);
        const x = Number.isInteger(i) && i >= 0 ? g?.ideas?.[i] : null;
        return x ? { genreId:g.id, index:i, key:String(key),
          genre:g.name, mood:String(x.mood||''), title:String(x.title||''), pitch:String(x.pitch||'') } : null;
      }).filter(Boolean);
      const own = (data.manualIdeas || []).slice().reverse().map(x => ({
        id:String(x.id), genre:genreName(x.genre),
        title:String(x.title||''), pitch:String(x.pitch||'')
      }));
      const generated = (data.savedGeneratedIdeas || []).slice().reverse().map(x => ({
        id:String(x.id), genre:genreName(x.genre), topic:String(x.topic||''),
        title:String(x.title||''), pitch:String(x.pitch||''), storyLine:String(x.storyLine||''),
        hook:String(x.hook||''), detail:String(x.detail||'')
      }));
      const prompts = (data.savedPrompts || []).slice().reverse().map(x => ({
        id:String(x.id), title:String(x.title||[x.genre,x.mood].filter(Boolean).join(' · ')||'Промпт'),
        text:String(x.text||''), date:String(x.date||'')
      }));
      return { backLabel:workspaceBackLabel(), genres, ideas, own, generated, prompts };
    }
  });
})();
