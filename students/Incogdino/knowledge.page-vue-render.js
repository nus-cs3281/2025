
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML documents.")]),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('p',[_v("Safari, Chrome and Firefox are commonly used web browsers. They all adhere to web standards, however they face differences in terms of how they handle the rendering of a web application.")]),_v(" "),_c('p',[_v("The different rendering engine that each browser is built on can cause different rendering outcomes for different functions. Browsers can intepret the different CSS styles differently")]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('p',[_v("Main benefit of virtual DOM is that it gives the developer the ability to programmatically create, inspect and compose desired UI structures in a declarative way, while leaving the direct DOM manipulation to the renderer")]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_c('p',[_v("Templates provides easy way to write the virtual dom and get compiled into a render function. However, the virtual dom can directly be created through the render function itself.")]),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("The downside of virtual dom is the runtime aspect of it.")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_c('p',[_v("According to my current understanding:")]),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('p',[_v("Markbind allows users to specify the address of localhosts in the IPV4 format. It does not support specifying IPV6 IP addresses.")]),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('p',[_v("Cross origin resource sharing (CORS) is a mechanism that allows a web client to requests for resources over the internet. This can be things like third party APIs, videos, fonts, etc.")]),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Cross-origin")]),_v(": A resource URL that is not the same as the URL of the visited browser.")])]),_v(" "),_m(33),_v(" "),_c('p',[_v("The issue of cross site forgery issues: malicious attackers can trick users to execute unwanted actions on a web application while being autenthicated. For instance, if a user is logged into a banking application, the attacker can trick the user into loading an external website on a new tab. Then, using the cookie credentials of the user, the attacker can impersonate the user and access banking information of the user.")]),_v(" "),_m(34),_v(" "),_c('p',[_v("Same origin policy is like a ninja working in the shadows, preventing malicious users from trying to attack you. However, such tight restrictions means browsers are not able to access data across different origins. This may be necessary for applications that rely on external services such as calling third party APIs.  This is where CORS come into place - it extends SOP by relaxing SOP in a controlled mannner.")]),_v(" "),_m(35),_v(" "),_c('p',[_v("CORS is primarily used when there is a need for a browser to pull or share data from an external resource. The request-resposne process is as follows (assume HTTP):")]),_v(" "),_m(36),_v(" "),_c('p',[_v("If a mismatch happens in step 3, then we get a CORS Missing Allow Origin error.")]),_v(" "),_m(37),_v(" "),_c('p',[_v("Preflight requests are usually used for more complex and riskier requests. It is used to ensure that the server knwows what complex methods and headers to expect. They are also automatically issued by the browser.")]),_v(" "),_m(38),_v(" "),_m(39)],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(40)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"css"}},[_v("CSS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#css","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("word-break")]),_v(" property: The word break property provides opportunities for soft wrapping.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Different languages can specify different ways of breaking a sentence of text")]),_v(" "),_c('li',[_v("Significance comes from deciding how to break up a word either by character or word.")]),_v(" "),_c('li',[_v("For instance, in some languages like Ethopic, it has two styles of line breaking, namely by word seperators or between letters within a word.")]),_v(" "),_c('li',[_v("Markbind is mainly catered to English content and thus specifies line breaks at spaces.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"differences-in-render-environment"}},[_v("Differences in render environment"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#differences-in-render-environment","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vue"}},[_v("Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"vue-components"}},[_v("Vue components"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-components","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Properties are being passed to vue components as props. These properties specifies the different configurations of the html templates.")]),_v(" "),_c('li',[_v("Content passed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("slots")]),_v(" API are considered to be owned by the parent component that passes them in and so styles do not apply to them. To apply styles to these components, target the surrounding container and then the style using a CSS selector such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".someClass > *")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"virtual-dom"}},[_v("Virtual DOM"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#virtual-dom","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("“virtual” representation of a UI is kept in memory and synced with the “real” DOM")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Mounting -")]),_v(" A runtime renderer walking through the virtual dom and construct an actual dom tree from it")]),_v(" "),_c('li',[_c('strong',[_v("Patching -")]),_v(" Two copies of virtual DOM trees walked and compared differences are found and changes are applied to the actual DOM")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"how-vue-components-are-mounted"}},[_c('strong',[_v("How Vue components are mounted")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-vue-components-are-mounted","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/2025/students/Incogdino/images/render-pipeline.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/2025/students/Incogdino/images/render-pipeline.png","alt":"vue render pipeline"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("Compilation")]),_v(" - Vue templates are compiled into "),_c('strong',[_v("render functions.")]),_v(" The render functions are used to generate virtual doms")]),_v(" "),_c('li',[_c('strong',[_v("Mounting")]),_v(" - render function is called, and virtual dom is walked to create actual dom\n"),_c('ul',[_c('li',[_v("Performed as a reactive effect, keeps track of all reactive dependencies used")])])]),_v(" "),_c('li',[_c('strong',[_v("Patch")]),_v(" -  a dependency used during mount changes, the effect re-runs → a new, updated Virtual DOM tree is created and "),_c('strong',[_v("patching")]),_v(" is done")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Writing render functions directly provides flexibility when it comes to directly manipulating vnodes itself")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"vue-optimisations-when-it-comes-to-updating-the-virtual-dom"}},[_c('strong',[_v("Vue optimisations when it comes to updating the virtual dom")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-optimisations-when-it-comes-to-updating-the-virtual-dom","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("the reconciliation algorithm cannot make any assumptions about the incoming virtual DOM tree, so it has to fully traverse the tree and diff the props of every vnode in order to ensure correctness")])]),_v(" "),_c('li',[_c('p',[_v("even if a part of the tree never changes, new vnodes are always created for them on each re-render, resulting in unnecessary memory pressure.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Static hoisting")]),_v(" - static codes that are non reactive and never updated are hoisted (removed) from the virtual dom")]),_v(" "),_c('ul',[_c('li',[_v("when there are enough consecutive static elements, they will be condensed into a single \"static vnode\" that contains the plain HTML string for all these nodes")]),_v(" "),_c('li',[_v("They also cache their corresponding DOM nodes on initial mount - if the same piece of content is reused elsewhere in the app, new DOM nodes are cloned")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Patch flags -")]),_v(" flags that indicate whether a vnode requires reconciliation. Bitwise checks are used for these flags which are faster")]),_v(" "),_c('ul',[_c('li',[_v("Path flags are also applied to the type of children the vnodes has. (fragment) Their order is not changed and thus a path flag is also applied to them")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Tree Flattening")]),_v(" - Tracked lines of code only applies to those that have patch flags applied")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<div> <!-- root block -->\n")]),_c('span',[_v("  <div>...</div>         <!-- not tracked -->\n")]),_c('span',[_v("  <div :id=\"id\"></div>   <!-- tracked -->\n")]),_c('span',[_v("  <div>                  <!-- not tracked -->\n")]),_c('span',[_v("    <div></div> <!-- tracked -->\n")]),_c('span',[_v("  </div>\n")]),_c('span',[_v("</div>\n")]),_c('span',[_v("\n")]),_c('span',[_v("div (block root)\n")]),_c('span',[_v("- div with :id binding\n")]),_c('span',[_v("- div with  binding\n")])])]),_c('ul',[_c('li',[_v("This creates a flattened tree and reduces the nodes that needs to be traversed.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"testing"}},[_v("Testing:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Vue component test utilities library: "),_c('a',{attrs:{"href":"https://v1.test-utils.vuejs.org/api/wrapper/#properties"}},[_v("Wrapper")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Testing is done by first creating a wrapper with the component to be tested.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$nextTick()")]),_v(" function of the vm of the wrapper is then called which waits for the next DOM update flush.")]),_v(" "),_c('li',[_v("The generated HTML is then compared with the snapshot that is generated.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"devops"}},[_v("DevOps"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#devops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/writing-workflows"}},[_v("Github Actions")]),_v(" is used when writing workflows.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Workflows are defined using YAML")]),_v(" "),_c('li',[_v("They are trigered by events that is used to automate checks. Some events include pushes, pull requests, issues, and more.")]),_v(" "),_c('li',[_v("Workflows can make use of GitHub Actions context variables to gain information about the workflow runs, variables, runner environements, jobs and steps.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Context Variables:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("github")]),_v(" context is freuqently used for retrieving useful information of the current workflow run. Some examples used(but not limited to) include :")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("github.actor")]),_v(" is used to detect the username of the user that triggered the workflow event. It can also be used to detect bots who trigger the events.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("github.event_name")]),_v(" is used to detect the name of the event that triggered the workflow. In the context of markbind, this is often used to check if the triggered workflow is of a particular event (such as pull request) before running the script.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("A "),_c('a',{attrs:{"href":"https://www-sciencedirect-com.libproxy1.nus.edu.sg/science/article/pii/S0164121224003315"}},[_v("potential limitation")]),_v(" arises when using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("github.actor")]),_v(" to detect bot accounts. That is, if the bot is a github account that is automated by a user. In this case, github currently has no way to detect such accounts.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Proposed potential workaround: Manually identify the human bot accounts.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"localhost"}},[_v("LocalHost"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#localhost","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Local testing of sites often uses "),_c('a',{attrs:{"href":"http://localhost"}},[_v("localhost")]),_v(" to run up a local server. This often resolves to the IP address of 127.0.0.1.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("IP addresses that starts with 127 are reserved and are “local loopback addresses”, this means it references a device on the private , local network")]),_v(" "),_c('li',[_v("Outside devices cannot reach local loopback addresses, making it suitable for testing.")]),_v(" "),_c('li',[_v("Locally, "),_c('a',{attrs:{"href":"http://localhost"}},[_v("localhost")]),_v(" acts as the domain name for the loopback IP address 127.0.0.1")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"bots"}},[_v("Bots"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bots","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Markbind uses the "),_c('a',{attrs:{"href":"https://allcontributors.org/"}},[_v("all-contributor")]),_v(" bot to add contributors to automate the process of adding contributors to the project")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"cors-cross-origin-resource-sharing"}},[_v("CORS (Cross-Origin Resource Sharing)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cors-cross-origin-resource-sharing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"importance-of-cors"}},[_v("Importance of CORS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#importance-of-cors","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("One solution built around this issue is the "),_c('a',{attrs:{"href":"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"}},[_v("same origin policy")]),_v(". This policy specifies that clients can only request for a resource with the same origin as the client's url.That is, the protocol, port and hostname of the client's URL should match with that of the server. Any cross origin requests are not allowed by the browser. This means that any website you visit on the browser cannot access any other resource such as your email invox or online banking application as they belong to a seperate origin.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"the-workings-of-cors"}},[_v("The workings of CORS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#the-workings-of-cors","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Browser wants to access a cross origin resource, browsers adds origin header, protocol, host and port number to the HTTP request.")]),_v(" "),_c('li',[_v("Server receives the request, checks the origin header and responds with the requested resource alongside a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Access-Control-Allow-Origin")]),_v(" header.")]),_v(" "),_c('li',[_v("Browser receives the access control request header and returns the requested resource with the client application only if the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Access-Control-Allow-Origin")]),_v(" header matches the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Origin")]),_v(" value of the request header")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"cors-preflight-request"}},[_v("CORS Preflight Request"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cors-preflight-request","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CORS specification defines a "),_c('a',{attrs:{"href":"https://web.dev/articles/cross-origin-resource-sharing#preflight-requests"}},[_v("complex request")]),_v(" as follows:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("A request that uses methods other than GET, POST, or HEAD.")]),_v(" "),_c('li',[_v("A request that includes headers other than Accept, Accept-Language or Content-Language.")]),_v(" "),_c('li',[_v("A request that has a Content-Type header other than application/x-www-form-urlencoded, multipart/form-data, or text/plain.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Thu, 10 Apr 2025, 6:14:16 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  