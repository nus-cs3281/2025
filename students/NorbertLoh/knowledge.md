### ngx-markdown

<!-- List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource. -->
I learned about the `ngx-markdown` library while I was working on a fix to preserve whitespace when converting Markdown to HTML. `ngx-markdown` combines multiple different language parsers and renders them in one library. `ngx-markdown` supports Marked, Prism.js, Emoji-Toolkit, KaTeX, Mermaid, and Clipboard.js. I learned about configuring the options for the Markdown HTML element.

### Marked

Marked is the main parser we use for our comment editor in creating/editing issues and responses. I learned that any text that we write in Markdown syntax is converted into HTML elements using Marked. I found out that we can actually override how Marked generates the HTML elements, and we can add more attributes like classes, styles, and even modify the text before rendering it.


### nvm-windows
WATcher requires node 14 in order to `npm install` some of its dependencies. However, instead of having to install and reinstall a different node version between different projects, I can use `nvm-windows` to install multiple node versions and switch between them. However, the latest version of `nvm-windows` has some issues if youwant to install node 14. After some debugging, I found out that `nvm-windows v1.1.11` can install node 14 with no issues.


### CATcher phase management

While working on creating a new phase, I learnt a lot about how phases are managed in CATcher. Every phase has its own phase permissions and phase routing. Phase permissions controls certain tasks. For example, creating a new issue, deleting an issue, editing an issue is only allowed at certain phases. Every phase also has its own routing which is used to load the different pages ranging from, viewing to editing. I also learnt that the repos to hold the issues are generated only at the bug reporting phase.

### Git commit hooks
While I was working on a PR, I was wondering why certain parts of the code are modified after pushing a commit. I then found out that there are commit hooks in place to fix and format and lint issues. Source tree actually allows users to bypass the commit hooks if the changes are irrelevant to the PR that the user is working on.

### Github search query
While working on implementing the feature 'View on github' for WATcher where a user will be able to see the current dashboard in github, I learnt that github searches can actually be done using URL queries.

### URL encoding
While working with URL queries, I learnt that some characters are not allowed in URLs. Such characters are "!"$$()" etc. In order to use them, they must be encoded into UTF-8. More information can be found [here](https://www.w3schools.com/tags/ref_urlencode.ASP).