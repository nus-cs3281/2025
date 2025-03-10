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

### 3. My research on Vue2 vs Vue3 over the recess week


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