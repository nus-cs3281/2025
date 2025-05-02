### Tool/Technology 1

List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.

# Vue
### 1. Components of Vue
A Vue component typically consists of three main sections.
- Template: this defines the HTML structure
- Script: Contains the logic and data for the component
- Style: Defines the CSS specific to the component

### 2. Using Computed Properties in Vue.js

When doing experimental changes, I thought of letting users specify things like font size, font type, etc. Upon looking up the other components and stackoverflow, this is what I found

- In a basic Vue component, we can define a computed property by plaing it in the `computed` option. These
properties are automatically updates when the underlying data changes.

### 3. Using Computed Properties vs Lifecycle Hooks
While working on [PR](https://github.com/MarkBind/markbind/pull/2678), I learned about different approaches to access DOM elements.
In the `TabGroups.Vue` file, the original approach is to do
```
computed: {
    headerRendered() {
        return this.$refs.header.textContent.trim();
    }
}
```
By having the `headerRendered()` under `computed:`, the benefit is that this is reactive by nature, it automatically updates when dependencies change. However, it can cause errors if accessed before DOM is ready.

To solve the issue of Tabs not showing correctly, this is the approach we adopted:
```
mounted() {
    this.headerRendered = this.$refs.header.textContent.trim();
}
```
In this new approach, it guarantees DOM availability, which is better for one-time calulations. However, there are cons as well. This is not reactive, it requires manual upates if content changes.

I would summarize my learning in the following 3 points:
1. Computed properties are best for reactive data that needs to stay synchronized
2. Lifecycle hooks like `mounted` are safer for DOM-dependent operations
3. $refs are only populated after the component is mounted

Here are the resources that I referenced while working on the issue
- [Vue.js Lifecycle Diagram](https://vuejs.org/guide/essentials/template-refs.html)
- [Vue.js Refs Documentation](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)

### 4. My Vue2 vs Vue3 research over the recess week
Since [gerteck](https://github.com/gerteck) was working on Vue2 to Vue3 migration, I explored some differences between the 2 over the recess weeks and here are my gained knowledge.
1. Reactivity System
- Vue2: uses `Object.defineProperty` for reactivity
- Uses ES6 `Proxy`, enabling reactivity for dynamically added properties

2. Composition aPI
- Vue2: Options API only (`data`, `methods`, `computed`)
- Vue3: Introduces **Composition API** (`setup()`), allowing better logic reuse

3. Performance
- Vue2: Slower cirtual DOM diffing.
- Vue3: Faster due to optimized virtual DOM and tree-shaking support

4. Fragments
- Vue2: Requires a single root element in templates
- Vue3: Supports multiple root nodes (fragments).

Here are some documentations I referenced 
- [Vue 3 migration Guide](https://v3-migration.vuejs.org/)
- [Vue 3 vs Vue 2: What's New?](https://vuejs.org/guide/introduction.html#what-is-vue)

# HTML &  CSS
### 1. Adding Hyperlinks in HTML and Markdown

When writing in Markdown, hyperlinks are created using a specific syntax, but behind the scenes, this Markdown code is converted into HTML.

- In Markdown, we use syntax like `[Java Docs](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)` to create a hyperlink. When the Markdown is converted to HTML, it generates an anchor tag in the form of `<a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html">Java Docs</a>`. This would open the link in the same tab, as no additional attributes are specified.

- In contrast, when we write HTML durectly, we can specify additional attributes, such as `target="_blank"`, to control how the link behaves. Using the same example, `<a href="https://markbind.org/userGuide/templates.html" target="_blank">User Guide: Templates</a>` will ensure that the link opens in a new tab.

### 2. Rendering of font awesome icons using CSS

In one of my deployment on netlify, some of which did not display the font-awesomes icons properly, leading
me to research on them.

Each font awesome (fa-linkedin, fa-github) is mapped to a Unicode character in the font file. For example,
when running the HTML code `<i class="fa-house"></i>`, CSS will first apply the fa-solid class based on its 
mappings, CSS will also set aside the unicode charater for fa-house. The browser loads the web font `fa-solid-900.woff2` and displays the icon.

#### What is woff2?
WOFF2 is a webfont file format, and it is a more compressed version of WOFF and is used to deliver webpage fonts on the fly. In the context of rendering font-awesome, font awesome icons are stored as glyphs in WOFF2 font files, when running `<i class="fa-house"></i>`, the browser loads `fa-solid-900.woff2` if it is supported.

This page [page](https://stackoverflow.com/questions/15503139/icon-fonts-how-do-they-get-rendered-by-web-pages)  is pretty useful

# Web Architecture Concepts
### 1. Server-side Rendering(SSR) vs Client-side Rendering(CSR)
While investigating how components behave in Vue, I came across 2 interesting concepts - Server-Side Rendering (SSR) and Client-Side Rendering(CSR), especially in the context of statc site generation with Markbind. (interestingly, I got asked this alot during interviews when explaining Markbind)

**SSR** refers to HTML content on the server and sending the fully rendered page to the browser. This leads to faster initial page loads and better search-engine optimization (SEO), since search engines can search for contents drectly. Markbind takes a similar apporach - content is pre-rendered during build time, allowing static HTML to be servd efficiently without requiring JS to render everything on the client

**CSR**, on the other hand, renders the content in the browser using JS after the initial page load. This allows for highly dynamic, interactive applications but can result in slower time-to-content and challenges with SEO unless additional tools like prerendering are used.

By comparing these approached, it gave me a better understanding on why MarkBind's static generation strategy works well for documentation websites. These are cases where the content is relatively stable and fast load times are prioritized.

Here are some resoruces I referenced:
- [Next.js Rendering Strategies](https://nextjs.org/learn/seo/rendering-strategies)

# npm
In the beginning of the project, I ran npm commands by following instructions on the developer guide, without deep understanding of what each of them does. Here are what I learnt about npm and the different commands I frequently used.

#### 1. What is npm
npm (Node Package Manager) is a command-line tool and online registry that allows developers to install, manage, and share packages for their Node.js applications. It simplifies the management of dependencies and project automation through scripts, helping to ensure consistent evnvironments and automate repetitive tasks like testing, building and deployment.

### 2. npm link
**What it does**:
- `npm link` is udes to symlink a local package for development purposes. It creates a global symlink to a local package and links it into another project, allowing us to test changes to a package without needing to reinstall it.
**How I used it**
- One example would be when I am testing the version of markbind. I used `npm link` to connect my local development version of MarkBind, to the CS2103T website. This allows me to serve the CS2103T website locally, to check for any regression issues.

### 3. npm run build:backend
**What it does**:
- `npm run build:backend` is a custom npm script defined in MarkBind. This command is used to compile server-side code, to help build static files
**How I used it**:
- When I make changes to any `.ts` file, the changes will not be reflected after saving those cahnges and serving the test site. Instead, `npm run build:backend` needs to be run before the new changes can be reflected

# Cheerio
### 1. What is Cheerio
Cheerio is a fast, lightweight library for parsing and manipulating HTML and XML on the server side, using a jQuery-like syntax. It is built for Node.js and is ideal for use cases like:
- Server-side HTML manipulation
- Web scraping
- Static site generation tools
Here are some resources I referenced when working with Cheerio
- [Cheerio docs](https://cheerio.js.org/docs/intro)
- [Cheerio github](https://github.com/cheeriojs/cheerio)

### 2. Usage of Cheerio in markbind
While working on the PR #2649 [Branch inline highlight new](https://github.com/MarkBind/markbind/pull/2649) I gained deeper on how Markbind uses highlight for various types of inline highlighting.
1. Whole line highlight
2. Whole text highlight
3. Partial text highlight - This is where Cheerio is used

For **partial text highlight**, Cheerio is used to dynamically parse and manipulate the HTML content, with the following steps
- It parses the rendered HTML to locate the specific section that needs to be highlighted
- Then it wraps the portion with the appropriate `<span>` or similar tags to apply the highlight styling.
- This manipulation is done server-side before the final HTML is served

# Tooling and workflow
### 1. Lerna 
While working with PR #2647 [Remove parallel flag from test scripts](https://github.com/MarkBind/markbind/pull/2647/files), I experimented with Lerna's `--parallel flag` which runs tasks across packages concurrently. Here's what I learnt while playing around with it
- The `--parallel` flag speed up execution but can cause interleaved logs, making test failures harder to trace
Through my own research, I believe Lerna achieves this concurrency with the help of Node.js's single-threaded event loop architecture.

Here are the docs I referenced:
- [https://www.linkedin.com/pulse/oncurrency-node-js-khaleel-inchikkalayil?utm_source=chatgpt.com](https://www.linkedin.com/pulse/oncurrency-node-js-khaleel-inchikkalayil?utm_source=chatgpt.com)
- [https://levelup.gitconnected.com/exploring-parallelism-and-concurrency-in-node-js-4b84c2f397b](https://levelup.gitconnected.com/exploring-parallelism-and-concurrency-in-node-js-4b84c2f397b)

### 2. CJS vs ESM: Differences and Implications
In JavaScript, there are 2 major module systems for managing dependencies and code: **CommonJS(CJS)** and **ECMAScript Modules(ESM)**
1. **CJS**
This is the traditional module system used in Node.js. It uses `require()` to load modules and `module.exports` to eport functionality. Example:

```
const fs = require('fs');
const myFunction = require('./myModule');

module.exports = { myFunction };
```
Key features include:
- `require()` loads modules synchronously, blocking execution until the module is fully loaded.
- `require()` can be called anywhere in the code
- It is the default module system in Node.hs until ESM became more widely supported

CJS is ideal for traditional Node.js environments, especially when working on backend systems where synchronous loading is acceptable

2. **ESM**
ESM is the official JS module introduced in the ES6 specification and is now the standard for JS modules. The usage of ES6 differs from CJS. Using the same example as above, we got:
```
import fs from 'fs';
import { myFunction } from './myModule.js';

export { myFunction }
```
Key features include:
- Modules are loaded asynchronously using the `import` statements
- `supported natively by modern browsers and increasingly in Node.js as of version 12 and beyond

ESM is the preferred choice of JS applications, especially in frontend development and for projects that need to take advantage of tree shaking (the process of elimination dead code from the final JS bundle) and performance optimization

Here are some resrouces I referenced:
- [Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
- [Some random blog](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)
