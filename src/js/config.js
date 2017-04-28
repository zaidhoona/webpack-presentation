import Reveal from 'reveal';
import path from 'path';

var libPath = path.resolve('lib', 'js');
var pluginPath = path.resolve('lib', 'plugin');

Reveal.initialize({
  width: '100%',
  height: '100%',
  history: true,
  dependencies: [
    // Cross-browser shim that fully implements classList
    { 
      src: path.resolve(libPath, 'classList.js'), 
      condition: function() { 
        return !document.body.classList; 
      } 
    }, 

    // Interpret Markdown in <section> elements
    { 
      src: path.resolve(pluginPath, 'markdown', 'marked.js'), 
      condition: function() { 
        return !!document.querySelector( '[data-markdown]' ); 
      } 
    },

    { 
      src: path.resolve(pluginPath, 'markdown', 'markdown.js'), 
      condition: function() { 
        return !!document.querySelector( '[data-markdown]' ); 
      }
    },

    // Syntax highlight for <code> elements
    { 
      src: path.resolve(pluginPath, 'highlight', 'highlight.js'), 
      async: true, 
      callback: function() { 
        hljs.initHighlightingOnLoad(); 
      } 
    },

    // Zoom in and out with Alt+click
    { src: path.resolve(pluginPath, 'zoom-js', 'zoom.js'), async: true },

    // Speaker notes
    { src: path.resolve(pluginPath, 'notes', 'notes.js'), async: true }
  ]
});