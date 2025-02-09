### Tool/Technology 1

List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.

# Specific to Vue
### 1. Components of Vue
A Vue component typically consists of three main sections.
- Template: this defines the HTML structure
- Script: Contains the logic and data for the component
- Style: Defines the CSS specific to the component

### 2. Using Computed Properties in Vue.js

When doing experimental changes, I thought of letting users specify things like font size, font type, etc. Upon looking up the other components and stackoverflow, this is what I found

- In a basic Vue component, we can define a computed property by plaing it in the `computed` option. These
properties are automatically updates when the underlying data changes.

# Others
### 1. Adding Hyperlinks in HTML and Markdown

When writing in Markdown, hyperlinks are created using a specific syntax, but behind the scenes, this Markdown code is converted into HTML.

- In Markdown, we use syntax like `[Java Docs](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)` to create a hyperlink. When the Markdown is converted to HTML, it generates an anchor tag in the form of `<a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html">Java Docs</a>`. This would open the link in the same tab, as no additional attributes are specified.

- In contrast, when we write HTML durectly, we can specify additional attributes, such as `target="_blank"`, to control how the link behaves. Using the same example, `<a href="https://markbind.org/userGuide/templates.html" target="_blank">User Guide: Templates</a>` will ensure that the link opens in a new tab.
