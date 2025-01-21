### Tool/Technology

List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.

# Markbind's Search Utility

## How Native MarkBind Search works
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
* It calls the `on-hit` function when a search result is selected, passing the selected item.
**SearchbarPageItem.vue**
* Decides how to present the item based on whether it is a heading or a page title.


## How Proposed Markbind PageFind Plugin Works

About [PageFind](https://pagefind.app/): A fully static search library that aims to perform well on large sites, while using as little of users bandwidth
as possible, and without hosting any infrastructure.

**Documentation:**
* [PageFind NodeJS Indexing API](https://pagefind.app/docs/node-api/)
* [The types returned by Pagefind’s JavaScript search API](https://github.com/CloudCannon/pagefind/blob/production-docs/pagefind_web_js/types/index.d.ts)

### **Integration of Pagefind into MarkBind**
It runs after the website framework, and only requires the folder containing the built static files of the website. A short explanation of how it works would be:

* PageFind indexes the static files
    * If pagefind is included as a plugin, we indexSites with PageFind, which writes the index files  _site/pagefind 
* Plugin exposes a pagefind JS API for searching 
    * Alternatively, use pagefind default UI for searching. This is done by processes containers with "id="pagefind-search-input"", and initialing a default PageFindUI instance on it, not unlike how algolia search works.
* This JS API is used by a custom Vue component searchbar.

