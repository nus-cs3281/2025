
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"tools-technology"}},[_v("Tools / Technology"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tools-technology","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"node-package-manager-npm-and-security-risks"}},[_v("Node Package Manager ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(") and Security Risks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#node-package-manager-npm-and-security-risks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("To preface, I of course knew about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" and how to use it (even before starting CS3281). However, I think it is definitely worth putting it here, because I have done some additional explorations into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" and matters of security revolving around "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(".")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" is a package manager for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node.js")]),_v(" and is usually installed (by default) together with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node.js")]),_v(". I learnt about it when I first started learning about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node.js")]),_v(" - this was about 4 years ago - during my Orbital project, where I built an entire frontend for a web application in React. Since then, I've created many React sites mindlessly with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("create-react-app")]),_v(" and using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" for package management. Mainly because it just worked. I didn't need to know more about how these worked - I just needed to create a new app prototype quickly, and it was all there was to it.")]),_v(" "),_c('p',[_v("Recently, I've been taking a bit more interest in how "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" itself is managed. Within the last few years, I have heard of how "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" vulnerabilities can be easily exploited, and that the whole system is extremely fragile. After some digging and reading up, here are some interesting details I have learnt:")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" consists of over a million packages with various different functionalities. This means that it is entirely possible for a malicious actor to create a deceptive package and hide it within the sea of legitimate utility packages.")]),_v(" "),_c('li',[_v("There are multiple ways of embedding malicious code via "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" packages. For instance, "),_c('a',{attrs:{"href":"https://www.fortinet.com/blog/threat-research/malicious-packages-hiddin-in-npm"}},[_v("here")]),_v(" are details on 9 sets of malicious code that were discovered by FortiGuard Labs in 2023. Broadly, some of these include:\n"),_c('ol',[_c('li',[_v("Extracting and uploading sensitive data such as configurations and SSH keys or source code, or fingerprinting details such as username or IP address, through a verbose, compacted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("index.js")]),_v(" file.")]),_v(" "),_c('li',[_v("Hiding a webhook to extract sensitive system information and personal data, within the installation script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("index.js")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("index.mjs")]),_v(".")]),_v(" "),_c('li',[_v("Disabling TLS certificate validation through the installation script, hence making the connection insecure and vulnerable to man-in-the-middle attacks.")]),_v(" "),_c('li',[_v("Downloading automatically a malicious executable file to the local directory.")])])]),_v(" "),_c('li',[_v("There are some general ways to mitigate (keyword: mitigate, not eliminate) security risks with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(":\n"),_c('ol',[_c('li',[_v("Use dependency & version managers to keep the system updated.")]),_v(" "),_c('li',[_v("Use security scanning tools to detect known vulnerability in packages.")]),_v(" "),_c('li',[_v("Implement a package whitelist to only allow certain approved packages.")]),_v(" "),_c('li',[_v("Conduct regular backups and implement user access control.")])])])]),_v(" "),_c('p',[_v("The fact is, the above security risks mentioned are known to the public - and hence, I imagine that actual security risks and vulnerabilities will be far more insidious and difficult to find. After learning about this, I had a moment of epiphany. When I was younger, it seemed that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" and similar package managers (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pnpm")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("yarn")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("webpack")]),_v(") were quite an impressive feat of software engineering. Now, while I still do share the same sentiment, it has been saddled with an additional layer of skepticism and cynicism.")]),_v(" "),_c('p',[_v("Drama aside, it was cool to learn about security risks and vulnerabilities in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(", and how to manage it - it would be great to help reinforce this within MarkBind as well, since we have been neglecting that aspect for some time. Now that I know how some of these attacks work, I can see that it is indeed very possible for MarkBind to be used as an entryway for some of these attacks; just because MarkBind is a static site generator, does not mean that it cannot contain similar malicious code.")]),_v(" "),_c('p',[_v("MarkBind Issue "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2607"}},[_v("#2607")]),_v(" and PR "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2608"}},[_v("#2608")]),_v(", both opened by me, represent an effort towards this direction. At least now, with "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2608"}},[_v("#2608")]),_v(" merged in, we don't have a critical vulnerability to deal with 😃")]),_v(" "),_c('p',[_v("(Possibly more to be added in as I explore "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" and security risks)")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Sun, 16 Mar 2025, 13:53:34 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  