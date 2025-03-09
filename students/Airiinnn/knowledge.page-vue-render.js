
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"cypress"}},[_v("Cypress"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cypress","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TODO: Update")]),_v(" "),_c('h3',{attrs:{"id":"gradle"}},[_v("Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TODO: Update")]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/tutorial_using_tasks.html"}},[_v("Gradle tasks")])])]),_v(" "),_c('h3',{attrs:{"id":"github-actions"}},[_v("GitHub Actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"2273"}},[_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/2273"}},[_v("#2273")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2273","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Familiarised myself with how GitHub Actions work at a high level, and understood basic workflow syntax to debug failing workflow runs.")]),_v(" "),_c('p',[_v("Issue was discovered to be due to the differences between "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request_target")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request_target")]),_v(" runs in the context of the base of the pull request, rather than in the context of the merge commit. This causes changes to the workflow in the PR to not be reflected in the runs.")]),_v(" "),_c('p',[_v("Since the failure was a special case due to the "),_c('a',{attrs:{"href":"https://github.blog/changelog/2024-04-16-deprecation-notice-v3-of-the-artifact-actions/"}},[_v("deprecation of certain actions")]),_v(", exception was made to merge with the failing run. Precaution was taken to ensure the change is as intended, but trying it out on personal fork.")]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions"}},[_v("Basic workflow syntax for GitHub Actions")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows"}},[_v("Events that trigger workflows")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://runs-on.com/github-actions/pull-request-vs-pull-request-target/"}},[_v("Pull Request vs Pull Request Target trigger")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-pre-written-building-blocks-in-your-workflow"}},[_v("GitHub Actions Actions")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Sun, 9 Mar 2025, 13:55:05 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  