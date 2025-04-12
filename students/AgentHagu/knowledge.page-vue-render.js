
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"tech-stack"}},[_v("Tech Stack"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tech-stack","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"vuejs"}},[_v("VueJS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vuejs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("VueJS is a JavaScript framework for building user interfaces, similar to React. It offers reactive data binding and a component-based architecture, allowing developers to create reusable components that allow for parent-child relationships. Vue is used extensively in MarkBind to create and render website components, such as pages, boxes, code blocks, etc.")]),_v(" "),_c('h4',{attrs:{"id":"resources"}},[_v("Resources:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/tutorial/#step-1"}},[_v("VueJS Tutorial")]),_v(" - Official tutorial for VueJS")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/guide/introduction.html"}},[_v("VueJS Guide")]),_v("- Official VueJS Guide")])]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TypeScript is a programming language that builds upon JavaScript by adding static typing, enabling developers to catch errors at compile time and write more maintainable code as compared to JavaScript. MarkBind uses TypeScript primarily in its "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("core")]),_v(" package.")]),_v(" "),_c('p',[_v("MarkBind also has documentation describing the "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html"}},[_v("migration process from JavaScript to TypeScript")]),_v(". The migration PR should be structed as two commits, a \"Rename\" commit and an \"Adapt\" commit.")]),_v(" "),_c('ul',[_c('li',[_v("The \"Rename\" commit is a commit specifically for renaming files from having the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".js")]),_v(" extension to having the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".ts")]),_v(" extension. Git should regard the changes of this commit as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rename")]),_v(".")]),_v(" "),_c('li',[_v("The \"Adapt\" commit is to adapt the files fully to TypeScript. This means fixing things like changing syntax to match TypeScript's syntax or adding types as necessary.")])]),_v(" "),_c('p',[_v("This two-step process for the migration helps to ensure Git views these changes as a renaming and adaption of the "),_c('em',[_v("same")]),_v(" file, rather than a deletion and creation. This helps with the review process on GitHub, as the diffs are shown side-by-side instead of entirely different files. For example, see the commit history in "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2199/files"}},[_v("this PR")]),_v(". It also ensures that the history of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".ts")]),_v(" file can still be traced back to its "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".js")]),_v(" version, preserving valuable information for future developers.")]),_v(" "),_c('p',[_v("TypeScript uses a configuration file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tsconfig.json")]),_v(" to define how the TypeScript compile "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tsc")]),_v(" should compile "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".ts")]),_v(" files into JavaScript. It is used primarily in MarkBind to exclude the compilation of node_module files and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".test.ts")]),_v(" files.")]),_v(" "),_c('h4',{attrs:{"id":"resources-2"}},[_v("Resources:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://www.typescriptlang.org/docs/handbook/intro.html"}},[_v("TypeScript Handbook")]),_v(" - Official documentation for TypeScript")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html"}},[_v("TypeScript Migration")]),_v(" - MarkBind's documentation for TypeScript migration")])]),_v(" "),_c('h3',{attrs:{"id":"jest"}},[_v("Jest"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jest","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Jest is a JavaScript testing framework that can be used for any JavaScript project. It runs tests defined in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".test.js")]),_v(" files using a built-in test runner. Jest provides helpful functions like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("expect")]),_v(", along with matchers like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toEqual")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toThrowError")]),_v(" to define and assert test behavior.")]),_v(" "),_c('p',[_v("In MarkBind, Jest is used extensively to test JavaScript and TypeScript files. It is primarily used for unit testing components and utility functions. These tests help prevent regressions and ensure code reliability as features evolve or are added to the codebase.")]),_v(" "),_c('p',[_v("It supports setup and teardown of any preparation needed for the tests, using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("beforeEach")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("beforeAll")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("afterEach")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("afterAll")]),_v(". This is especially useful when some setup is needed to ensure that tests are independent of each other and that they are tested under the same conditions every time. An example of this can be seen in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site.test.ts")]),_v(", where before each test enviroment variables are deleted to avoid affecting the tests themselves.")]),_v(" "),_c('p',[_v("It also supports function mocking, allowing developers to simulate and monitor function behavior — such as the number of calls and the arguments used — which is especially useful for unit testing. This can be found in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NodeProcessor.test.ts")]),_v(", where Jest is used to mock the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("logger.warn")]),_v(" function in order to track that certain messages are properly logged to the console for users.")]),_v(" "),_c('p',[_v("Jest normally works by default but it is also possible to configure it using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("jest.config.js")]),_v(" file. There are many options you can configure, like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("verbose")]),_v(" which reports every individual test during the run and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("testMatch")]),_v(" which can be used to specify which test files to run, rather than running all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".js")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".jsx")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".ts")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".tsx")]),_v(" files inside of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("__tests__")]),_v(" folders. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("testMatch")]),_v(" was used this semester to ensure only the TypeScript version of tests are ran, preventing duplicated testing from running both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".ts")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".js")]),_v(" files.")]),_v(" "),_c('h4',{attrs:{"id":"resources-3"}},[_v("Resources:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://jestjs.io/docs/getting-started"}},[_v("Jest Docs")]),_v(" - Official Jest Documentation")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jestjs.io/docs/configuration"}},[_v("Jest Config Docs")]),_v(" - Official Documentation on Jest Config")])]),_v(" "),_c('h3',{attrs:{"id":"eslint"}},[_v("ESLint"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#eslint","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("ESLint is a JavaScript and TypeScript linter that statically analyzes code to find and fix problems, enforcing consistent coding styles and catching potential bugs before runtime. It parses the code and applies a set of rules to detect issues such as syntax errors, stylistic inconsistencies and potential bugs. These rules can be configured in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".eslintrc.js")]),_v(" by extending presets like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("airbnb-base")]),_v(" or by specifying individual rules like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"func-names\": \"off\"")]),_v(".")]),_v(" "),_c('p',[_v("MarkBind uses ESLint to maintain code quality and consistency across the codebase. It helps enforce coding standards among the developers in both JavaScript and TypeScript files. ESLint is run not only during development but also during testing and CI. MarkBind has configured "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".eslintrc.js")]),_v(" to match its desired coding standard, such as enforcing a 2-space indentation.")]),_v(" "),_c('h4',{attrs:{"id":"resources-4"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-4","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://eslint.org/docs/latest/"}},[_v("ESLint Docs")]),_v(" - Official ESLint Documentation")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/blob/master/.eslintrc.js"}},[_v("MarkBind's ESLint Config")]),_v(" - MarkBind's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".eslintrc.js")]),_v(" File")])]),_v(" "),_c('h3',{attrs:{"id":"github-actions"}},[_v("GitHub Actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("GitHub Actions are a set of tools that allow developers to automate certain workfloaws and add them to their repositories. One of its main uses in MarkBind is to implemenet a Continuous Integration (CI) pipeline. PRs and commits are automatically built and tested to ensure the code stays functional, verifying the integrity of MarkBind's master branch.")]),_v(" "),_c('p',[_v("The workflows are defined in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".yml")]),_v(" files located in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".github/workflows")]),_v(" directory. Each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".yml")]),_v(" file describes:")]),_v(" "),_c('ul',[_c('li',[_v("Triggers: "),_c('em',[_v("When")]),_v(" the workflow should run (e.g. on push, pull requests, etc.)")]),_v(" "),_c('li',[_v("Jobs: A set of tasks to do, such as installing dependencies, running tests or uploading to CodeCov")]),_v(" "),_c('li',[_v("Steps: The individual commands within each job (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm install")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run setup")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run test")]),_v(" etc.)")])]),_v(" "),_c('h3',{attrs:{"id":"codecov"}},[_v("CodeCov"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#codecov","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("CodeCov is a code coverage reporting tool that helps developers understand how much of their code is tested and accounted for by automated tests. It is able to visualize which lines of code are covered and which aren't. CodeCov can be a part of the CI pipeline, where the test coverage is uploaded after all tests have passed.")]),_v(" "),_c('p',[_v("MarkBind uses CodeCov to generate the code coverage reports within PRs. The code coverage report can then be used during the review process to determine if any drop in code coverage is acceptable or should be minimized.")]),_v(" "),_c('p',[_c('strong',[_v("Code Coverage Calculations")]),_v(":"),_c('br'),_v("\nOne thing I learnt about CodeCov was how code coverage is calculated and how indirect changes affect it:")]),_v(" "),_c('ul',[_c('li',[_v("Code coverage is calculated only for files that have at least one test. That means that files with no tests at all are excluded from the coverage percentage, even if they're 0% tested. If a test is later added to such a file, that file then becomes part of the coverage calculation.")]),_v(" "),_c('li',[_v("Indirect changes occur when testing one file brings in other previously untested files. For example, if an untested file (File A) depends on other untested files (Files B, C), adding a test to File A will also pull File B and C into the coverage calculaton, even if they remain untested.")])]),_v(" "),_c('p',[_v("This behaviour explains the drop in coverage in "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/commit/d1ba06439c4d94c15c20ec97db13cc32c53b7542"}},[_v("this commit")]),_v(". Tests were added to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve.js")]),_v(", which was originally untested. This lead "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve.js")]),_v(" to be included in the coverage calculations. However, since "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve.js")]),_v(" depends on other untested files like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("logger.js")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server/index.js")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serveUtil.js")]),_v(", those files were also included indirectly in the calculation. Because those additional files were also untested, the overall coverage percentage dropped, causing the commit to fail the CI coverage check.")]),_v(" "),_c('p',[_c('strong',[_v("Upload Tokens")]),_v(":"),_c('br'),_v("\nAnother issue with CodeCov was its use of global upload tokens to upload coverage reports. These tokens were limited, meaning that during periods of high traffic, PRs would not reliably generate coverage reports (see "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2658"}},[_v("discussion issue #2658")]),_v("). This would hinder the review process and was also the reason why the drop in coverage in the previous example was only noticed "),_c('em',[_v("after")]),_v(" the PR had already been approved.")]),_v(" "),_c('p',[_v("We resolved this by migrating from CodeCov v3 to v5. In v5, the "),_c('a',{attrs:{"href":"https://github.com/codecov/codecov-action/releases/tag/v5.0.0"}},[_v("release notes")]),_v(" stated that it was now possible to upload reports "),_c('em',[_v("without")]),_v(" an upload token, provided "),_c('a',{attrs:{"href":"https://docs.codecov.com/docs/codecov-tokens#uploading-without-a-token"}},[_v("certain conditions")]),_v(" were met. One of these conditions was that our repository was public and the reports had to come from an unprotected branch.")]),_v(" "),_c('p',[_v("Since MarkBind follows a "),_c('a',{attrs:{"href":"https://se-education.org/se-book/gitAndGithub/index.html#forking-workflow"}},[_v("fork-and-PR workflow")]),_v(", these PRs from forks are considered as unprotected branches. This allowed us to take advantage of the new tokenless upload feature, making coverage uploads far more reliable during CI runs.")]),_v(" "),_c('h4',{attrs:{"id":"resources-5"}},[_v("Resources:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-5","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://docs.codecov.com/docs/quick-start"}},[_v("CodeCov Docs")]),_v(" - Official CodeCov Documentation")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/codecov/codecov-action/releases/tag/v5.0.0"}},[_v("CodeCov v5")]),_v(" - CodeCov v5.0.0 Release Notes")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://se-education.org/se-book/gitAndGithub/index.html#forking-workflow"}},[_v("Forking Workflow")]),_v(" - MarkBind's Forking Workflow Guide")])]),_v(" "),_c('h3',{attrs:{"id":"regex"}},[_v("RegEx"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#regex","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Regular Expressions (RegEx) are a sequence of characters used to match a patterns in text. They can range from simple exact-word matches to complex patterns using special characters.")]),_v(" "),_c('p',[_v("RegEx is typically used in MarkBind to validate user inputs andc heck for discrepancies. Some examples include:")]),_v(" "),_c('ul',[_c('li',[_v("The Highlighter component, to match the highlighter rules")]),_v(" "),_c('li',[_v("Within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve")]),_v(" command, to detect IP zero addresses and check the validity of IP addresses")])]),_v(" "),_c('h4',{attrs:{"id":"resources-6"}},[_v("Resources:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-6","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://www.dataquest.io/cheat-sheet/regular-expressions-cheat-sheet/"}},[_v("RegEx Cheatsheet")]),_v(" - A reference for RegEx constructs")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://regex101.com/"}},[_v("RegEx101")]),_v(" - An interactive tool for testing RegEx patterns")])]),_v(" "),_c('h2',{attrs:{"id":"markbind"}},[_v("MarkBind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"markbind-highlighter-component"}},[_v("MarkBind Highlighter Component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-highlighter-component","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In MarkBind, users can specify highlighter rules following the "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/formattingContents.html#line-highlighting"}},[_v("syntax in our User Guide")]),_v(". MarkBind then highlights the code block appropriately when rendering the site.")]),_v(" "),_c('h4',{attrs:{"id":"implementation-details"}},[_v("Implementation Details"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-details","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Markbind's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("core")]),_v(" package processes highlighter rules in the following steps:")]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Parsing Highlighter Rules")]),_v(" "),_c('ul',[_c('li',[_v("Uses RegEx in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("core/src/lib/markdown-it/highlight/HighlightRuleComponent.ts")]),_v(" to match the syntax for rules such as character or word-bounded highlights.")])])]),_v(" "),_c('li',[_c('strong',[_v("Calculating Character Bounds")]),_v(" "),_c('ul',[_c('li',[_v("Utilizes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computeCharBounds()")]),_v(" to adjust user-specified bounds, ensuring they are valid.")]),_v(" "),_c('li',[_v("Handles unbounded values and adjusts for indentation level so that bounds are relative to indentation level.")]),_v(" "),_c('li',[_v("Clamps values to ensure they stay within the valid range.")])])]),_v(" "),_c('li',[_c('strong',[_v("Wrapping Highlighted Content")]),_v(" "),_c('ul',[_c('li',[_v("Wraps text content within "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<span>")]),_v(" elements ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("highlighted")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hl-data")]),_v(") to apply the necessary highlighting when rendered.")])])])]),_v(" "),_c('h4',{attrs:{"id":"absolute-character-position-highlighting"}},[_v("Absolute Character Position Highlighting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#absolute-character-position-highlighting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h5',{attrs:{"id":"problem"}},[_v("Problem"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#problem","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Previously, the highlighter could not highlight indentation since it automatically adjusted for it during character bound calculation.")]),_v(" "),_c('h5',{attrs:{"id":"solution"}},[_v("Solution"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#solution","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I introduced a feature allowing users to specify "),_c('em',[_v("absolute")]),_v(" character positions rather than relative positions.")]),_v(" "),_c('ul',[_c('li',[_v("Users can prefix their character bounds with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("+")]),_v(" to indicate absolute positioning.")]),_v(" "),_c('li',[_v("The RegEx parser was updated to accomodate this syntax.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computeCharBounds()")]),_v(" was modified to skip indentation length adjustments if absolute bounds were detected.")])]),_v(" "),_c('h5',{attrs:{"id":"edge-case-handling-tab-characters-t"}},[_v("Edge Case: Handling Tab Characters ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\\t")]),_v(")"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edge-case-handling-tab-characters-t","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("An issue arose when using absolute bounds with tab characters. Since "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\\t")]),_v(" was considered a single character but visually occupied more space, the highlighting results were inconsistent. To resolve this:")]),_v(" "),_c('ul',[_c('li',[_v("I implemented an automatic conversion of tab charactes to four spaces using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code.replace(/\\t/g, ' ')")]),_v(".")]),_v(" "),_c('li',[_v("This ensured consistent highlighting behavior regardless of tab spacing.")])]),_v(" "),_c('h3',{attrs:{"id":"markbind-cli-commands"}},[_v("MarkBind CLI commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-cli-commands","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind provides several Command Line Interface (CLI) commands, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("init")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build")]),_v(". Details can be found in the "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/cliCommands.html#cli-commands"}},[_v("User Guide")]),_v(".")]),_v(" "),_c('h4',{attrs:{"id":"implementation-details-2"}},[_v("Implementation Details"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-details-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind's CLI functionality lies within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cli")]),_v(" package. It uses the "),_c('a',{attrs:{"href":"https://www.npmjs.com/package/commander"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("commander")]),_v(" library")]),_v(" to create and configure its CLI commands. The library allows developers to customie the commands, such as their aliases, options, descriptions and action. The user's specified root and the options are then passed on to the corresponding action function.")]),_v(" "),_c('h4',{attrs:{"id":"markbind-s-serve-command"}},[_v("MarkBind's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve")]),_v(" command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-s-serve-command","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve")]),_v(" command allows users to preview their site live. It follows these steps:")]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Receiving the CLI command")]),_v(" "),_c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("commander")]),_v(" library processes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve")]),_v(" command, along with user-specified options.")]),_v(" "),_c('li',[_v("These values are passed to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve()")]),_v(" function in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cli\\src\\cmd\\serve.js")]),_v(".")])])]),_v(" "),_c('li',[_c('strong',[_v("Building the Site")]),_v(" "),_c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve()")]),_v(" function performs preprocessing to verify that the user-specified root contains a valid MarkBind site. If not, an error is thrown and execution stops.")]),_v(" "),_c('li',[_v("A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serverConfig")]),_v(" object is created and passed to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site")]),_v(" instance before being used to configure "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("liveServer.start()")]),_v(".")])])]),_v(" "),_c('li',[_c('strong',[_v("Starting the Web Server")]),_v(" "),_c('ul',[_c('li',[_v("The server is started using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cli\\src\\lib\\live-server\\index.js")]),_v(", which is a custom patch of the "),_c('a',{attrs:{"href":"https://www.npmjs.com/package/live-server"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" library")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" uses Node.js's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("http")]),_v(" module to start the web server.")]),_v(" "),_c('li',[_v("It listens for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("error")]),_v(" event, handling errors such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EADDRINUSE")]),_v(" (port already in use) and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EADDRNOTAVAIL")]),_v(" (address not available).")]),_v(" "),_c('li',[_v("It also listens for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("listening")]),_v(" event, indicating that the server is ready so the site URL can be opened.")])])]),_v(" "),_c('li',[_c('strong',[_v("Opening the Live Preview")]),_v(" "),_c('ul',[_c('li',[_v("The "),_c('a',{attrs:{"href":"https://www.npmjs.com/package/opn"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("opn")]),_v(" library")]),_v(" is used to automatically open the preview URL.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" listens for file system events like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("change")]),_v(" to trigger a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("reload")]),_v(" event, updating the preview in real-time.")])])])]),_v(" "),_c('h4',{attrs:{"id":"issues-with-live-server-patch"}},[_v("Issues with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" Patch"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#issues-with-live-server-patch","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" patch had some issues, particularly with IPv6 addresses:")]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('strong',[_v("Invalid IPv6 URLs")]),_c('br'),_v("\nWhen an IPv6 address is supplied by the user, the opened URL is invalid. IPv6 URLs require square brackets "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[]")]),_v(", e.g., the address "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("::1")]),_v(" should be opened with a URL like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("http://[::1]:8080")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("http://::1:8080")]),_v(". As a side note, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("localhost")]),_v(" resolves to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("::1")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Incorrect Open URL for EADDRNOTAVAIL")]),_c('br'),_v("\nWhen this error occurs (indicating the specified address is unavailable), the patch retries using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("127.0.0.1")]),_v(". However, the opened URL still referenced the original unavailable address, causing confusion for users.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Missing Warning for IPv6 Broadcast Address")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve.js")]),_v(" issues a warning when users specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0.0.0.0")]),_v(" (IPv4 broadcast address), but the equivalent warning was missing for IPv6 addresses like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("::")]),_v(".")])])]),_v(" "),_c('h4',{attrs:{"id":"resources-7"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-7","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://www.npmjs.com/package/commander"}},[_v("'commander' Package")]),_v(" - Official "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("commander")]),_v(" npm page")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.npmjs.com/package/live-server"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" Package")]),_v(" - Official "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("live-server")]),_v(" npm page")])]),_v(" "),_c('h2',{attrs:{"id":"project-management"}},[_v("Project Management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-management","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TODO")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Sat, 12 Apr 2025, 9:00:10 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  