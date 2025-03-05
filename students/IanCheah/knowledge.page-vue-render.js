
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"tool-technology-1"}},[_v("Tool/Technology 1"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-1","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.")]),_v(" "),_c('h1',{attrs:{"id":"specific-to-vue"}},[_v("Specific to Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#specific-to-vue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"1-components-of-vue"}},[_v("1. Components of Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-components-of-vue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("A Vue component typically consists of three main sections.")]),_v(" "),_c('ul',[_c('li',[_v("Template: this defines the HTML structure")]),_v(" "),_c('li',[_v("Script: Contains the logic and data for the component")]),_v(" "),_c('li',[_v("Style: Defines the CSS specific to the component")])]),_v(" "),_c('h3',{attrs:{"id":"2-using-computed-properties-in-vue-js"}},[_v("2. Using Computed Properties in Vue.js"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-using-computed-properties-in-vue-js","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When doing experimental changes, I thought of letting users specify things like font size, font type, etc. Upon looking up the other components and stackoverflow, this is what I found")]),_v(" "),_c('ul',[_c('li',[_v("In a basic Vue component, we can define a computed property by plaing it in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed")]),_v(" option. These\nproperties are automatically updates when the underlying data changes.")])]),_v(" "),_c('h1',{attrs:{"id":"others"}},[_v("Others"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#others","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"1-adding-hyperlinks-in-html-and-markdown"}},[_v("1. Adding Hyperlinks in HTML and Markdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-adding-hyperlinks-in-html-and-markdown","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When writing in Markdown, hyperlinks are created using a specific syntax, but behind the scenes, this Markdown code is converted into HTML.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("In Markdown, we use syntax like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[Java Docs](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)")]),_v(" to create a hyperlink. When the Markdown is converted to HTML, it generates an anchor tag in the form of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<a href=\"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html\">Java Docs</a>")]),_v(". This would open the link in the same tab, as no additional attributes are specified.")])]),_v(" "),_c('li',[_c('p',[_v("In contrast, when we write HTML durectly, we can specify additional attributes, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("target=\"_blank\"")]),_v(", to control how the link behaves. Using the same example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<a href=\"https://markbind.org/userGuide/templates.html\" target=\"_blank\">User Guide: Templates</a>")]),_v(" will ensure that the link opens in a new tab.")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Wed, 5 Mar 2025, 8:38:13 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  