
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular components are split into three parts, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.ts")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.html")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.css")])]),_v(" "),_c('h4',{attrs:{"id":"component-ts"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.ts")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#component-ts","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@Component({\n")]),_c('span',[_v("  selector: 'app-auth',\n")]),_c('span',[_v("  templateUrl: './auth.component.html',\n")]),_c('span',[_v("  styleUrls: ['./auth.component.css']\n")]),_c('span',[_v("})\n")])])]),_c('p',[_v("This segment is found at the top of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.ts")]),_v(" files.")]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("selector")]),_v(" indicates the keyword that will be used in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.html")]),_v(" files to identify this component. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<app-auth> </app-auth>")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("templateUrl")]),_v(" indicates the filepath to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.html")]),_v(" file.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("styleUrls")]),_v(" indicates the filepath(s) to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.css")]),_v(" file(s).")])]),_v(" "),_c('h4',{attrs:{"id":"component-html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.html")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#component-html","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This is the template file. Template files use mostly HTML syntax, with a bit of angular specific syntax included. This includes the structural directives such as *ngIf, *ngFor, etc. The "),_c('a',{attrs:{"href":"https://v17.angular.io/guide/architecture-components"}},[_v("documentation")]),_v(" is quite sufficient for understanding the angular syntax.")]),_v(" "),_c('h4',{attrs:{"id":"component-css"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.component.css")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#component-css","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This is a stylesheet, using normal css. There is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("::ng-deep")]),_v(" selector available, which promotes a component style to global style.")]),_v(" "),_c('h3',{attrs:{"id":"arcsecond"}},[_v("Arcsecond"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#arcsecond","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Arcsecond is a string parsing library for javascript. An example arcsecond parser is as follows:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("export const TutorModerationTodoParser = coroutine(function* () {\n")]),_c('span',[_v("  yield str(TODO_HEADER);\n")]),_c('span',[_v("  yield whitespace;\n")]),_c('span',[_v("\n")]),_c('span',[_v("  const tutorResponses = yield many1(ModerationSectionParser);\n")]),_c('span',[_v("\n")]),_c('span',[_v("  const result: TutorModerationTodoParseResult = {\n")]),_c('span',[_v("    disputesToResolve: tutorResponses\n")]),_c('span',[_v("  };\n")]),_c('span',[_v("  return result;\n")]),_c('span',[_v("});\n")])])]),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("str(TODO_HEADER)")]),_v(" matches the starting of the string with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TODO_HEADER")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("whitespace")]),_v(" matches the next part of the string with one or more whitespaces.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("many1(ModerationSectionParser)")]),_v(" applies the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModerationSectionParser")]),_v(" one or more times.")])]),_v(" "),_c('h3',{attrs:{"id":"graphql"}},[_v("GraphQL"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#graphql","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("GraphQL is a architecture for building APIs like REST. Unlike REST where the server defines the structure of the response, in GraphQL, the client and request the exact data they need.")]),_v(" "),_c('h3',{attrs:{"id":"node-14-x-support-on-macos"}},[_v("Node 14.x support on macos"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#node-14-x-support-on-macos","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Apple laptops changed to using ARM64 architecture back in 2020. This meant that Node versions released before then were not directly supported by the ARM64 architecture. This caused issues with the github actions. There is a workaround for this by running "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("arch -x86_64")]),_v(" and manually installing node instead of using the setup-node Github action, but the simpler solution was to upgrade the test to use Node version 16.x.")]),_v(" "),_c('p',[_v("...")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Sun, 9 Feb 2025, 12:58:25 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  