
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('p',[_v("List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.")]),_v(" "),_c('h2',{attrs:{"id":"internal-tools-technology"}},[_v("Internal Tools/Technology"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#internal-tools-technology","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"how-markbind-works-overview-of-everything"}},[_v("How MarkBind Works (Overview of everything)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-markbind-works-overview-of-everything","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In order to make more well informed changes and tackle deeper issues, I decided to cover the whole codebase of Markbind just so I could have a much fuller understanding of how different parts worked together.")]),_v(" "),_c('p',[_v("While doing so, I used a MarkBind site to document the architecture and different packages and classes in the MarkBind codebase. The site can be viewed here: "),_c('a',{attrs:{"href":"https://gerteck.github.io/mb-architecture/"}},[_v("https://gerteck.github.io/mb-architecture/")])]),_v(" "),_c('h3',{attrs:{"id":"markbind-s-search-utility"}},[_v("Markbind's Search Utility"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-s-search-utility","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"how-native-markbind-search-works"}},[_v("How Native MarkBind Search works"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-native-markbind-search-works","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Collection of Title and headings in generation:")])]),_v(" "),_c('ul',[_c('li',[_v("We trace the website generation in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site/index.ts")]),_v(".")]),_v(" "),_c('li',[_v("When building source files, during the page generation process, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Page.collectHeadingsAndKeywords")]),_v(" records headings and keywords inside rendered page into this.headings and this.keywords respectively.")]),_v(" "),_c('li',[_v("When writing site data, the title, headings, keywords are collected into pages object.")])]),_v(" "),_c('p',[_c('strong',[_v("Page Generation and Vue Initialization")])]),_v(" "),_c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("core-web/src/index.js")]),_v(", the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setupWithSearch()")]),_v(" updates the SearchData by collecting the pages from the site data.\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setupWithSearch()")]),_v(" is added as a script in the file template "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("page.njk")]),_v(" used to render the HTML structure of Markbind pages.")]),_v(" "),_c('li',[_v("This file template is used during the page generation process.")])])]),_v(" "),_c('li',[_v("Note also that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VueCommonAppFactory.js")]),_v(" provides a factory function (appFactory) to set up the common data and methods for Vue application shared between server-side and client-side, and provides the common data properties and methods.\n"),_c('ul',[_c('li',[_v("In particular, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchData[]")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchCallback()")]),_v(", which are relevant in the following portion.")]),_v(" "),_c('li',[_v("When using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<searchbar/>")]),_v(", this is where to use MarkBind's search functionality, we set the appropriate values: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(" <searchbar :data=\"searchData\" :on-hit=\"searchCallback\"></searchbar>")])])])])]),_v(" "),_c('p',[_c('strong',[_v("Vue Components: Searchbar/SearchbarPageItem.vue")]),_v(" "),_c('strong',[_v("Searchbar.vue")])]),_v(" "),_c('ul',[_c('li',[_v("The searchbar uses the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchData[]")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(", filters and ranks the data based on keyword matches and populates the dropdown with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchbarPageItems")]),_v(".")]),_v(" "),_c('li',[_v("It calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("on-hit")]),_v(" function (which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchCallback")]),_v(" is passed into) when a search result is selected.")]),_v(" "),_c('li',[_v("Presentation wise, each search result is represented by a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchbar-pageitem")]),_v(" vue component.")])]),_v(" "),_c('p',[_c('strong',[_v("SearchbarPageItem.vue")])]),_v(" "),_c('ul',[_c('li',[_v("Presents the component conditionally based on whether item is a heading or a page title.")])]),_v(" "),_c('h4',{attrs:{"id":"how-the-new-markbind-pagefind-plugin-works"}},[_v("How the new Markbind PageFind Plugin Works"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-the-new-markbind-pagefind-plugin-works","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("About "),_c('a',{attrs:{"href":"https://pagefind.app/"}},[_v("PageFind")]),_v(": A fully static search library that aims to perform well on large sites, while using as little of users bandwidth\nas possible, and without hosting any infrastructure.")]),_v(" "),_c('p',[_c('strong',[_v("Documentation:")])]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://pagefind.app/docs/node-api/"}},[_v("PageFind NodeJS Indexing API")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/CloudCannon/pagefind/blob/production-docs/pagefind_web_js/types/index.d.ts"}},[_v("The types returned by Pagefind’s JavaScript search API")])])]),_v(" "),_c('h4',{attrs:{"id":"integration-of-pagefind-into-markbind"}},[_c('strong',[_v("Integration of Pagefind into MarkBind")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#integration-of-pagefind-into-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("It runs after the website framework, and only requires the folder containing the built static files of the website. A short explanation of how it works would be:")]),_v(" "),_c('ul',[_c('li',[_v("PageFind indexes the static files\n"),_c('ul',[_c('li',[_v("If pagefind is included as a plugin, we indexSites with PageFind, which writes the index files  _site/pagefind")])])]),_v(" "),_c('li',[_v("Plugin exposes a pagefind JS API for searching\n"),_c('ul',[_c('li',[_v("Alternatively, use pagefind default UI for searching. This is done by processes containers with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("id=\"pagefind-search-input\"")]),_v(", and initialing a default PageFindUI instance on it, not unlike how algolia search works.")])])]),_v(" "),_c('li',[_v("This JS API is used by a custom Vue component searchbar.")])]),_v(" "),_c('h2',{attrs:{"id":"external-tools-technology"}},[_v("External Tools/Technology"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#external-tools-technology","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"vue"}},[_v("Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"vue-2-to-vue-3"}},[_v("Vue 2 to Vue 3"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-2-to-vue-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I got the chance to experience "),_c('a',{attrs:{"href":"https://www.reddit.com/r/vuejs/comments/1bp72k5/vue_2_to_vue_3_upgrade_is_one_of_the_most_painful/"}},[_v("this")]),_v(" firsthand.")]),_v(" "),_c('ul',[_c('li',[_v("Through the process (ongoing), it has also allowed me to uncover a significant number of bugs in MarkBind.")])]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://v3-migration.vuejs.org/migration-build"}},[_v("https://v3-migration.vuejs.org/migration-build")])]),_v(" "),_c('p',[_v("MarkBind (v5.5.3) is currently using Vue 2. However, Vue 2 has reached EOL and limits the extensibility and maintainability of MarkBind, especially the vue-components package. (UI Library Package).")]),_v(" "),_c('p',[_v("Vue 2 components can be authored in two different API styles: Option API and Composition API. Read the difference "),_c('a',{attrs:{"href":"https://dev.to/sucodelarangela/vue3-options-api-vs-composition-api-en-1fbo#:~:text=However%2C%20with%20the%20release%20of,known%20as%20the%20Options%20API."}},[_v("here")]),_v(" It was interesting to read the difference between the two.")]),_v(" "),_c('ul',[_c('li',[_v("The Option API organizes code into predefined options like data, methods, and computed, making it simpler and more beginner-friendly but less flexible for complex logic.")]),_v(" "),_c('li',[_v("In contrast, the Composition API uses a setup() function and reactive utilities like ref and reactive, allowing logic to be grouped by feature for better modularity and reusability. While the Option API relies on mixins for reuse, which can lead to conflicts, the Composition API enables cleaner and more scalable code through composable functions.\n"),_c('ul',[_c('li',[_v("Additionally, the Composition API offers superior TypeScript support and is better suited for large, complex applications, though it has a steeper learning curve compared to the straightforward Option API.")])])])]),_v(" "),_c('blockquote',[_c('p',[_v("Server-side rendering: the migration build can be used for SSR, but migrating a custom SSR setup is much more involved. The general idea is replacing vue-server-renderer with @vue/server-renderer. Vue 3 no longer provides a bundle renderer and it is recommended to use Vue 3 SSR with Vite. If you are using Nuxt.js, it is probably better to wait for Nuxt 3.")])]),_v(" "),_c('p',[_v("Currently, MarkBind Vue components are authored in the Options API style. If migrated to Vue 3, we can continue to use this API style.")]),_v(" "),_c('h5',{attrs:{"id":"vue-2-to-vue-3-biggest-shift"}},[_v("Vue 2 to Vue 3 (Biggest Shift)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-2-to-vue-3-biggest-shift","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Vue 2")]),_v("\nIn Vue 2, global configuration is shared across all root instances as concept of \"app\" not formalized. All Vue instances in the app used the same global configuration, and this could lead to unexpected behaviors if different parts of the application needed different configurations or global directives.")]),_v(" "),_c('blockquote',[_c('p',[_v("E.g. global API in Vue 2, like Vue.component() or Vue.directive(), directly mutated the global Vue instance.")])]),_v(" "),_c('p',[_v("Some of MarkBind's plugins depend on this specific property of Vue 2 (directives, in particular, which are registered after mounting).")]),_v(" "),_c('p',[_v("However, the shift to Vue 3 took into consideration the lack of application boundaries and potential global pollution. Hence, Vue 3 takes a different approach that takes a bit of effort to migrate.")]),_v(" "),_c('p',[_c('strong',[_v("Vue 3")]),_v("\nIn Vue 3, the introduction of the app instance via "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("createApp()")]),_v(" changes how global configurations, directives, and components are managed, offering more control and flexibility.")]),_v(" "),_c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("createApp()")]),_v(" method allows you to instantiate an \"app,\" providing a boundary for the app's configuration -- Scoped Global Configuration: Instead of mutating the global Vue object, components, directives, or plugins are now registered on a specific app instance.")])]),_v(" "),_c('p',[_v("Also some particularities with using Vue 3:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/core/issues/4344"}},[_v("https://github.com/vuejs/core/issues/4344")])])]),_v(" "),_c('h4',{attrs:{"id":"vue-sfc-single-file-components"}},[_v("Vue SFC (Single File Components)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-sfc-single-file-components","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://vuejs.org/guide/scaling-up/sfc.html"}},[_v("Reference")])]),_v(" "),_c('blockquote',[_c('p',[_v("Vue uses an HTML based template syntax. All Vue templates "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<template/>")]),_v(" are syntactically valid HTML tht can be parsed by browsers. Under the hood, Vue compiles the template into highly optimized JS code. Using reactivity, Vue figures out minimal number of components to re-render and apply minimal DOM manipulations.")])]),_v(" "),_c('p',[_v("SFC stands for Single File Components (*.vue files) and is a special file format thaat allows us to encapsulate the template, logic, styling of a Vue component in a single file.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.vue")]),_v(" files only consist of three parts, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<template>")]),_v(" where HTML content is, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script>")]),_v(" for Vue code and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<style>")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("SFC requires a build step, but it allows for pre-compiled templates without runtime compilation cost. SFC is a defining feature of Vue as a framework, and is the reccomended approach of using Vue for Static Site Generation and SPA. Needless to say, MarkBind uses Vue SFCs.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<style>")]),_v(" tags inside SFCs are usually injected as native style tags during development to support hot updates, but for production can be extracted and merged into a single CSS file. (which is what Webpack does)")])])]),_v(" "),_c('h4',{attrs:{"id":"vue-rendering-mechanism"}},[_v("Vue Rendering Mechanism"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-rendering-mechanism","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Reference: "),_c('a',{attrs:{"href":"https://vuejs.org/guide/extras/rendering-mechanism"}},[_v("https://vuejs.org/guide/extras/rendering-mechanism")])]),_v(" "),_c('p',[_v("Terms:")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("virtual DOM (VDOM)")]),_v(" - concept where an ideal 'virtual' DOM representation of UI kept in memory, synced with the 'real' DOM. Adopted by React, Vue, other frontend frameworks.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mount")]),_v(": Runtime renderer walk a virtual DOM tree and construct a real DOM tree from it.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("patch")]),_v(": Given two copies of virtual DOM trees, renderer walk and compare the two trees, figure out difference, apply changes to actual DOM.")])]),_v(" "),_c('p',[_v("The VDOM gives the ability to programmatically create inspect and compose desired UI structures in a declarative way (and leave direct DOM manipulation to renderer).")]),_v(" "),_c('p',[_c('em',[_c('strong',[_v("Render Pipeline")])]),_v("\nWhat happens when Vue Component is Mounted:")]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Compile")]),_v(": Vue template compiled into render function, functions that return VDOM trees. (Done ahead of time in MarkBind)")]),_v(" "),_c('li',[_c('strong',[_v("Mount")]),_v(": Runtime renderer invoke render function, walks VDOM, creates actual DOM node.")]),_v(" "),_c('li',[_c('strong',[_v("Patch")]),_v(": When dependency used during mount changes, effect re-runs, new updated VDOM created. Then, patch the actual DOM.")])]),_v(" "),_c('h4',{attrs:{"id":"vue-server-side-rendering-ssr"}},[_v("Vue Server Side Rendering (SSR)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-server-side-rendering-ssr","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("It is possible to render the Vue components into HTML strings on the server, send directly to the browser and finally 'hydrate' static markup into fully interactive app on the client.")]),_v(" "),_c('p',[_v("Advantages of SSR:")]),_v(" "),_c('ul',[_c('li',[_v("Faster time to content, especially on slower devices")]),_v(" "),_c('li',[_v("Unified Mental Model using same language and same declarative")]),_v(" "),_c('li',[_v("Better SEO since crawlers see fully rendered page")])]),_v(" "),_c('h5',{attrs:{"id":"roles-of-server-and-client-in-ssr"}},[_v("Roles of Server and Client in SSR:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#roles-of-server-and-client-in-ssr","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("SSR:")]),_v(" The server's job is to:")]),_v(" "),_c('ul',[_c('li',[_v("Compile the Vue template into a render function.")]),_v(" "),_c('li',[_v("Use the render function to generate static HTML.")]),_v(" "),_c('li',[_v("Send the static HTML to the browser.")])]),_v(" "),_c('p',[_c('strong',[_v("Client-Side Hydration")]),_v(": Once the browser receives the static HTML from the server, the client-side Vue app takes over. Its job is to:")]),_v(" "),_c('ul',[_c('li',[_v("Attach event listeners and reactivity to the static HTML.")]),_v(" "),_c('li',[_v("Make the app interactive (e.g., responding to user actions like clicks or input).")])]),_v(" "),_c('p',[_c('strong',[_v("Vue 3 "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("createApp() vs createSSRApp()")])]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("createApp")]),_v(" does not bother with hydration. It assumes direct access to the DOM, creates and inserts its rendered HTML. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("createSSRApp()")]),_v(" used for creating Vue application instance specifically for SSR, where inital HTML is rendered on the server and sent to client for hydration. Instead of rendering (creating and inserting whole HTML from scratch), it does patching. It also does initialization by setting up reactivity, components, global properties etc, event binding during the mount process (aka Hydration).")]),_v(" "),_c('h3',{attrs:{"id":"external-packages-used-by-markbind"}},[_v("External Packages used by MarkBind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#external-packages-used-by-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" – A simple development server with live reloading functionality, used to automatically refresh the browser when changes are made to MarkBind projects.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("commander.js")]),_v(" – A command-line argument parser for Node.js, used to define and handle CLI commands in MarkBind.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fs")]),_v(" (Node.js built-in) – The File System module, used for reading, writing, and managing files and directories in MarkBind projects.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("lodash")]),_v(" – A utility library providing helper functions for working with arrays, objects, and other JavaScript data structures, improving code efficiency and readability in MarkBind")])]),_v(" "),_c('h3',{attrs:{"id":"research-on-other-ssgs"}},[_v("Research on Other SSGs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#research-on-other-ssgs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working on Markbind, I thought that it would definitely be essential to survey other Static Site Generators and the competition faced by MarkBind.")]),_v(" "),_c('p',[_v("Researching other SSGs available (many of which are open source as well) has allowed me to gain a broader picture of the roadmap of MarkBind.")]),_v(" "),_c('p',[_v("For example, Jekyll is simple and beginner-friendly, often paired with GitHub Pages for easy deployment. It has a large theme ecosystem for rapid site creation. Hugo has exceptional build speeds even for large sites. Other SSGs offer multiple rendering modes (SSG, SSR, CSR) on a per page basis, support react etc. Considering that the community for all these other SSGs are much larger and they have much more resources and manpower to devote, I thought about how MarkBind could learn from these other SSGs.")]),_v(" "),_c('h4',{attrs:{"id":"insights-that-could-be-applied-to-markbind"}},[_v("Insights that could be applied to MarkBind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#insights-that-could-be-applied-to-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Overall, some insights that can be applied to MarkBind would be to:")]),_v(" "),_c('ul',[_c('li',[_v("Focus on Content-Heavy Instructional Websites\n"),_c('ul',[_c('li',[_v("Double down on features tailored for educational, project documentation, and course websites.")]),_v(" "),_c('li',[_v("Highlight built-in components like popovers, tabs, and collapsible panels as unique differentiators.")])])]),_v(" "),_c('li',[_v("Emphasize \"Out-of-the-Box\" Functionality\n"),_c('ul',[_c('li',[_v("Simplify onboarding and documentation for new users.")]),_v(" "),_c('li',[_v("Provide all essential features for documentation by default (e.g., diagrams, code snippets, multi-level navigation).")]),_v(" "),_c('li',[_v("Position MarkBind as a solution that minimizes configuration while maximizing flexibility.")]),_v(" "),_c('li',[_v("Provide beginner-friendly guides and videos for quick adoption.")])])]),_v(" "),_c('li',[_v("Develop Pre-Built Templates\n"),_c('ul',[_c('li',[_v("Create specialized templates for use cases like course sites, research documentation, or user guides.")]),_v(" "),_c('li',[_v("Create ready-made themes/templates focused on education and documentation.")]),_v(" "),_c('li',[_v("Allow users to deploy quickly with minimal setup.")])])])]),_v(" "),_c('h3',{attrs:{"id":"general-development-knowledge"}},[_v("General Development Knowledge"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-development-knowledge","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"commonjs-and-esm"}},[_v("CommonJS and ESM"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commonjs-and-esm","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("CommonJS (CJS) is the older type of modules and CJS were the only supported style of modules in NodeJS up till v12.")]),_v(" "),_c('ul',[_c('li',[_v("Use the syntax "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("require")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module.exports = {XX:{},}")])]),_v(" "),_c('li',[_v("Global, synchronouse require function added to import other odules.")]),_v(" "),_c('li',[_v("mark the file as a CJS module by naming as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".cjs")]),_v(" or by using type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("commonjs")]),_v(" in package.json.")])]),_v(" "),_c('p',[_v("EcmaScript Modules (ESM) standardized later and are the only natively supported module style in browsers. It is the (EcmaScript standard) JS standard way of writing modules/")]),_v(" "),_c('ul',[_c('li',[_v("use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import { XXX } from YYY")]),_v(" (top of file), "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("const { ZZ } = await import(\"CCC\");")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export const XXX = {}")]),_v(".")]),_v(" "),_c('li',[_v("Syntax addition to JS and allows to easily import and export static members.")])]),_v(" "),_c('p',[_v("Issues I faced:")]),_v(" "),_c('ul',[_c('li',[_v("I didn't realize tha my TypeScript code was being compiled to CommonJS ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("require")]),_v(") instead of ES module syntax ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v("), and hence "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" was not working correctly.")]),_v(" "),_c('li',[_v("Had to change the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tsconfig.json")]),_v(" settings appropriately.")])]),_v(" "),_c('h4',{attrs:{"id":"classic-scripts-vs-module-scripts-in-js"}},[_v("Classic Scripts vs Module Scripts in JS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#classic-scripts-vs-module-scripts-in-js","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("JavaScript offers two script types: "),_c('strong',[_v("module")]),_v(" and "),_c('strong',[_v("non-module")]),_v(".  (For web pages, JavaScript is the Prog. Lang for the web after all).")]),_v(" "),_c('p',[_c('strong',[_v("Module Script Files")]),_v(": use ES Modules ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v("/"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_v("), run in strict mode, and have local scope, making them ideal for modern, modular applications. They load asynchronously and are supported in modern browsers and Node.js (with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mjs")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"type\": \"module\"")]),_v(").")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Scope")]),_v(": Local (encapsulated)")]),_v(" "),_c('li',[_c('strong',[_v("Execution")]),_v(": Strict mode by default")]),_v(" "),_c('li',[_c('strong',[_v("Loading")]),_v(": Asynchronous, deferred")]),_v(" "),_c('li',[_c('strong',[_v("Reusability")]),_v(": High (modular)")]),_v(" "),_c('li',[_c('strong',[_v("Browser Support")]),_v(": Modern browsers")]),_v(" "),_c('li',[_c('strong',[_v("Node.js")]),_v(": Native ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mjs")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"type\": \"module\"")]),_v(")")])]),_v(" "),_c('p',[_c('strong',[_v("Non-Module Script File")]),_v(" rely on global scope, lack strict mode by default, and load synchronously. They work in all browsers and use CommonJS ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("require")]),_v(") in Node.js, making them suitable for legacy projects or simple scripts.")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Syntax")]),_v(": No "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v("/"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")])]),_v(" "),_c('li',[_c('strong',[_v("Scope")]),_v(": Global (pollution risk)")]),_v(" "),_c('li',[_c('strong',[_v("Execution")]),_v(": Non-strict by default")]),_v(" "),_c('li',[_c('strong',[_v("Loading")]),_v(": Synchronous by default")]),_v(" "),_c('li',[_c('strong',[_v("Reusability")]),_v(": Low (global dependencies)")]),_v(" "),_c('li',[_c('strong',[_v("Browser Support")]),_v(": All browsers")]),_v(" "),_c('li',[_c('strong',[_v("Node.js")]),_v(": CommonJS ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("require")]),_v(")")])]),_v(" "),_c('p',[_v("Use "),_c('strong',[_v("modules")]),_v(" for modern, scalable apps and "),_c('strong',[_v("non-modules")]),_v(" for legacy compatibility or simpler use cases. Transition to modules for better maintainability.")]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TypeScript has two main kinds of files. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".ts")]),_v(" files are implementation files that contain types and executable code. These are the files that produce "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".js")]),_v(" outputs, and are where you normally write your code. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".d.ts")]),_v(" files are declaration files that contain only type information. These files don’t produce "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".js")]),_v(" outputs; they are only used for typechecking.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("DefinitelyTyped / "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@types")]),_v(": The DefinitelyTyped repository is a centralized repo storing declaration files for thousands of libraries. The vast majority of commonly-used libraries have declaration files available on DefinitelyTyped.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Declaration Maps")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".d.ts.map")]),_v(" Declaration map (.d.ts.map) files also known as declaration source maps, contain mapping definitions that link each type declaration generated in .d.ts files back to your original source file (.ts). The mapping definition in these files are in JSON format.")]),_v(" "),_c('ul',[_c('li',[_v("This is helpful in code navigation. This enables editor features like “Go to Definition” and Rename to transparently navigate and edit code across sub projects when you have split a big project into small multiple projects using project references.")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Sun, 16 Mar 2025, 16:00:15 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  