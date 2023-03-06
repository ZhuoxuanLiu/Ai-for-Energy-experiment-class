import RevealNotes from '/src/reveal/plugin/notes/plugin.js'
import RevealMarkdown from '/src/reveal/plugin/markdown/plugin.js'
import RevealHighlight from '/src/reveal/plugin/highlight/plugin.js'
import Reveal from '/src/reveal/js/reveal.js'

const deck = new Reveal()

deck.initialize({ 
    hash: true, 
    slideNumber: true,
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
})