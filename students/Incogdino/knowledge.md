## CSS
CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML documents.

`word-break` property: The word break property provides opportunities for soft wrapping. 
- Different languages can specify different ways of breaking a sentence of text
- Significance comes from deciding how to break up a word either by character or word. 
- For instance, in some languages like Ethopic, it has two styles of line breaking, namely by word seperators or between letters within a word. 
- Markbind is mainly catered to English content and thus specifies line breaks at spaces.

### Differences in render environment
Safari, Chrome and Firefox are commonly used web browsers. They all adhere to web standards, however they face differences in terms of how they handle the rendering of a web application. 

The different rendering engine that each browser is built on can cause different rendering outcomes for different functions. Browsers can intepret the different CSS styles differently 

### Vue
Vue is a JavaScript framework that is used to create interactive interfaces. it is built on top of standard web tech like HTML, CSS and JavaScript and enhances them with its API. Vue has features such as reactivve rendering, allowing for components to update automatically without needing any manual developer manipulation as well as component-based architecture promoting reuse and modularity in applications. 

Markbind uses Vue for most of its frontend components, mainly with the Options API of Vue.

##### \<template\>
This is the content that gets rendered into the DOM. It takes on regualar HTML syntax alongside Vue-specific syntax (Vue directives) to bind data, handle events and conditionally render elements.

Some useful vue directives are: 
- `v-for`: Loop through a list
- `v-if`: Conditionally render an element (removes from DOM)
- `v-else`: Used after `v-if` to handle the "else" case
- `v-show`: Conditionally display an element (uses `display: none`)
- `v-bind`: Bind a value to an attribute dynamically


##### \<script\>
This is the part that is used to handle logic of my component. It is also used to give components "reactivity". For example, declaring props, data, writing methods, importing libraries or vue components, handling lifecycle hooks, generating constants, etc.

Options:
- `data` - Used to declare reactive states of a component.
- `mounted` - Lifecycle hook that runs after the component is mounted to the DOM. Useful to call methods to populate variables defined in `data`.
- `props` - Defines external data passed into the component from the parent
- `components` - Registers child components used inside the current component
- `methods` - Defines functions that can be used inside the template
- `computed`- Declares derived values that update reactively based on `data` or `props`

- Properties are being passed to vue components as props. These properties specifies the different configurations of the html templates. 
- Content passed by the `slots` API are considered to be owned by the parent component that passes them in and so styles do not apply to them. To apply styles to these components, target the surrounding container and then the style using a CSS selector such as `.someClass > *`

##### \<style\>
This defines the css styles that can be applied to this current component. If no style is defined, then it will just inherit any global or parent styles that applies.

#### Virtual DOM

> “virtual” representation of a UI is kept in memory and synced with the “real” DOM

- **Mounting -** A runtime renderer walking through the virtual dom and construct an actual dom tree from it
- **Patching -** Two copies of virtual DOM trees walked and compared differences are found and changes are applied to the actual DOM

Main benefit of virtual DOM is that it gives the developer the ability to programmatically create, inspect and compose desired UI structures in a declarative way, while leaving the direct DOM manipulation to the renderer

##### **How Vue components are mounted**

![vue render pipeline](./images/render-pipeline.png)

1. **Compilation** - Vue templates are compiled into **render functions.** The render functions are used to generate virtual doms
2. **Mounting** - render function is called, and virtual dom is walked to create actual dom 
    - Performed as a reactive effect, keeps track of all reactive dependencies used
3. **Patch** -  a dependency used during mount changes, the effect re-runs → a new, updated Virtual DOM tree is created and **patching** is done

