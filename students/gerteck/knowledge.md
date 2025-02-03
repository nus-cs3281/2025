### Tool/Technology

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

### Vue 2 to Vue 3

https://v3-migration.vuejs.org/migration-build

MarkBind (v5.5.3) is currently using Vue 2. However, Vue 2 has reached EOL and limits the extensibility and maintainability of MarkBind, especially the vue-components package. (UI Library Package). 

Vue 2 components can be authored in two different API styles: Option API and Composition API. Read the difference [here](https://dev.to/sucodelarangela/vue3-options-api-vs-composition-api-en-1fbo#:~:text=However%2C%20with%20the%20release%20of,known%20as%20the%20Options%20API.) It was interesting to read the difference between the two. 

* The Option API organizes code into predefined options like data, methods, and computed, making it simpler and more beginner-friendly but less flexible for complex logic. 
* In contrast, the Composition API uses a setup() function and reactive utilities like ref and reactive, allowing logic to be grouped by feature for better modularity and reusability. While the Option API relies on mixins for reuse, which can lead to conflicts, the Composition API enables cleaner and more scalable code through composable functions. 
  * Additionally, the Composition API offers superior TypeScript support and is better suited for large, complex applications, though it has a steeper learning curve compared to the straightforward Option API.


> Server-side rendering: the migration build can be used for SSR, but migrating a custom SSR setup is much more involved. The general idea is replacing vue-server-renderer with @vue/server-renderer. Vue 3 no longer provides a bundle renderer and it is recommended to use Vue 3 SSR with Vite. If you are using Nuxt.js, it is probably better to wait for Nuxt 3.

Currently, MarkBind Vue components are authored in the Options API style. If migrated to Vue 3, we can continue to use this API style.



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
