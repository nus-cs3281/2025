
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-vscode"}},[_v("Project: VSCode"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-vscode","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("VSCode is an open-source project by Microsoft. It is a code editor that is used by almost every coder.")]),_v(" "),_c('p',[_v("VSCode runs on Electron for Desktop version, and runs on Javascript (compiled from Typescript) on the web. It does not make use of any javascript framework, because it is older than most of the javascript framework.")]),_v(" "),_c('p',[_v("I focused mainly on the functionality side of VSCode. I started out with fixing a small bug, and then moved on to contribute features to VSCode.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("ID")]),_v(" "),_c('th',[_v("Status")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("#240134")]),_v(" "),_c('td',[_v("Merged")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/microsoft/vscode/pull/240134"}},[_v("Extension detail content escapes container")])])]),_v(" "),_c('tr',[_c('td',[_v("#244074")]),_v(" "),_c('td',[_v("Pending")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/microsoft/vscode/pull/244074"}},[_v("Goto definition for built-in symbols in HTML script")])])])])])]),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("Interface - Implementation Separation")])]),_v(" "),_c('p',[_v("VSCode code base heavily makes use of this pattern, where an interface is declared to determine how the clients can interact with a given class. For example, if "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Panel")]),_v(" is a part of the code editor, then "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IPanel")]),_v(" declares the methods that other classes can call on a panel. Other classes then only references the methods declared in the interface, while different types of panels implement "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IPanel")]),_v(" then determines the actual behaviour.")]),_v(" "),_c('p',[_v("This design makes it easier to develop tests, as test cases can provide stubs to the actual implementations, reducing coupling of components especially in tests. However, this design makes it more difficult for new contributors to trace code 😅, especially when I am not sure which implementation it is supposed to be.")]),_v(" "),_c('ol',{attrs:{"start":"2"}},[_c('li',[_v("VSCode Extension")])]),_v(" "),_c('p',[_v("VSCode actually has quite a number of default extensions, most of which only activates when you open files of the corresponding languages. My second pull request necessitated me to look at "),_c('a',{attrs:{"href":"https://code.visualstudio.com/api"}},[_v("VSCode extension API")]),_v(".")]),_v(" "),_c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" specifies the behaviour of each extension. For "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("html-language-features")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("typescript-language-features")]),_v(", the file also specifies when the extension is activated.")]),_v(" "),_c('li',[_v("The default entrypoint "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("extension.ts")]),_v(" declares the functions to be called when the extension is activated and deactivated. In particular, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("typescript-language-features")]),_v(" adds VSCode disposibles, which contribute features to VSCode, such as syntax highlighting, hover text, definition content, implementations, references, etc. In contrast, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("html-language-features")]),_v(" starts a client that interacts with a server to provide features to VSCode.")])]),_v(" "),_c('p',[_v("My second pull requests touches mainly on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("html-language-features")]),_v(". In the extension, the responsibility of implementing the features lies within the server.")]),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_v("One Class - One Component")])]),_v(" "),_c('p',[_v("This is consistent with many modern Javascript framework. In VSCode, each component is declared with a class. The actual DOM element is declared as an instance field. Operations that alter the DOM then references this field.")]),_v(" "),_c('h3',{attrs:{"id":"other-observations"}},[_v("Other Observations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#other-observations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("VSCode Engineering Bot")])]),_v(" "),_c('p',[_v("In VSCode, approximately 100 pull requests are merged everyday. VSCode has a dedicated bot to assign a human reviewer to a PR from an external contributor. From my observation, the reviewer assigned is usually the one that has experience in the field, usually the person has commented on or is the creator of the original issue that the PR is addressing.")]),_v(" "),_c('p',[_v("I believe this bot can be quite useful for the CATcher - WATcher. During off-season time, PRs tend to be ignored, because students do not check the repository regularly for external contributions, and PR creators do not request for review. While it can be an issue where the assigned person already graduated or is MIA, there are possible fixes:")]),_v(" "),_c('ul',[_c('li',[_v("Reviewing the PR does not strictly need to be done by the assigned person. Other people can hop in as well. The purpose of the bot is then only to make sure that PRs have at least 1 review.")]),_v(" "),_c('li',[_v("The bot can assign the PR to a second person if the first person does not respond after a period of time.")])]),_v(" "),_c('ol',{attrs:{"start":"2"}},[_c('li',[_v("CLA Agreement")])]),_v(" "),_c('p',[_v("Before the VSCode Engineering bot even assign the PR to a person, new contributors need to sign an agreement. The agreement is raised by another bot via a comment, below which I could just reply to agree. The gist of the agreement was that I would authorise VSCode to use my code, and that I grant them full patent rights.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Mon, 7 Apr 2025, 9:25:43 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  