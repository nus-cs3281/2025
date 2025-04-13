
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"tool-technology-1"}},[_v("Tool/Technology 1"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-1","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.")]),_v(" "),_c('h1',{attrs:{"id":"vue"}},[_v("Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"1-components-of-vue"}},[_v("1. Components of Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-components-of-vue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("A Vue component typically consists of three main sections.")]),_v(" "),_c('ul',[_c('li',[_v("Template: this defines the HTML structure")]),_v(" "),_c('li',[_v("Script: Contains the logic and data for the component")]),_v(" "),_c('li',[_v("Style: Defines the CSS specific to the component")])]),_v(" "),_c('h3',{attrs:{"id":"2-using-computed-properties-in-vue-js"}},[_v("2. Using Computed Properties in Vue.js"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-using-computed-properties-in-vue-js","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When doing experimental changes, I thought of letting users specify things like font size, font type, etc. Upon looking up the other components and stackoverflow, this is what I found")]),_v(" "),_c('ul',[_c('li',[_v("In a basic Vue component, we can define a computed property by plaing it in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed")]),_v(" option. These\nproperties are automatically updates when the underlying data changes.")])]),_v(" "),_c('h3',{attrs:{"id":"3-using-computed-properties-vs-lifecycle-hooks"}},[_v("3. Using Computed Properties vs Lifecycle Hooks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-using-computed-properties-vs-lifecycle-hooks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working on "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2678"}},[_v("PR")]),_v(", I learned about different approaches to access DOM elements.\nIn the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TabGroups.Vue")]),_v(" file, the original approach is to do")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("computed: {\n")]),_c('span',[_v("    headerRendered() {\n")]),_c('span',[_v("        return this.$refs.header.textContent.trim();\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("By having the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("headerRendered()")]),_v(" under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed:")]),_v(", the benefit is that this is reactive by nature, it automatically updates when dependencies change. However, it can cause errors if accessed before DOM is ready.")]),_v(" "),_c('p',[_v("To solve the issue of Tabs not showing correctly, this is the approach we adopted:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("mounted() {\n")]),_c('span',[_v("    this.headerRendered = this.$refs.header.textContent.trim();\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("In this new approach, it guarantees DOM availability, which is better for one-time calulations. However, there are cons as well. This is not reactive, it requires manual upates if content changes.")]),_v(" "),_c('p',[_v("I would summarize my learning in the following 3 points:")]),_v(" "),_c('ol',[_c('li',[_v("Computed properties are best for reactive data that needs to stay synchronized")]),_v(" "),_c('li',[_v("Lifecycle hooks like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mounted")]),_v(" are safer for DOM-dependent operations")]),_v(" "),_c('li',[_v("$refs are only populated after the component is mounted")])]),_v(" "),_c('p',[_v("Here are the resources that I referenced while working on the issue")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/guide/essentials/template-refs.html"}},[_v("Vue.js Lifecycle Diagram")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram"}},[_v("Vue.js Refs Documentation")])])]),_v(" "),_c('h3',{attrs:{"id":"4-my-vue2-vs-vue3-research-over-the-recess-week"}},[_v("4. My Vue2 vs Vue3 research over the recess week"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-my-vue2-vs-vue3-research-over-the-recess-week","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Since "),_c('a',{attrs:{"href":"https://github.com/gerteck"}},[_v("gerteck")]),_v(" was working on Vue2 to Vue3 migration, I explored some differences between the 2 over the recess weeks and here are my gained knowledge.")]),_v(" "),_c('ol',[_c('li',[_v("Reactivity System")])]),_v(" "),_c('ul',[_c('li',[_v("Vue2: uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Object.defineProperty")]),_v(" for reactivity")]),_v(" "),_c('li',[_v("Uses ES6 "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Proxy")]),_v(", enabling reactivity for dynamically added properties")])]),_v(" "),_c('ol',{attrs:{"start":"2"}},[_c('li',[_v("Composition aPI")])]),_v(" "),_c('ul',[_c('li',[_v("Vue2: Options API only ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("methods")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed")]),_v(")")]),_v(" "),_c('li',[_v("Vue3: Introduces "),_c('strong',[_v("Composition API")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setup()")]),_v("), allowing better logic reuse")])]),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_v("Performance")])]),_v(" "),_c('ul',[_c('li',[_v("Vue2: Slower cirtual DOM diffing.")]),_v(" "),_c('li',[_v("Vue3: Faster due to optimized virtual DOM and tree-shaking support")])]),_v(" "),_c('ol',{attrs:{"start":"4"}},[_c('li',[_v("Fragments")])]),_v(" "),_c('ul',[_c('li',[_v("Vue2: Requires a single root element in templates")]),_v(" "),_c('li',[_v("Vue3: Supports multiple root nodes (fragments).")])]),_v(" "),_c('p',[_v("Here are some documentations I referenced")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://v3-migration.vuejs.org/"}},[_v("Vue 3 migration Guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/guide/introduction.html#what-is-vue"}},[_v("Vue 3 vs Vue 2: What's New?")])])]),_v(" "),_c('h1',{attrs:{"id":"html-and-amp-css"}},[_v("HTML &  CSS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#html-and-amp-css","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"1-adding-hyperlinks-in-html-and-markdown"}},[_v("1. Adding Hyperlinks in HTML and Markdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-adding-hyperlinks-in-html-and-markdown","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When writing in Markdown, hyperlinks are created using a specific syntax, but behind the scenes, this Markdown code is converted into HTML.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("In Markdown, we use syntax like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[Java Docs](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)")]),_v(" to create a hyperlink. When the Markdown is converted to HTML, it generates an anchor tag in the form of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<a href=\"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html\">Java Docs</a>")]),_v(". This would open the link in the same tab, as no additional attributes are specified.")])]),_v(" "),_c('li',[_c('p',[_v("In contrast, when we write HTML durectly, we can specify additional attributes, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("target=\"_blank\"")]),_v(", to control how the link behaves. Using the same example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<a href=\"https://markbind.org/userGuide/templates.html\" target=\"_blank\">User Guide: Templates</a>")]),_v(" will ensure that the link opens in a new tab.")])])]),_v(" "),_c('h3',{attrs:{"id":"2-rendering-of-font-awesome-icons-using-css"}},[_v("2. Rendering of font awesome icons using CSS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-rendering-of-font-awesome-icons-using-css","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In one of my deployment on netlify, some of which did not display the font-awesomes icons properly, leading\nme to research on them.")]),_v(" "),_c('p',[_v("Each font awesome (fa-linkedin, fa-github) is mapped to a Unicode character in the font file. For example,\nwhen running the HTML code "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<i class=\"fa-house\"></i>")]),_v(", CSS will first apply the fa-solid class based on its\nmappings, CSS will also set aside the unicode charater for fa-house. The browser loads the web font "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fa-solid-900.woff2")]),_v(" and displays the icon.")]),_v(" "),_c('h4',{attrs:{"id":"what-is-woff2"}},[_v("What is woff2?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-is-woff2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("WOFF2 is a webfont file format, and it is a more compressed version of WOFF and is used to deliver webpage fonts on the fly. In the context of rendering font-awesome, font awesome icons are stored as glyphs in WOFF2 font files, when running "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<i class=\"fa-house\"></i>")]),_v(", the browser loads "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fa-solid-900.woff2")]),_v(" if it is supported.")]),_v(" "),_c('p',[_v("This page "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/15503139/icon-fonts-how-do-they-get-rendered-by-web-pages"}},[_v("page")]),_v("  is pretty useful")]),_v(" "),_c('h1',{attrs:{"id":"cheerio"}},[_v("Cheerio"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cheerio","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"1-what-is-cheerio"}},[_v("1. What is Cheerio"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-what-is-cheerio","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Cheerio is a fast, lightweight library for parsing and manipulating HTML and XML on the server side, using a jQuery-like syntax. It is built for Node.js and is ideal for use cases like:")]),_v(" "),_c('ul',[_c('li',[_v("Server-side HTML manipulation")]),_v(" "),_c('li',[_v("Web scraping")]),_v(" "),_c('li',[_v("Static site generation tools\nHere are some resources I referenced when working with Cheerio")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://cheerio.js.org/docs/intro"}},[_v("Cheerio docs")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/cheeriojs/cheerio"}},[_v("Cheerio github")])])]),_v(" "),_c('h3',{attrs:{"id":"2-usage-of-cheerio-in-markbind"}},[_v("2. Usage of Cheerio in markbind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-usage-of-cheerio-in-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working on the PR #2649 "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2649"}},[_v("Branch inline highlight new")]),_v(" I gained deeper on how Markbind uses highlight for various types of inline highlighting.")]),_v(" "),_c('ol',[_c('li',[_v("Whole line highlight")]),_v(" "),_c('li',[_v("Whole text highlight")]),_v(" "),_c('li',[_v("Partial text highlight - This is where Cheerio is used")])]),_v(" "),_c('p',[_v("For "),_c('strong',[_v("partial text highlight")]),_v(", Cheerio is used to dynamically parse and manipulate the HTML content, with the following steps")]),_v(" "),_c('ul',[_c('li',[_v("It parses the rendered HTML to locate the specific section that needs to be highlighted")]),_v(" "),_c('li',[_v("Then it wraps the portion with the appropriate "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<span>")]),_v(" or similar tags to apply the highlight styling.")]),_v(" "),_c('li',[_v("This manipulation is done server-side before the final HTML is served")])]),_v(" "),_c('h1',{attrs:{"id":"tooling-and-workflow"}},[_v("Tooling and workflow"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tooling-and-workflow","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working with PR #2647 "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2647/files"}},[_v("Remove parallel flag from test scripts")]),_v(", I experimented with Lerna's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--parallel flag")]),_v(" which runs tasks across packages concurrently. Here's what I learnt while playing around with it")]),_v(" "),_c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--parallel")]),_v(" flag speed up execution but can cause interleaved logs, making test failures harder to trace\nThrough my own research, I believe Lerna achieves this concurrency with the help of Node.js's single-threaded event loop architecture.")])]),_v(" "),_c('p',[_v("Here are the docs I referenced:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.linkedin.com/pulse/oncurrency-node-js-khaleel-inchikkalayil?utm_source=chatgpt.com"}},[_v("https://www.linkedin.com/pulse/oncurrency-node-js-khaleel-inchikkalayil?utm_source=chatgpt.com")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://levelup.gitconnected.com/exploring-parallelism-and-concurrency-in-node-js-4b84c2f397b"}},[_v("https://levelup.gitconnected.com/exploring-parallelism-and-concurrency-in-node-js-4b84c2f397b")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Sun, 13 Apr 2025, 8:09:53 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  