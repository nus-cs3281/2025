
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"ngx-markdown"}},[_v("ngx-markdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ngx-markdown","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learned about the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngx-markdown")]),_v(" library while I was working on a fix to preserve whitespace when converting Markdown to HTML. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngx-markdown")]),_v(" combines multiple different language parsers and renders them in one library. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngx-markdown")]),_v(" supports Marked, Prism.js, Emoji-Toolkit, KaTeX, Mermaid, and Clipboard.js. I learned about configuring the options for the Markdown HTML element.")]),_v(" "),_c('h3',{attrs:{"id":"marked"}},[_v("Marked"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#marked","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Marked is the main parser we use for our comment editor in creating/editing issues and responses. I learned that any text that we write in Markdown syntax is converted into HTML elements using Marked. I found out that we can actually override how Marked generates the HTML elements, and we can add more attributes like classes, styles, and even modify the text before rendering it.")]),_v(" "),_c('h3',{attrs:{"id":"nvm-windows"}},[_v("nvm-windows"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#nvm-windows","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("WATcher requires node 14 in order to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm install")]),_v(" some of its dependencies. However, instead of having to install and reinstall a different node version between different projects, I can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nvm-windows")]),_v(" to install multiple node versions and switch between them. However, the latest version of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nvm-windows")]),_v(" has some issues if youwant to install node 14. After some debugging, I found out that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nvm-windows v1.1.11")]),_v(" can install node 14 with no issues.")]),_v(" "),_c('h3',{attrs:{"id":"catcher-phase-management"}},[_v("CATcher phase management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher-phase-management","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working on creating a new phase, I learnt a lot about how phases are managed in CATcher. Every phase has its own phase permissions and phase routing. Phase permissions controls certain tasks. For example, creating a new issue, deleting an issue, editing an issue is only allowed at certain phases. Every phase also has its own routing which is used to load the different pages ranging from, viewing to editing. I also learnt that the repos to hold the issues are generated only at the bug reporting phase.")]),_v(" "),_c('h3',{attrs:{"id":"git-commit-hooks"}},[_v("Git commit hooks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-commit-hooks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While I was working on a PR, I was wondering why certain parts of the code are modified after pushing a commit. I then found out that there are commit hooks in place to fix and format and lint issues. Source tree actually allows users to bypass the commit hooks if the changes are irrelevant to the PR that the user is working on.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Sat, 15 Feb 2025, 18:10:16 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  