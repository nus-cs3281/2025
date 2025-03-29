
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"npm-node-package-manager"}},[_v("NPM (Node Package Manager)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#npm-node-package-manager","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"managing-packages"}},[_v("Managing packages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#managing-packages","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Issue faced:")]),_v("\nI faced an "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher-docs/issues/18"}},[_v("issue")]),_v(" when setting up the project locally that was related to a default NPM package used by Node to build and compile native modules written in C++. I had to dig deep into how packages were being installed and managed by NPM to resolve the issue and have documented my findings as follows:")]),_v(" "),_c('p',[_c('strong',[_v("Knowledge gained:")])]),_v(" "),_c('ul',[_c('li',[_v("NPM is the default package manager for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node.js")]),_v(", helping developers to install and manage packages (i.e. libraries/dependencies) via "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")])]),_v(" "),_c('li',[_v("NPM hosts a collection of open-source packages at their online registry, where we can then install these packages to be used in our project")]),_v(" "),_c('li',[_v("Packages can be installed globally (i.e. system wide) or locally (i.e. per project, under the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("node_modules/")]),_v(" folder)")]),_v(" "),_c('li',[_v("Installation of packages is essentially pulling the source code of the package from NPM online registry, and will be ran locally when required. Hence it is possible (but certainly not recommended) to modify the pulled source code locally, as mentioned in one of the workarounds to this "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher-docs/issues/18"}},[_v("issue")])])]),_v(" "),_c('p',[_c('strong',[_v("Reference:")]),_v(" "),_c('a',{attrs:{"href":"https://docs.npmjs.com/packages-and-modules"}},[_v("https://docs.npmjs.com/packages-and-modules")])]),_v(" "),_c('h4',{attrs:{"id":"custom-script-definitions"}},[_v("Custom script definitions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#custom-script-definitions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Issue faced:")]),_v("\nI realised that we were using a npm command that I was very unfamiliar with, that is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")]),_v(", and I wondered what this command meant")]),_v(" "),_c('p',[_c('strong',[_v("Knowledge gained:")])]),_v(" "),_c('ul',[_c('li',[_v("When running commands in the form of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run <command>")]),_v(", e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")]),_v(", these commands are actually self-defined scripts under the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" file.")]),_v(" "),_c('li',[_v("These are different from built-in npm commands, e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm build")])])]),_v(" "),_c('p',[_c('strong',[_v("Reference:")]),_v(" "),_c('a',{attrs:{"href":"https://docs.npmjs.com/cli/v9/commands/npm-run-script"}},[_v("https://docs.npmjs.com/cli/v9/commands/npm-run-script")])]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"nvm-node-version-manager"}},[_v("NVM (Node Version Manager)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#nvm-node-version-manager","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Issue faced:")]),_v("\nCATcher uses Node 16 while WATcher uses Node 14 to build, it was hard to switch between node versions quickly when working on both projects")]),_v(" "),_c('p',[_c('strong',[_v("Knowledge gained:")]),_v("\nWe can use NVM to easily manage and switch between different node versions locally")]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"components-and-modules"}},[_v("Components and Modules"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#components-and-modules","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("A typical component in Angular consists of 3 files:")]),_v(" "),_c('ul',[_c('li',[_v("A html file that defines the layout of the component")]),_v(" "),_c('li',[_v("A css file that provides styling to the UI")]),_v(" "),_c('li',[_v("A typescript file that controls the logic and behaviour of the application, typically handles the data of the application too")])]),_v(" "),_c('p',[_v("Each component can have a module file where we can state the components or modules that this component is dependent on (i.e. the imports array) and the components that is provided by this module (i.e. the declarations array). This helps increasing the modularity and scalability of the whole application.")]),_v(" "),_c('p',[_v("As a developer coming from React, here are some clear differences I have observed:")]),_v(" "),_c('ul',[_c('li',[_v("There is no concept of states in Angular and the data passing is 2-ways, when the user updates from the UI, the value is automatically updated in the component and vice versa, whereas in React we would have to use states and explicitly update the states via setState or similar functions.")]),_v(" "),_c('li',[_v("Instead of defining the layout of componenet and logic in the same file, Angular split them into 2 seperate files (i.e. the html and typescript file), personally I felt that this split helps enforce the MVC architecture more strictly, but also imposes more restrictions when it comes to components that have tightly coupled logic")])]),_v(" "),_c('p',[_c('strong',[_v("Reference:")]),_v(" "),_c('a',{attrs:{"href":"https://v17.angular.io/guide/component-overview"}},[_v("https://v17.angular.io/guide/component-overview")])]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"catcher"}},[_v("CATcher"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"issuetablescomponent-and-how-issues-are-being-shown-in-tables"}},[_v("IssueTablesComponent and how issues are being shown in tables"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#issuetablescomponent-and-how-issues-are-being-shown-in-tables","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working on issue "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/issues/1309"}},[_v("#1309")]),_v(", I had to delve deep into how the the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IssueTablesComponent")]),_v(" is implemented in order to create new tables. A few meaningful observations learnt is summarised as follows:")]),_v(" "),_c('ul',[_c('li',[_v("The issues displayed in the table is mainly dependent on 2 things,\n"),_c('ul',[_c('li',[_v("The base issues data provided by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IssueService")]),_v(", which is initialized based on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IssuesFilter")]),_v(", and will periodically pull the issues from github")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filters")]),_v(" we inject when creating the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IssueTablesComponent")]),_v(", where the base issues can be filtered down to the issues that we are concerned of")]),_v(" "),_c('li',[_v("The action buttons and its respective functionalities are pre-defined in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IssueTableComponent")]),_v(" itself, we only specify the action buttons that we want when creating the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IssuesTablesComponent")]),_v(" through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actions")]),_v(" input.")])])])]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"github-workflows-actions"}},[_v("Github Workflows/Actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-workflows-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"how-github-workflows-actions-are-being-triggered"}},[_v("How github workflows/actions are being triggered"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-github-workflows-actions-are-being-triggered","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Issue faced:")]),_v("\nWhile working on the new phase (i.e. bug-trimming phase) for CATcher, the team decided to\nuse a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("feature-bug-trimming")]),_v(" branch as the target branch we all merge into. However, I noticed that when we created PRs / merged PRs to that feature branch (see this "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/issues/1320"}},[_v("issue")]),_v(" for more details), there are no github workflows/actions being run. This puts us at the risk of failing tests without knowing, I spent some time to learn how github workflows/actions are being triggered.")]),_v(" "),_c('p',[_c('strong',[_v("Knowledge gained:")])]),_v(" "),_c('ul',[_c('li',[_v("The potential trigger points for workflows are defined under the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("on:")]),_v(" section within the workflow file (i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".yml")]),_v(" file)")]),_v(" "),_c('li',[_v("We can automatically trigger the workflows when we "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("push")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull-request")]),_v(" to certain branches that are included:")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("on:\n")]),_c('span',[_v("  # Automatically triggers this workflow when there is a push (i.e. new commit) on any of the included branches\n")]),_c('span',[_v("  push:\n")]),_c('span',[_v("    branches: [sample-branch1, sample-branch2]\n")]),_c('span',[_v("\n")]),_c('span',[_v("  # Similar to push:, but for PRs towards the included branches\n")]),_c('span',[_v("  pull_request:\n")]),_c('span',[_v("    branches: [sample-branch1]\n")])])]),_c('ul',[_c('li',[_v("We can also define an manual trigger point using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("workflow_dispatch")]),_v(" keyword:")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("on:\n")]),_c('span',[_v("  # Allows you to run this workflow manually from the Actions tab\n")]),_c('span',[_v("  workflow_dispatch:\n")])])]),_c('p',[_c('strong',[_v("Reference:")]),_v(" "),_c('a',{attrs:{"href":"https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow"}},[_v("https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow")])]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"github-apis"}},[_v("Github APIs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-apis","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"rest-vs-graphql"}},[_v("REST vs GraphQL"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rest-vs-graphql","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Issue faced:")]),_v("\nAs both CATcher and WATcher involves heavy interaction with the GitHub API(i.e. GitHub acts like our database), I often ran into issues related to the models that we retrieve from the Github API:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/issues/1310"}},[_v("Problematic RestGithubIssueState value #1310")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/issues/1313"}},[_v("Redundant fetching of GitHub issues: Duplicated REST & GraphQL API Calls #1313")])])]),_v(" "),_c('p',[_c('strong',[_v("Knowledge gained:")])]),_v(" "),_c('ul',[_c('li',[_v("REST API\n"),_c('ul',[_c('li',[_v("Designed for standard HTTP requests and has "),_c('strong',[_v("fixed endpoints")]),_v(", hence")]),_v(" "),_c('li',[_v("responses usually have more data than needed by the users, and")]),_v(" "),_c('li',[_v("we might need multiple requests and aggregate data in the application logic to form the final results")])])]),_v(" "),_c('li',[_v("GraphQL API\n"),_c('ul',[_c('li',[_v("Designed as a query language, and can "),_c('strong',[_v("specify exactly what we need in a single request")]),_v(", hence")]),_v(" "),_c('li',[_v("we can prevent over-fetching or under-fetching")])])]),_v(" "),_c('li',[_v("GitHub adopted both API standards and provides endpoints to both these standards, allowing clients the flexibility to decide on their own what standard they want to use")]),_v(" "),_c('li',[_v("We started off the project with REST APIs, and later on decided to move towards GraphQL APIs as the customized queries fit our use case more (since GitHub is like a database to us). However, in order to prevent making breaking changes to the existing API calls, we decided to not change most of the existing REST API calls that were already implemented.")])]),_v(" "),_c('p',[_c('strong',[_v("Reference:")])]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/rest?apiVersion=2022-11-28"}},[_v("REST API")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/graphql"}},[_v("GraphQL API")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://chatgpt.com/share/67dc3c80-ba2c-800a-a4ec-d80fe9c5bfcf"}},[_v("ChatGPT's explanation")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Sat, 29 Mar 2025, 13:51:32 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  