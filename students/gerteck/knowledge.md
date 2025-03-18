List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.

## Internal Tools/Technology

### How MarkBind Works (Overview of everything)

In order to make more well informed changes and tackle deeper issues, I decided to cover the whole codebase of Markbind just so I could have a much fuller understanding of how different parts worked together.

While doing so, I used a MarkBind site to document the architecture and different packages and classes in the MarkBind codebase. The site can be viewed here: [https://gerteck.github.io/mb-architecture/](https://gerteck.github.io/mb-architecture/)

### Markbind's Search Utility

#### How Native MarkBind Search works
**Collection of Title and headings in generation:**
* We trace the website generation in `Site/index.ts`.
* When building source files, during the page generation process, `Page.collectHeadingsAndKeywords` records headings and keywords inside rendered page into this.headings and this.keywords respectively.
* When writing site data, the title, headings, keywords are collected into pages object.

**Page Generation and Vue Initialization**
* In `core-web/src/index.js`, the `setupWithSearch()` updates the SearchData by collecting the pages from the site data.
    * `setupWithSearch()` is added as a script in the file template `page.njk` used to render the HTML structure of Markbind pages.
    * This file template is used during the page generation process.
* Note also that `VueCommonAppFactory.js` provides a factory function (appFactory) to set up the common data and methods for Vue application shared between server-side and client-side, and provides the common data properties and methods.
    * In particular, `searchData[]` and `searchCallback()`, which are relevant in the following portion.
    * When using `<searchbar/>`, this is where to use MarkBind's search functionality, we set the appropriate values: ` <searchbar :data="searchData" :on-hit="searchCallback"></searchbar>`

**Vue Components: Searchbar/SearchbarPageItem.vue**
**Searchbar.vue**
* The searchbar uses the `searchData[]` in `data`, filters and ranks the data based on keyword matches and populates the dropdown with `searchbarPageItems`. 
* It calls the `on-hit` function (which `searchCallback` is passed into) when a search result is selected.
* Presentation wise, each search result is represented by a `searchbar-pageitem` vue component.

**SearchbarPageItem.vue**
* Presents the component conditionally based on whether item is a heading or a page title.


#### How the new Markbind PageFind Plugin Works

About [PageFind](https://pagefind.app/): A fully static search library that aims to perform well on large sites, while using as little of users bandwidth
as possible, and without hosting any infrastructure.

**Documentation:**
* [PageFind NodeJS Indexing API](https://pagefind.app/docs/node-api/)
* [The types returned by Pagefind’s JavaScript search API](https://github.com/CloudCannon/pagefind/blob/production-docs/pagefind_web_js/types/index.d.ts)

#### **Integration of Pagefind into MarkBind**
It runs after the website framework, and only requires the folder containing the built static files of the website. A short explanation of how it works would be:

* PageFind indexes the static files
    * If pagefind is included as a plugin, we indexSites with PageFind, which writes the index files  _site/pagefind 
* Plugin exposes a pagefind JS API for searching 
    * Alternatively, use pagefind default UI for searching. This is done by processes containers with `id="pagefind-search-input"`, and initialing a default PageFindUI instance on it, not unlike how algolia search works.
* This JS API is used by a custom Vue component searchbar.


## External Tools/Technology

### Vue

#### Vue 2 to Vue 3

I got the chance to experience [this](https://www.reddit.com/r/vuejs/comments/1bp72k5/vue_2_to_vue_3_upgrade_is_one_of_the_most_painful/) firsthand.
* Through the process (ongoing), it has also allowed me to uncover a significant number of bugs in MarkBind.

https://v3-migration.vuejs.org/migration-build

MarkBind (v5.5.3) is currently using Vue 2. However, Vue 2 has reached EOL and limits the extensibility and maintainability of MarkBind, especially the vue-components package. (UI Library Package). 

Vue 2 components can be authored in two different API styles: Option API and Composition API. Read the difference [here](https://dev.to/sucodelarangela/vue3-options-api-vs-composition-api-en-1fbo#:~:text=However%2C%20with%20the%20release%20of,known%20as%20the%20Options%20API.) It was interesting to read the difference between the two. 

* The Option API organizes code into predefined options like data, methods, and computed, making it simpler and more beginner-friendly but less flexible for complex logic. 
* In contrast, the Composition API uses a setup() function and reactive utilities like ref and reactive, allowing logic to be grouped by feature for better modularity and reusability. While the Option API relies on mixins for reuse, which can lead to conflicts, the Composition API enables cleaner and more scalable code through composable functions. 
  * Additionally, the Composition API offers superior TypeScript support and is better suited for large, complex applications, though it has a steeper learning curve compared to the straightforward Option API.


> Server-side rendering: the migration build can be used for SSR, but migrating a custom SSR setup is much more involved. The general idea is replacing vue-server-renderer with @vue/server-renderer. Vue 3 no longer provides a bundle renderer and it is recommended to use Vue 3 SSR with Vite. If you are using Nuxt.js, it is probably better to wait for Nuxt 3.

Currently, MarkBind Vue components are authored in the Options API style. If migrated to Vue 3, we can continue to use this API style.

##### Vue 2 to Vue 3 (Biggest Shift)

**Vue 2**
In Vue 2, global configuration is shared across all root instances as concept of "app" not formalized. All Vue instances in the app used the same global configuration, and this could lead to unexpected behaviors if different parts of the application needed different configurations or global directives. 
> E.g. global API in Vue 2, like Vue.component() or Vue.directive(), directly mutated the global Vue instance.

Some of MarkBind's plugins depend on this specific property of Vue 2 (directives, in particular, which are registered after mounting).

However, the shift to Vue 3 took into consideration the lack of application boundaries and potential global pollution. Hence, Vue 3 takes a different approach that takes a bit of effort to migrate.

**Vue 3**
In Vue 3, the introduction of the app instance via `createApp()` changes how global configurations, directives, and components are managed, offering more control and flexibility. 
* The `createApp()` method allows you to instantiate an "app," providing a boundary for the app's configuration -- Scoped Global Configuration: Instead of mutating the global Vue object, components, directives, or plugins are now registered on a specific app instance.

Also some particularities with using Vue 3:
* https://github.com/vuejs/core/issues/4344


#### Vue SFC (Single File Components)

[Reference](https://vuejs.org/guide/scaling-up/sfc.html)

> Vue uses an HTML based template syntax. All Vue templates `<template/>` are syntactically valid HTML tht can be parsed by browsers. Under the hood, Vue compiles the template into highly optimized JS code. Using reactivity, Vue figures out minimal number of components to re-render and apply minimal DOM manipulations.


SFC stands for Single File Components (*.vue files) and is a special file format thaat allows us to encapsulate the template, logic, styling of a Vue component in a single file.

* All `*.vue` files only consist of three parts, `<template>` where HTML content is, `<script>` for Vue code and `<style>`.

* SFC requires a build step, but it allows for pre-compiled templates without runtime compilation cost. SFC is a defining feature of Vue as a framework, and is the reccomended approach of using Vue for Static Site Generation and SPA. Needless to say, MarkBind uses Vue SFCs.

* `<style>` tags inside SFCs are usually injected as native style tags during development to support hot updates, but for production can be extracted and merged into a single CSS file. (which is what Webpack does)


#### Vue Rendering Mechanism

Reference: https://vuejs.org/guide/extras/rendering-mechanism

Terms:
* `virtual DOM (VDOM)` - concept where an ideal 'virtual' DOM representation of UI kept in memory, synced with the 'real' DOM. Adopted by React, Vue, other frontend frameworks.
* `mount`: Runtime renderer walk a virtual DOM tree and construct a real DOM tree from it.
* `patch`: Given two copies of virtual DOM trees, renderer walk and compare the two trees, figure out difference, apply changes to actual DOM.

The VDOM gives the ability to programmatically create inspect and compose desired UI structures in a declarative way (and leave direct DOM manipulation to renderer).

***Render Pipeline***
What happens when Vue Component is Mounted:
1. **Compile**: Vue template compiled into render function, functions that return VDOM trees. (Done ahead of time in MarkBind)
1. **Mount**: Runtime renderer invoke render function, walks VDOM, creates actual DOM node.
1. **Patch**: When dependency used during mount changes, effect re-runs, new updated VDOM created. Then, patch the actual DOM.

#### Vue Server Side Rendering (SSR)

It is possible to render the Vue components into HTML strings on the server, send directly to the browser and finally 'hydrate' static markup into fully interactive app on the client.

Advantages of SSR:
* Faster time to content, especially on slower devices
* Unified Mental Model using same language and same declarative 
* Better SEO since crawlers see fully rendered page

##### Roles of Server and Client in SSR:

**SSR:** The server's job is to:
* Compile the Vue template into a render function.
* Use the render function to generate static HTML.
* Send the static HTML to the browser.

**Client-Side Hydration**: Once the browser receives the static HTML from the server, the client-side Vue app takes over. Its job is to:
* Attach event listeners and reactivity to the static HTML.
* Make the app interactive (e.g., responding to user actions like clicks or input).

**Vue 3 `createApp() vs createSSRApp()`**
`createApp` does not bother with hydration. It assumes direct access to the DOM, creates and inserts its rendered HTML. `createSSRApp()` used for creating Vue application instance specifically for SSR, where inital HTML is rendered on the server and sent to client for hydration. Instead of rendering (creating and inserting whole HTML from scratch), it does patching. It also does initialization by setting up reactivity, components, global properties etc, event binding during the mount process (aka Hydration).

### External Packages used by MarkBind

* `live-server` – A simple development server with live reloading functionality, used to automatically refresh the browser when changes are made to MarkBind projects.
* `commander.js` – A command-line argument parser for Node.js, used to define and handle CLI commands in MarkBind.
* `fs` (Node.js built-in) – The File System module, used for reading, writing, and managing files and directories in MarkBind projects.
* `lodash` – A utility library providing helper functions for working with arrays, objects, and other JavaScript data structures, improving code efficiency and readability in MarkBind


### Research on Other SSGs

While working on Markbind, I thought that it would definitely be essential to survey other Static Site Generators and the competition faced by MarkBind. 

Researching other SSGs available (many of which are open source as well) has allowed me to gain a broader picture of the roadmap of MarkBind.

For example, Jekyll is simple and beginner-friendly, often paired with GitHub Pages for easy deployment. It has a large theme ecosystem for rapid site creation. Hugo has exceptional build speeds even for large sites. Other SSGs offer multiple rendering modes (SSG, SSR, CSR) on a per page basis, support react etc. Considering that the community for all these other SSGs are much larger and they have much more resources and manpower to devote, I thought about how MarkBind could learn from these other SSGs.

#### Insights that could be applied to MarkBind

Overall, some insights that can be applied to MarkBind would be to:

* Focus on Content-Heavy Instructional Websites
  * Double down on features tailored for educational, project documentation, and course websites.
  * Highlight built-in components like popovers, tabs, and collapsible panels as unique differentiators.
* Emphasize "Out-of-the-Box" Functionality
  * Simplify onboarding and documentation for new users.
  * Provide all essential features for documentation by default (e.g., diagrams, code snippets, multi-level navigation).
  * Position MarkBind as a solution that minimizes configuration while maximizing flexibility.
  * Provide beginner-friendly guides and videos for quick adoption.
* Develop Pre-Built Templates
  * Create specialized templates for use cases like course sites, research documentation, or user guides.
  * Create ready-made themes/templates focused on education and documentation.
  * Allow users to deploy quickly with minimal setup.

### General Development Knowledge

#### CommonJS and ESM

CommonJS (CJS) is the older type of modules and CJS were the only supported style of modules in NodeJS up till v12. 
* Use the syntax `require` and `module.exports = {XX:{},}`
* Global, synchronouse require function added to import other odules.
* mark the file as a CJS module by naming as `.cjs` or by using type `commonjs` in package.json.

EcmaScript Modules (ESM) standardized later and are the only natively supported module style in browsers. It is the (EcmaScript standard) JS standard way of writing modules/
* use `import { XXX } from YYY` (top of file), `const { ZZ } = await import("CCC");` and `export const XXX = {}`. 
* Syntax addition to JS and allows to easily import and export static members.

Issues I faced:
* I didn't realize tha my TypeScript code was being compiled to CommonJS (`require`) instead of ES module syntax (`import`), and hence `import` was not working correctly.
* Had to change the `tsconfig.json` settings appropriately.

#### Classic Scripts vs Module Scripts in JS 

JavaScript offers two script types: **module** and **non-module**.  (For web pages, JavaScript is the Prog. Lang for the web after all).

**Module Script Files**: use ES Modules (`import`/`export`), run in strict mode, and have local scope, making them ideal for modern, modular applications. They load asynchronously and are supported in modern browsers and Node.js (with `.mjs` or `"type": "module"`).
- **Scope**: Local (encapsulated)
- **Execution**: Strict mode by default
- **Loading**: Asynchronous, deferred
- **Reusability**: High (modular)
- **Browser Support**: Modern browsers
- **Node.js**: Native (`.mjs` or `"type": "module"`)

**Non-Module Script File** rely on global scope, lack strict mode by default, and load synchronously. They work in all browsers and use CommonJS (`require`) in Node.js, making them suitable for legacy projects or simple scripts.
- **Syntax**: No `import`/`export`
- **Scope**: Global (pollution risk)
- **Execution**: Non-strict by default
- **Loading**: Synchronous by default
- **Reusability**: Low (global dependencies)
- **Browser Support**: All browsers
- **Node.js**: CommonJS (`require`)


Use **modules** for modern, scalable apps and **non-modules** for legacy compatibility or simpler use cases. Transition to modules for better maintainability.

### TypeScript

TypeScript has two main kinds of files. `.ts` files are implementation files that contain types and executable code. These are the files that produce `.js` outputs, and are where you normally write your code. `.d.ts` files are declaration files that contain only type information. These files don’t produce `.js` outputs; they are only used for typechecking.

* DefinitelyTyped / `@types`: The DefinitelyTyped repository is a centralized repo storing declaration files for thousands of libraries. The vast majority of commonly-used libraries have declaration files available on DefinitelyTyped.

* **Declaration Maps**: `.d.ts.map` Declaration map (.d.ts.map) files also known as declaration source maps, contain mapping definitions that link each type declaration generated in .d.ts files back to your original source file (.ts). The mapping definition in these files are in JSON format.
  * This is helpful in code navigation. This enables editor features like “Go to Definition” and Rename to transparently navigate and edit code across sub projects when you have split a big project into small multiple projects using project references.
