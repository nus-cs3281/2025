
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"tool-technology"}},[_v("Tool/Technology"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.")]),_v(" "),_c('h2',{attrs:{"id":"internal-tools-technology"}},[_v("Internal Tools/Technology"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#internal-tools-technology","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"markbind-s-search-utility"}},[_v("Markbind's Search Utility"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-s-search-utility","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"how-native-markbind-search-works"}},[_v("How Native MarkBind Search works"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-native-markbind-search-works","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Collection of Title and headings in generation:")])]),_v(" "),_c('ul',[_c('li',[_v("We trace the website generation in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site/index.ts")]),_v(".")]),_v(" "),_c('li',[_v("When building source files, during the page generation process, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Page.collectHeadingsAndKeywords")]),_v(" records headings and keywords inside rendered page into this.headings and this.keywords respectively.")]),_v(" "),_c('li',[_v("When writing site data, the title, headings, keywords are collected into pages object.")])]),_v(" "),_c('p',[_c('strong',[_v("Page Generation and Vue Initialization")])]),_v(" "),_c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("core-web/src/index.js")]),_v(", the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setupWithSearch()")]),_v(" updates the SearchData by collecting the pages from the site data.\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setupWithSearch()")]),_v(" is added as a script in the file template "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("page.njk")]),_v(" used to render the HTML structure of Markbind pages.")]),_v(" "),_c('li',[_v("This file template is used during the page generation process.")])])]),_v(" "),_c('li',[_v("Note also that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VueCommonAppFactory.js")]),_v(" provides a factory function (appFactory) to set up the common data and methods for Vue application shared between server-side and client-side, and provides the common data properties and methods.\n"),_c('ul',[_c('li',[_v("In particular, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchData[]")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchCallback()")]),_v(", which are relevant in the following portion.")]),_v(" "),_c('li',[_v("When using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<searchbar/>")]),_v(", this is where to use MarkBind's search functionality, we set the appropriate values: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(" <searchbar :data=\"searchData\" :on-hit=\"searchCallback\"></searchbar>")])])])])]),_v(" "),_c('p',[_c('strong',[_v("Vue Components: Searchbar/SearchbarPageItem.vue")]),_v(" "),_c('strong',[_v("Searchbar.vue")])]),_v(" "),_c('ul',[_c('li',[_v("The searchbar uses the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchData[]")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(", filters and ranks the data based on keyword matches and populates the dropdown with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchbarPageItems")]),_v(".")]),_v(" "),_c('li',[_v("It calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("on-hit")]),_v(" function (which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchCallback")]),_v(" is passed into) when a search result is selected.")]),_v(" "),_c('li',[_v("Presentation wise, each search result is represented by a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("searchbar-pageitem")]),_v(" vue component.")])]),_v(" "),_c('p',[_c('strong',[_v("SearchbarPageItem.vue")])]),_v(" "),_c('ul',[_c('li',[_v("Presents the component conditionally based on whether item is a heading or a page title.")])]),_v(" "),_c('h4',{attrs:{"id":"how-the-new-markbind-pagefind-plugin-works"}},[_v("How the new Markbind PageFind Plugin Works"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-the-new-markbind-pagefind-plugin-works","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("About "),_c('a',{attrs:{"href":"https://pagefind.app/"}},[_v("PageFind")]),_v(": A fully static search library that aims to perform well on large sites, while using as little of users bandwidth\nas possible, and without hosting any infrastructure.")]),_v(" "),_c('p',[_c('strong',[_v("Documentation:")])]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://pagefind.app/docs/node-api/"}},[_v("PageFind NodeJS Indexing API")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/CloudCannon/pagefind/blob/production-docs/pagefind_web_js/types/index.d.ts"}},[_v("The types returned by Pagefind’s JavaScript search API")])])]),_v(" "),_c('h4',{attrs:{"id":"integration-of-pagefind-into-markbind"}},[_c('strong',[_v("Integration of Pagefind into MarkBind")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#integration-of-pagefind-into-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("It runs after the website framework, and only requires the folder containing the built static files of the website. A short explanation of how it works would be:")]),_v(" "),_c('ul',[_c('li',[_v("PageFind indexes the static files\n"),_c('ul',[_c('li',[_v("If pagefind is included as a plugin, we indexSites with PageFind, which writes the index files  _site/pagefind")])])]),_v(" "),_c('li',[_v("Plugin exposes a pagefind JS API for searching\n"),_c('ul',[_c('li',[_v("Alternatively, use pagefind default UI for searching. This is done by processes containers with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("id=\"pagefind-search-input\"")]),_v(", and initialing a default PageFindUI instance on it, not unlike how algolia search works.")])])]),_v(" "),_c('li',[_v("This JS API is used by a custom Vue component searchbar.")])]),_v(" "),_c('h2',{attrs:{"id":"external-tools-technology"}},[_v("External Tools/Technology"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#external-tools-technology","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"research-on-other-ssgs"}},[_v("Research on Other SSGs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#research-on-other-ssgs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working on Markbind, I thought that it would definitely be essential to survey other Static Site Generators and the competition faced by MarkBind.")]),_v(" "),_c('p',[_v("Researching other SSGs available (many of which are open source as well) has allowed me to gain a broader picture of the roadmap of MarkBind.")]),_v(" "),_c('p',[_v("For example, Jekyll is simple and beginner-friendly, often paired with GitHub Pages for easy deployment. It has a large theme ecosystem for rapid site creation. Hugo has exceptional build speeds even for large sites. Other SSGs offer multiple rendering modes (SSG, SSR, CSR) on a per page basis, support react etc. Considering that the community for all these other SSGs are much larger and they have much more resources and manpower to devote, I thought about how MarkBind could learn from these other SSGs.")]),_v(" "),_c('h4',{attrs:{"id":"insights-that-could-be-applied-to-markbind"}},[_v("Insights that could be applied to MarkBind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#insights-that-could-be-applied-to-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Overall, some insights that can be applied to MarkBind would be to:")]),_v(" "),_c('ul',[_c('li',[_v("Focus on Content-Heavy Instructional Websites\n"),_c('ul',[_c('li',[_v("Double down on features tailored for educational, project documentation, and course websites.")]),_v(" "),_c('li',[_v("Highlight built-in components like popovers, tabs, and collapsible panels as unique differentiators.")])])]),_v(" "),_c('li',[_v("Emphasize \"Out-of-the-Box\" Functionality\n"),_c('ul',[_c('li',[_v("Simplify onboarding and documentation for new users.")]),_v(" "),_c('li',[_v("Provide all essential features for documentation by default (e.g., diagrams, code snippets, multi-level navigation).")]),_v(" "),_c('li',[_v("Position MarkBind as a solution that minimizes configuration while maximizing flexibility.")]),_v(" "),_c('li',[_v("Provide beginner-friendly guides and videos for quick adoption.")])])]),_v(" "),_c('li',[_v("Develop Pre-Built Templates\n"),_c('ul',[_c('li',[_v("Create specialized templates for use cases like course sites, research documentation, or user guides.")]),_v(" "),_c('li',[_v("Create ready-made themes/templates focused on education and documentation.")]),_v(" "),_c('li',[_v("Allow users to deploy quickly with minimal setup.")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Tue, 28 Jan 2025, 16:32:24 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  