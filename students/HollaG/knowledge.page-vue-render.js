
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"tool-technology-1"}},[_v("Tool/Technology 1"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-1","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular is the main tool used in both CATcher and WATcher. It is based on TypeScript.")]),_v(" "),_c('p',[_v("Angular is a component-based framework.\nEach component is generated with:")]),_v(" "),_c('ol',[_c('li',[_v("*.component.ts")]),_v(" "),_c('li',[_v("*.component.html")]),_v(" "),_c('li',[_v("*.component.css")])]),_v(" "),_c('p',[_v("Component state is maintained in the .ts file.  These state variables can be bound to HTML elements through use of curly braces {{}}.")]),_v(" "),_c('p',[_v("Angular offers directives such as ngIf, ngFor that allow us to \"use\" JS in the HTML files.")]),_v(" "),_c('p',[_v("Services are used for processing, for tasks that don't involve what the user sees. This is different from the .component file, which directly handles things the users see.\nServices are kept in a separate directory /services/*.")]),_v(" "),_c('p',[_v("Angular services can be \"injected\" into other services. This is done in the constructor. Once injected, the service can access of any the injected service methods.\nBut, it's important to not design the code in such a way that it causes a circular dependency. This was something I faced when implementing the presets, as the\npreset service relied on the filter service but the filter service also relied on the preset service. To fix it, we can redesign the code such that it doesn't\nhave this circular dependency or we can extract out the parts into a 3rd service that is then injected into both.")]),_v(" "),_c('h3',{attrs:{"id":"tool-technology-2"}},[_v("Tool/Technology 2"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("RxJS")]),_v(" "),_c('p',[_v("RxJS is the core component required for reactivity in Angular applications. It exposes the idea of \"observables\", and when the state of that observable changes,\nit notifies any listeners attached to it.")]),_v(" "),_c('p',[_v("Observables can be subscribed to and de-subscribed to at any time, using the .subscribe function. It is common practice to dennote observables as variables with\na trailing \""),_c('eq',{pre:true},[_c('span',{pre:true,attrs:{"class":"katex"}},[_c('span',{pre:true,attrs:{"class":"katex-mathml"}},[_c('math',{pre:true,attrs:{"xmlns":"http://www.w3.org/1998/Math/MathML"}},[_c('semantics',{pre:true},[_c('mrow',{pre:true},[_c('mi',{pre:true,attrs:{"mathvariant":"normal"}},[_v("\"")]),_c('mo',{pre:true,attrs:{"separator":"true"}},[_v(",")]),_c('mi',{pre:true},[_v("f")]),_c('mi',{pre:true},[_v("o")]),_c('mi',{pre:true},[_v("r")]),_c('mi',{pre:true},[_v("e")]),_c('mi',{pre:true},[_v("x")]),_c('mi',{pre:true},[_v("a")]),_c('mi',{pre:true},[_v("m")]),_c('mi',{pre:true},[_v("p")]),_c('mi',{pre:true},[_v("l")]),_c('mi',{pre:true},[_v("e")]),_c('mi',{pre:true,attrs:{"mathvariant":"normal"}},[_v("‘")]),_c('mi',{pre:true},[_v("m")]),_c('mi',{pre:true},[_v("y")]),_c('mi',{pre:true},[_v("O")]),_c('mi',{pre:true},[_v("b")]),_c('mi',{pre:true},[_v("s")]),_c('mi',{pre:true},[_v("e")]),_c('mi',{pre:true},[_v("r")]),_c('mi',{pre:true},[_v("v")]),_c('mi',{pre:true},[_v("a")]),_c('mi',{pre:true},[_v("b")]),_c('mi',{pre:true},[_v("l")]),_c('mi',{pre:true},[_v("e")])],1),_c('annotation',{pre:true,attrs:{"encoding":"application/x-tex","v-pre":""}},[_v("\", for example `myObservable")])],1)],1)],1),_c('span',{pre:true,attrs:{"class":"katex-html","aria-hidden":"true"}},[_c('span',{pre:true,attrs:{"class":"base"}},[_c('span',{pre:true,attrs:{"class":"strut","style":"height:0.8889em;vertical-align:-0.1944em;"}}),_c('span',{pre:true,attrs:{"class":"mord"}},[_v("\"")]),_c('span',{pre:true,attrs:{"class":"mpunct"}},[_v(",")]),_c('span',{pre:true,attrs:{"class":"mspace","style":"margin-right:0.1667em;"}}),_c('span',{pre:true,attrs:{"class":"mord mathnormal","style":"margin-right:0.10764em;"}},[_v("f")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("ore")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("x")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("am")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal","style":"margin-right:0.01968em;"}},[_v("pl")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("e")]),_c('span',{pre:true,attrs:{"class":"mord"}},[_v("‘")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("m")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal","style":"margin-right:0.03588em;"}},[_v("y")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal","style":"margin-right:0.02778em;"}},[_v("O")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("b")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal","style":"margin-right:0.02778em;"}},[_v("ser")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal","style":"margin-right:0.03588em;"}},[_v("v")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("ab")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal","style":"margin-right:0.01968em;"}},[_v("l")]),_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("e")])])])])]),_v("`.")],1),_v(" "),_c('p',[_v("An observable is somewhat similar to a stream. We can register \"stream processing functions\" such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("map")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"tool-technology-3"}},[_v("Tool/Technology 3"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Material Angular")]),_v(" "),_c('p',[_v("Material Angular is the design library used by CATcher and WATcher. Unfortunately, it is currently using version 11, when the latest version is 19. Despite this,\nmost of the API is similar.")]),_v(" "),_c('p',[_v("Material Angular allows us to use pre-made components that follow the Material design style, allowing us to have a consistent and coherent UI experience.")]),_v(" "),_c('p',[_v("...")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Sat, 12 Apr 2025, 9:00:10 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  