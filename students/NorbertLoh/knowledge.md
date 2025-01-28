### ngx-markdown

<!-- List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource. -->
I learned about the `ngx-markdown` library while I was working on a fix to preserve whitespace when converting Markdown to HTML. `ngx-markdown` combines multiple different language parsers and renders them in one library. `ngx-markdown` supports Marked, Prism.js, Emoji-Toolkit, KaTeX, Mermaid, and Clipboard.js. I learned about configuring the options for the Markdown HTML element.

### Marked

Marked is the main parser we use for our comment editor in creating/editing issues and responses. I learned that any text that we write in Markdown syntax is converted into HTML elements using Marked. I found out that we can actually override how Marked generates the HTML elements, and we can add more attributes like classes, styles, and even modify the text before rendering it.


### nvm-windows
WATcher requires node 14 in order to `npm install` some of its dependencies. However, instead of having to install and reinstall a different node version between different projects, I can use `nvm-windows` to install multiple node versions and switch between them. However, the latest version of `nvm-windows` has some issues if youwant to install node 14. After some debugging, I found out that `nvm-windows v1.1.11` can install node 14 with no issues.