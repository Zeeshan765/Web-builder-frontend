
import { source as b1 } from './data/blog'
import { source as b1s } from './data/icons/blog'
import { source as s1 } from './data/statistics'
import { source as s1s } from './data/icons/statistics'
import { source as z1 } from './data/footer'
import { source as z1s } from './data/icons/footer'
import { source as h1 } from './data/header'
import { source as h1s } from './data/icons/header'
import { source as t1 } from './data/testimonial'
import { source as t1s } from './data/icons/testimonial'
import { source as c1 } from './data/contact'
import { source as c1s } from './data/icons/contact'
import { source as g1 } from './data/gallery'
import { source as g1s } from './data/icons/gallery'
import { source as hr1 } from './data/hero'
import { source as hr1s } from './data/icons/hero'
import { source as tm1 } from './data/team'
import { source as tm1s } from './data/icons/team'

const getSvgHtml = (svg) => {
    if (typeof window === 'undefined') return ''
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    return svg.outerHTML
}

const sources = [

    {
        id: 'header-block',
        class: '',
        label: 'Header',
        media: h1s,
        content: h1,
        category: 'Basic',
        // order: 1
    },



    {
        id: 'footer-block',
        class: '',
        label: 'Footer',
        media: z1s,
        content: z1,
        category: 'Basic',
        // order: 1
    },
    {
        id: 'blog-block',
        class: '',
        label: 'Blog',
        media: b1s,
        content: b1,
        category: 'Basic',
    },

    {
        id: 'testimonial-block',
        class: '',
        label: 'Testimonial',
        media: t1s,
        content: t1,
        category: 'Basic',
    },
    {
        id: 'hero-block',
        class: '',
        label: 'Hero',
        media: hr1s,
        content: hr1,
        category: 'Basic',
    },
    {
        id: 'team-block',
        class: '',
        label: 'Team',
        media: tm1s,
        content: tm1,
        category: 'Basic',
    },
    {
        id: 'gallery-block',
        class: '',
        label: 'Gallery',
        media: g1s,
        content: g1,
        category: 'Basic',
    },
    {
        id: 'contact-block',
        class: '',
        label: 'Contact',
        media: c1s,
        content: c1,
        category: 'Basic',
    },
    {
        id: 'statistic-block',
        class: '',
        label: 'Statistics',
        media: s1s,
        content: s1,
        category: 'Basic',
        // order: 1
    },

]

export default (editor, options = {}) => {
    const bm = editor.Blocks

    sources.forEach((s) => {
        bm.add(s.id, {
            label: s.label,
            media: getSvgHtml(editor.$(s.media).get(0)),
            attributes: { class: `${s.class} block-full-width` },
            content: s.content,
            category: { label: s.category, open: s.category === options.openCategory },
        })
    })
}