#### Rendering on the server side (SSR)
[Reference](https://vuejs.org/guide/scaling-up/ssr.html#server-side-rendering-ssr)
By default, the DOM is produced and manipulated directly on the browser. This can be slow especially in the case of large DOMs. Vue supports server side rendering where the DOM is generated and HTML strings are created on the server, sent over to the browser and "hydrate"-ed into an interactive application on the client side by inserting all the reactive elements, listeners, etc.

Advantages: 
1. Faster time to content
1. Unified mental model
1. Better SEO

Tradeoffs:
1. More involved build setup and deployment requirements
1. Development constraints, Browser-specific code can only be used inside certain lifecycle hooks
1. More server-side load

#### Testing:
Vue component test utilities library: [Wrapper](https://v1.test-utils.vuejs.org/api/wrapper/#properties)

According to my current understanding:
- Testing is done by first creating a wrapper with the component to be tested.
- The `$nextTick()` function of the vm of the wrapper is then called which waits for the next DOM update flush.
- The generated HTML is then compared with the snapshot that is generated. 

## DevOps
[Github Actions](https://docs.github.com/en/actions/writing-workflows) is used when writing workflows. It allows for automating the building, testing and deployment pipelines. Markbind uses it for various purposes:
1. Testing (ensuring existing/new test cases pass)
1. Automated replies (Checking of new user)
1. Ensuring workflow procedures are followed (Checking for missing pr information)

GitHub Actions details:
- Workflows are defined using YAML
- They are trigered by `events` that is used to automate checks. Some events include pushes, pull requests, issues, and more. 
- Workflows can make use of GitHub Actions context variables to gain information about the workflow runs, variables, runner environements, jobs and steps.

**Context Variables:**

`github` context is freuqently used for retrieving useful information of the current workflow run. Some examples used(but not limited to) include :
- `github.actor` is used to detect the username of the user that triggered the workflow event. It can also be used to detect bots who trigger the events. 
- `github.event_name` is used to detect the name of the event that triggered the workflow. In the context of markbind, this is often used to check if the triggered workflow is of a particular event (such as pull request) before running the script. 

A [potential limitation](https://www-sciencedirect-com.libproxy1.nus.edu.sg/science/article/pii/S0164121224003315) arises when using `github.actor` to detect bot accounts. That is, if the bot is a github account that is automated by a user. In this case, github currently has no way to detect such accounts.
- Proposed potential workaround: Manually identify the human bot accounts. 

### Bots
Markbind uses the [all-contributor](https://allcontributors.org/) bot to add contributors to automate the process of adding contributors to the project 

#### LocalHost
Local testing of sites often uses [localhost](http://localhost) to run up a local server. This often resolves to the IP address of 127.0.0.1.

Markbind allows users to specify the address of localhosts in the IPV4 format. It does not support specifying IPV6 IP addresses. 

- IP addresses that starts with 127 are reserved and are “local loopback addresses”, this means it references a device on the private , local network
- Outside devices cannot reach local loopback addresses, making it suitable for testing.
- Locally, [localhost](http://localhost) acts as the domain name for the loopback IP address 127.0.0.1


## CORS (Cross-Origin Resource Sharing)
Cross origin resource sharing (CORS) is a mechanism that allows a web client to requests for resources over the internet. This can be things like third party APIs, videos, fonts, etc.

<box type="info"> 

`Cross-origin`: A resource URL that is not the same as the URL of the visited browser.
</box>

### Importance of CORS 
The issue of cross site forgery issues: malicious attackers can trick users to execute unwanted actions on a web application while being autenthicated. For instance, if a user is logged into a banking application, the attacker can trick the user into loading an external website on a new tab. Then, using the cookie credentials of the user, the attacker can impersonate the user and access banking information of the user.

One solution built around this issue is the [same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). This policy specifies that clients can only request for a resource with the same origin as the client's url.That is, the protocol, port and hostname of the client's URL should match with that of the server. Any cross origin requests are not allowed by the browser. This means that any website you visit on the browser cannot access any other resource such as your email invox or online banking application as they belong to a seperate origin.

Same origin policy is like a ninja working in the shadows, preventing malicious users from trying to attack you. However, such tight restrictions means browsers are not able to access data across different origins. This may be necessary for applications that rely on external services such as calling third party APIs.  This is where CORS come into place - it extends SOP by relaxing SOP in a controlled mannner.

### The workings of CORS
CORS is primarily used when there is a need for a browser to pull or share data from an external resource. The request-resposne process is as follows (assume HTTP):
1. Browser wants to access a cross origin resource, browsers adds origin header, protocol, host and port number to the HTTP request.
2. Server receives the request, checks the origin header and responds with the requested resource alongside a `Access-Control-Allow-Origin` header.
3. Browser receives the access control request header and returns the requested resource with the client application only if the `Access-Control-Allow-Origin` header matches the `Origin` value of the request header

If a mismatch happens in step 3, then we get a CORS Missing Allow Origin error. 

### CORS Preflight Request
Preflight requests are usually used for more complex and riskier requests. It is used to ensure that the server knwows what complex methods and headers to expect. They are also automatically issued by the browser.

CORS specification defines a [complex request](https://web.dev/articles/cross-origin-resource-sharing#preflight-requests) as follows:
1. A request that uses methods other than GET, POST, or HEAD.
2. A request that includes headers other than Accept, Accept-Language or Content-Language.
3. A request that has a Content-Type header other than application/x-www-form-urlencoded, multipart/form-data, or text/plain.

## CDN (Content Delivery Network)
A Content Delivery Network is basically a hosting service for libraries. They offer content delivery services to serve files such as JavaScript libraries, stylesheets, fonts, and other static assets from distributed servers all over the world. Serving files from the CDN can help improve loading time and reduce latency through serving the assets from the closest server.  

**So why CDN over serving the file locally?**
There are many reasons for this: 
1. Faster load times - users get files delivered from the closest server as compared to our own server which may be far away. In the case of Markbind, this means that the place where the author chooses to host their website will determine the location that serves the asset if we were to bundle the files locally.
1. Caching - files used frequently are cached on the browser. This means that the browser does not need to refetch the data again and can immediately use the file again, which can significantly improve on the load time.
1. Lower load on server - your server will thus not need to store extra information (the bundled files) and send them over to the reader. This saves on bandwith and can also improve loading times.

However, there can be some cases where having the file served locally can be ideal:
1. Offline usage - one downside of CDNs is the need to access the internet. This prevents us from getting access to the asset if the device is not connected to the internet and can cause some issues with the rendered site (in the case of Markbind).
1. Unreliability in CDN servers - Though rare and unlikely to happen due to the distributed architecture of CDNs, the assets can sometimes not get delivered due to issues on the server side. In such a case, the rendered site will not be able to render properly as well (as in [#2667](https://github.com/MarkBind/markbind/issues/2667) where we faced the CORS issue). 

## JavaScript Moduling Systems (CJS VS ESM)

**Syntax:**
| Feature | CommonJS (CJS) | ES Modules (ESM) |
| ---- | ------------ | -- |
| Import | `const module = require('module')` | `import module from 'module'` |
| Export | `module.exports = value` or `exports.foo` | `export default value` or `export const foo = ...` |

### CJS (CommonJS)
Module system that is used in Node.js environments to organise and reuse code across different files. Modules in JavaScript are organised chunk of code that makes up a more complex application. 

**Benefits:**
1. Allows for dependency tree analysis
1. Established ecosystem

**Drawbacks:**
1. Synchronous
1. Requires bundling for non-cjs runtimes (this applies to modern browsers)

### ESM (ECMAScript Modules)
Modern JavaScript module system that is standardized in the ECMAScript specification and supported natively in both browsers and Node.js.

**Benefits:**
1. Supported in both modern browsers and runtimes like node
1. Allows synchronous and asynchronous loading

### What to use
CommonJS tend to be older and still used for legacy reasons. The benefits associated with ESM greatly outweighs those of CJS. Though both module systems can work together as well but it gives some complications with regards to the issue of default and named exports.