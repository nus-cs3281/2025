
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"sorting"}},[_v("Sorting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sorting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Learnt about how sorting is done in more complex scenarios,\nfor example when entities are grouped using different attributes,\nand when there are ties in the values to sort. Had the opportunity\nto further improve sorting efficiency for descending sorts by\navoiding recomputations.")]),_v(" "),_c('h3',{attrs:{"id":"unit-tests"}},[_v("Unit Tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#unit-tests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In the process of enhacing descending sorts,\nI managed to detect a bug in the existing sorting code where unit tests\nwere passing previously due to verifiying incorrect behavior. Through\nthis experience, I learnt that existing unit tests are not infallible,\nespecially if they verify incorrect behavior. I also learnt to pay more\nattention to details and dive deep into the logic of the codebase without\nmaking any assumptions.")]),_v(" "),_c('h3',{attrs:{"id":"developer-productivity"}},[_v("Developer Productivity"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#developer-productivity","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I wrote a relatively complex unit test where the Cypress code copies an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("iframe")]),_v(",\nextracts the URL from it, then enters a new window to check for the existence of a logo.\nThis would have taken an hour to write if I manually referred to the documentation,\nand I didn't even know whether it was possible to write such a test. With the help of an\nLLM, I was able to do it in minutes. I learnt to recognize situations where LLM would\nmagnify productivity in scenarios like this one (imperative code) and actually decrease\nproductivity in other scenarios (changes requiring an overall understanding of the codebase,\nspanning multiple files).")]),_v(" "),_c('h3',{attrs:{"id":"regression"}},[_v("Regression"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#regression","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When merging a PR to enable datetime for since and until dates,\nI had an undetected regression in which ramps are not displaying\ndue to relying on dates to determine the ramp color. This bug\nwas not detected in any unit tests or system test. I learnt to\nbe more attentive to the impact of new implementations\nand also do manual tests due to the complexity of defining\ntests on the UI (Cypress). I also learnt about the tradeoffs of\ndefining UI tests on tools like Cypress, where it enables better\ndetection on regressions but also slows down the changes in new\nfeatures due to failing test cases. For example, a small change\nin the CSS might cause a large amount of Cypress tests to fail\nif they include the CSS properties in their correctness check.\nThe developer will then need a lot of time to figure out the\nreason of each of the individual test failures.")]),_v(" "),_c('h3',{attrs:{"id":"code-review"}},[_v("Code Review"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#code-review","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have reviewed code changes made by my teammates and also\none external contributor. Through this experience, I learnt\nabout various aspects of code review, for example, verifying\ncorrect behaviour, ensuring code quality, and requesting for\nmore tests or documentation if applicable. I also explored LLM-powered\ncode reviewing, for example, using Copilot to do auto code reviews.\nI recognized the tradeoffs of these solutions, where they are very good\nat detecting smaller details that human reviewers might miss, but\ncurrently lack a good \"sight\" on the overall context of the changes.")]),_v(" "),_c('h3',{attrs:{"id":"performance-benchmarking"}},[_v("Performance Benchmarking"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#performance-benchmarking","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt about performance benchmarking\nfor changes related to performance, either in time (CPU)\nor space (RAM/disk). Multiple runs are neeeded and the average\nis computed. I also learnt about the tools needed to measure\nthe consumption of various resources such as CPU time, RAM and disk.")]),_v(" "),_c('h3',{attrs:{"id":"eslint"}},[_v("ESLint"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#eslint","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Learnt about how ESLint ensures a unified style of JS/TS code.\nHad the chance to go through the ESLint documentation for\nmember-delimiter-style,\n"),_c('a',{attrs:{"href":"https://eslint.style/rules/ts/member-delimiter-style"}},[_v("https://eslint.style/rules/ts/member-delimiter-style")]),_v(",\nunderstand how it works, and make the modifications in the ESLint\nconfigurations and the codebase to ensure CI job for lintFrontend passes.")]),_v(" "),_c('h3',{attrs:{"id":"vite"}},[_v("Vite"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vite","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Learnt about how Vite build identifies the base directory when\nserving static assets. Learnt about how Vite manages its dependencies in chunks, and how chunk sizes should be minimized to optimize load perfomance. I also learnt more about how the package "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("highlight.js")]),_v(" supports code highlighting in multiple programming languages.")]),_v(" "),_c('h3',{attrs:{"id":"vercel"}},[_v("Vercel"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vercel","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Learnt how to configure Vercel on a GitHub repository.")]),_v(" "),_c('h3',{attrs:{"id":"immutability-in-java"}},[_v("Immutability in Java"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#immutability-in-java","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Learnt about the various aspects to consider when designing\nand immutable class in Java, such as:")]),_v(" "),_c('ul',[_c('li',[_v("private and final variables")]),_v(" "),_c('li',[_v("elimination of setter methods")]),_v(" "),_c('li',[_v("returning copies for mutable variables")]),_v(" "),_c('li',[_v("considerations for constructor design (method overloading vs Builder pattern)")])]),_v(" "),_c('h3',{attrs:{"id":"datetime-in-java"}},[_v("Datetime in Java"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#datetime-in-java","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt about how timezones are represented in Java LocalDatetime.\nI also learnt about the intricacies of timezone conversion, for example,\nfor timezone 'Asia/Singapore', it is UTC+7.5 before 1982 and\nUTC+8 after 1982.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Mon, 7 Apr 2025, 9:25:43 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  