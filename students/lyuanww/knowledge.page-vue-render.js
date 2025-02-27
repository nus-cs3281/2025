
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"the-distinctions-between-git-and-github-in-reposense"}},[_v("The distinctions between Git and GitHub in RepoSense"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#the-distinctions-between-git-and-github-in-reposense","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While doing my user experiments on RepoSense, I noticed that the GitHub IDs of contributors were not displayed correctly in the generated contribution dashboards with only the \"--repos\" flag without the config files. This led me to investigate how RepoSense handles GitHub-specific information and how it differs from Git. Since Git logs only contain commit metadata such as author names and emails, RepoSense is unable to capture GitHub-specific information like GitHub IDs. This is because Git and GitHub, while related, are fundamentally different: Git is a version control system that tracks code changes locally, whereas GitHub is a platform built on top of Git that provides additional features like user profiles and collaboration tools. As a result, the current implementation of RepoSense cannot directly link contributions to GitHub profiles without the config files.")]),_v(" "),_c('h3',{attrs:{"id":"normalize-css"}},[_v("Normalize.css"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#normalize-css","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While researching an issue about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<hr>")]),_v(" elements in the Markdown files not appearing in the Reposense report, I discovered about the functionality of normalize.css, which provides default styling for this element along with many others. This CSS normalization ensures consistent rendering across different browsers by correcting bugs and browser inconsistencies for more predictable website styling.")]),_v(" "),_c('h3',{attrs:{"id":"tracing-the-flow-of-the-program-using-the-debugger"}},[_v("Tracing the flow of the program using the debugger"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tracing-the-flow-of-the-program-using-the-debugger","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learned how to use the debugger in IntelliJ IDEA to step through the code and inspect variables during runtime. When I continued to work on the Code Portfolio feature, I encountered a behaviour where the absent fields in the config file were not being handled correctly. By using breakpoints and watches, I could trace the flow of the program and understand how the existing code in the PR worked. This allowed me to make the necessary changes to handle the missing fields properly.")]),_v(" "),_c('h3',{attrs:{"id":"junit-tests-and-the-usage-of-resources"}},[_v("Junit tests and the usage of resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#junit-tests-and-the-usage-of-resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I wrote Junit tests for the Code Portfolio feature to ensure that the code changes did not break existing functionalities. I also learned how to use resources in Junit tests to load test data from files. This was particularly useful for testing the parsing of the config file, as I could load the test data from a file and compare the expected results with the actual results.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Thu, 27 Feb 2025, 4:02:57 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  