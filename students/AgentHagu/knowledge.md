## Tech Stack
### VueJS
VueJS is a JavaScript framework for building user interfaces, similar to React. It offers reactive data binding and a component-based architecture, allowing developers to create reusable components that allow for parent-child relationships. Vue is used extensively in MarkBind to create and render website components, such as pages, boxes, code blocks, etc.

#### Resources:
1. [VueJS Tutorial](https://vuejs.org/tutorial/#step-1) - Official tutorial for VueJS
2. [VueJS Guide](https://vuejs.org/guide/introduction.html)- Official VueJS Guide 

### TypeScript
TypeScript is a programming language that builds upon JavaScript by adding static typing, enabling developers to catch errors at compile time and write more maintainable code as compared to JavaScript.

#### Resources:
1. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Official documentation for TypeScript

## MarkBind
### MarkBind Highlighter Component
Learned the underlying workings of MarkBind's Highlighter component and how it parses highlighter rules in order to determine the characters or lines to highlight. Learned how to implement an enhancement to the existing feature and add relevant tests and documentation.

**Highlighter Rule Parsing**

In MarkBind, users are able to specify highlighter rules by following the [syntax in our User Guide](https://markbind.org/userGuide/formattingContents.html#line-highlighting). To parse these highlighter rules, we use RegEx in `core/src/lib/markdown-it/highlight/HighlightRuleComponent.ts` to match the syntax for rules like character or word-bounded highlight. 

**Highlighter Character Bounds Calculation**

In `core/src/lib/markdown-it/highlight/HighlightRuleComponent.ts`, the `computeCharBounds()` takes in the user's specified bounds and adjusts them accordingly so that they are valid. Originally, it checks for unbounded values and adds on the indentation length so that bounds are relative to indentation level. It then clamps those values to ensure that they stay within the valid range of bound values.

**How the Highlighter highlights Text**

For highlighted text content, the `core/src/lib/markdown-it/highlight/Highlighter.ts` wraps the text content within a `<span>` with `highlighted` or `hl-data` for specific ranges.

**Absolute Character Position Highlighting**

The current Highlighter's functionality did not have the ability to highlight the indentation, since it automatically adjusted for it during the character bound calculation. To accomodate this, I added the ability for the Highlighter to highlight based on absolute character positions, rather than relative positions relative to indentation level.

Users could now specify a `+` at the beginning of their character bounds to indicate that the character bound values used were to be considered as absolute. Understanding and adjusting the RegEx for parsing was important to helping me implement the [absolute character position highlighting](github.com/MarkBind/markbind/pull/2584) for MarkBind. I also had to update `computeCharBounds` to now only add indentation length if the bounds were not absolute. 

There was an interesting issue from the first draft of this solution involving tab characters `\t`. Tab characters were considered as 1 character each despite taking up more space than 1. This lead to confusing highlighting results when using absolute bounds. In order to solve for this, I added automatic conversion of any tab characters in the text content to 4 spaces using `code.replace(/\t/g, ' ')`

### MarkBind `serve` command
MarkBind's CLI functionality lies within the `cli` package. Specifically, `cli\src\cmd\serve.js` and `cli\src\lib\live-server\index.js` contain the main code for the CLI `serve` command used to build the site and start a web server instance. MarkBind uses the [`commander`](https://www.npmjs.com/package/commander) library to create and configure its CLI commands. The library allows developers to customize the commands, aliases, attributes, options etc. of the CLI commands.

Within `cli\src\cmd\serve.js`, some checks and default configuration is done for the server before calling `liveServer.start` from `cli\src\lib\live-server\index.js`. This live-server file is actually a custom patch of the [`live-server`](https://www.npmjs.com/package/live-server) library by MarkBind to accomodate certain special functionalities. This library starts the HTTP server for the site and opens the URL for that server.

**Issues with live-server patch**

There were originally some issues with MarkBind's live-server, either from the original library's code or from the patch.
1. When an IPv6 address is supplied by the user, the URL opened is invalid. IPv6 URLs require enclosing the IPv6 address within square brackets `[]`. For e.g., the address `::1` should be opened with a URL like `http://[::1]:8080`. As a side note, apparently `localhost` resolves to `::1`.
2. The patch of live-server adds a check for `EADDRNOTAVAIl`. This error is triggered when the address provided is not available. The patch originally resolves this by retrying the server by listening on the default address `127.0.0.1`. However, the URL opened would still use the original unavailable address, resulting in confusing behavior for users.
3. There is a warning within `serve.js` when users use the broadcast address of `0.0.0.0`. However, this warning was missing for the IPv6 equivalent, like `::`.