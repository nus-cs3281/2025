## Tech Stack
### VueJS
VueJS is a JavaScript framework for building user interfaces, similar to React. It offers reactive data binding and a component-based architecture, allowing developers to create reusable components that allow for parent-child relationships. Vue is used extensively in MarkBind to create and render website components, such as pages, boxes, code blocks, etc.

#### Resources:
1. [VueJS Tutorial](https://vuejs.org/tutorial/#step-1) - Official tutorial for VueJS
2. [VueJS Guide](https://vuejs.org/guide/introduction.html)- Official VueJS Guide 

### TypeScript
TypeScript is a programming language that builds upon JavaScript by adding static typing, enabling developers to catch errors at compile time and write more maintainable code as compared to JavaScript. MarkBind uses TypeScript in its `core` package and has documentation describing the [migration process from JavaScript to TypeScript](https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html).

TODO: 
JavaScript to TypeScript migration

#### Resources:
1. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Official documentation for TypeScript
2. [TypeScript Migration](https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html) - MarkBind's documentation for TypeScript migration

### RegEx
Regular Expressions (RegEx) are a sequence of characters used to match a patterns in text. They can range from simple exact-word matches to complex patterns using special characters.

RegEx is typically used in MarkBind to validate user inputs andc heck for discrepancies. Some examples include:
- The Highlighter component, to match the highlighter rules
- Within the `serve` command, to detect IP zero addresses and check the validity of IP addresses

#### Resources:
1. [RegEx Cheatsheet](https://www.dataquest.io/cheat-sheet/regular-expressions-cheat-sheet/) - A reference for RegEx constructs
2. [RegEx101](https://regex101.com/) - An interactive tool for testing RegEx patterns

### Jest
TODO:
What it is
How it works
How its used in MarkBind
Resources

jest.config.js how it works

### ESLint
TODO: 
What it is
How it works
How its used in MarkBind
Resources

### TSConfig
TODO: 
What it is
How it works
How its used in MarkBind
Resources

### Git/GitHub
TODO: 
rename, rebase, commit history, CI/CD pipeline config etc.

### CodeCov
TODO: 
What it is
How it works
How its used in MarkBind
Resources

How my code affected it, how codecov is calculated, why it was negatively affected, what indirect/direct changes means, upload tokens, v5 et

## MarkBind
### MarkBind Highlighter Component
In MarkBind, users can specify highlighter rules following the [syntax in our User Guide](https://markbind.org/userGuide/formattingContents.html#line-highlighting). MarkBind then highlights the code block appropriately when rendering the site.

#### Implementation Details
Markbind's `core` package processes highlighter rules in the following steps:
1. **Parsing Highlighter Rules**
    - Uses RegEx in `core/src/lib/markdown-it/highlight/HighlightRuleComponent.ts` to match the syntax for rules such as character or word-bounded highlights.
2. **Calculating Character Bounds**
    - Utilizes `computeCharBounds()` to adjust user-specified bounds, ensuring they are valid.
    - Handles unbounded values and adjusts for indentation level so that bounds are relative to indentation level.
    - Clamps values to ensure they stay within the valid range.
3. **Wrapping Highlighted Content**
    - Wraps text content within `<span>` elements (`highlighted` or `hl-data`) to apply the necessary highlighting when rendered.

#### Absolute Character Position Highlighting

##### Problem
Previously, the highlighter could not highlight indentation since it automatically adjusted for it during character bound calculation.

##### Solution
I introduced a feature allowing users to specify *absolute* character positions rather than relative positions.
- Users can prefix their character bounds with `+` to indicate absolute positioning.
- The RegEx parser was updated to accomodate this syntax.
- `computeCharBounds()` was modified to skip indentation length adjustments if absolute bounds were detected.

##### Edge Case: Handling Tab Characters (`\t`)
An issue arose when using absolute bounds with tab characters. Since `\t` was considered a single character but visually occupied more space, the highlighting results were inconsistent. To resolve this:
- I implemented an automatic conversion of tab charactes to four spaces using `code.replace(/\t/g, ' ')`.
- This ensured consistent highlighting behavior regardless of tab spacing.

### MarkBind CLI commands
MarkBind provides several Command Line Interface (CLI) commands, such as `init`, `serve` and `build`. Details can be found in the [User Guide](https://markbind.org/userGuide/cliCommands.html#cli-commands).

#### Implementation Details
MarkBind's CLI functionality lies within the `cli` package. It uses the [`commander` library](https://www.npmjs.com/package/commander) to create and configure its CLI commands. The library allows developers to customie the commands, such as their aliases, options, descriptions and action. The user's specified root and the options are then passed on to the corresponding action function.

#### MarkBind's `serve` command
MarkBind's `serve` command allows users to preview their site live. It follows these steps:
1. **Receiving the CLI command**
    - The `commander` library processes the `serve` command, along with user-specified options.
    - These values are passed to the `serve()` function in `cli\src\cmd\serve.js`.
2. **Building the Site**
    - The `serve()` function performs preprocessing to verify that the user-specified root contains a valid MarkBind site. If not, an error is thrown and execution stops.
    - A `serverConfig` object is created and passed to the `Site` instance before being used to configure `liveServer.start()`.
3. **Starting the Web Server**
    - The server is started using `cli\src\lib\live-server\index.js`, which is a custom patch of the [`live-server` library](https://www.npmjs.com/package/live-server).
    - `live-server` uses Node.js's `http` module to start the web server.
    - It listens for the `error` event, handling errors such as `EADDRINUSE` (port already in use) and `EADDRNOTAVAIL` (address not available).
    - It also listens for the `listening` event, indicating that the server is ready so the site URL can be opened. 
4. **Opening the Live Preview**
    - The [`opn` library](https://www.npmjs.com/package/opn) is used to automatically open the preview URL.
    - `live-server` listens for file system events like `add` or `change` to trigger a `reload` event, updating the preview in real-time.

#### Issues with `live-server` Patch
MarkBind's `live-server` patch had some issues, particularly with IPv6 addresses:
1. **Invalid IPv6 URLs**

    When an IPv6 address is supplied by the user, the opened URL is invalid. IPv6 URLs require square brackets `[]`, e.g., the address `::1` should be opened with a URL like `http://[::1]:8080` instead of `http://::1:8080`. As a side note, `localhost` resolves to `::1`.
2. **Incorrect Open URL for EADDRNOTAVAIL**

    When this error occurs (indicating the specified address is unavailable), the patch retries using `127.0.0.1`. However, the opened URL still referenced the original unavailable address, causing confusion for users.

3. **Missing Warning for IPv6 Broadcast Address**

    `serve.js` issues a warning when users specified `0.0.0.0` (IPv4 broadcast address), but the equivalent warning was missing for IPv6 addresses like `::`.

#### Resources
1. ['commander' Package](https://www.npmjs.com/package/commander) - Official `commander` npm page
1. [`live-server` Package](https://www.npmjs.com/package/live-server) - Official `live-server` npm page