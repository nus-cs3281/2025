## Tech Stack
### VueJS
VueJS is a JavaScript framework for building user interfaces, similar to React. It offers reactive data binding and a component-based architecture, allowing developers to create reusable components that allow for parent-child relationships. Vue is used extensively in MarkBind to create and render website components, such as pages, boxes, code blocks, etc.

**\<script>** <br/>
Vue components often have a `<script>` block which defines the logic for the component. It involves sections like:
- `props` - Defines data received from a parent component
- `data()` - Returns an object containing local reactive state variables
- `computed` - Defines derived properties that automatically update whenever dependencies change
- `methods` - Functions that you can call within your template or events
- Lifecycle hooks (`created`, `mounted`, etc.) - Functions Vue calls automatically at specific points in the component's lifecycle

**Template Refs**<br/>
Vue provides a way to directly access underlying DOM elements using the `ref` attribute. Using either `useTemplateRef` or `this.$refs`, we can obtain the reference and directly manipulate the DOM element. However, this ref access should only be done *after the component is mounted*. Before it is mounted, it's possible for either methods to return `null` or `undefined`, which may lead to issues down the line.

One example of this was in the Tab and TabGroup of MarkBind. `this.$refs.header` was accessed within the `computed` property, which could be evaluated before the component mounts. This lead to an [issue with Tabs not rendering](https://github.com/MarkBind/markbind/issues/2670). To fix this, the header reference should only be accessed after the component has mounted, such as under the `mounted()` lifecycle hook.

#### Resources:
1. [VueJS Tutorial](https://vuejs.org/tutorial/#step-1) - Official tutorial for VueJS
2. [VueJS Guide](https://vuejs.org/guide/introduction.html) - Official VueJS Guide
3. [Template Refs](https://vuejs.org/guide/essentials/template-refs) - Vue3 Docs for Template Refs

### TypeScript
TypeScript is a programming language that builds upon JavaScript by adding static typing, enabling developers to catch errors at compile time and write more maintainable code as compared to JavaScript. MarkBind uses TypeScript primarily in its `core` package.

MarkBind also has documentation describing the [migration process from JavaScript to TypeScript](https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html). The migration PR should be structed as two commits, a "Rename" commit and an "Adapt" commit.
- The "Rename" commit is a commit specifically for renaming files from having the `.js` extension to having the `.ts` extension. Git should regard the changes of this commit as a `rename`. 
- The "Adapt" commit is to adapt the files fully to TypeScript. This means fixing things like changing syntax to match TypeScript's syntax or adding types as necessary.

This two-step process for the migration helps to ensure Git views these changes as a renaming and adaption of the *same* file, rather than a deletion and creation. This helps with the review process on GitHub, as the diffs are shown side-by-side instead of entirely different files. For example, see the commit history in [this PR](https://github.com/MarkBind/markbind/pull/2199/files). It also ensures that the history of a `.ts` file can still be traced back to its `.js` version, preserving valuable information for future developers.

TypeScript uses a configuration file `tsconfig.json` to define how the TypeScript compile `tsc` should compile `.ts` files into JavaScript. It is used primarily in MarkBind to exclude the compilation of node_module files and `.test.ts` files.

#### Resources:
1. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Official documentation for TypeScript
2. [TypeScript Migration](https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html) - MarkBind's documentation for TypeScript migration

### Jest
Jest is a JavaScript testing framework that can be used for any JavaScript project. It runs tests defined in `.test.js` files using a built-in test runner. Jest provides helpful functions like `describe`, `test` and `expect`, along with matchers like `toEqual` and `toThrowError` to define and assert test behavior.

In MarkBind, Jest is used extensively to test JavaScript and TypeScript files. It is primarily used for unit testing components and utility functions. These tests help prevent regressions and ensure code reliability as features evolve or are added to the codebase.

It supports setup and teardown of any preparation needed for the tests, using `beforeEach`, `beforeAll`, `afterEach` and `afterAll`. This is especially useful when some setup is needed to ensure that tests are independent of each other and that they are tested under the same conditions every time. An example of this can be seen in `Site.test.ts`, where before each test enviroment variables are deleted to avoid affecting the tests themselves.

It also supports function mocking, allowing developers to simulate and monitor function behavior — such as the number of calls and the arguments used — which is especially useful for unit testing. This can be found in `NodeProcessor.test.ts`, where Jest is used to mock the `logger.warn` function in order to track that certain messages are properly logged to the console for users.

Jest normally works by default but it is also possible to configure it using the `jest.config.js` file. There are many options you can configure, like `verbose` which reports every individual test during the run and `testMatch` which can be used to specify which test files to run, rather than running all `.js`, `.jsx`, `.ts` and `.tsx` files inside of `__tests__` folders. `testMatch` was used this semester to ensure only the TypeScript version of tests are ran, preventing duplicated testing from running both `.ts` and `.js` files.

#### Resources:
1. [Jest Docs](https://jestjs.io/docs/getting-started) - Official Jest Documentation
2. [Jest Config Docs](https://jestjs.io/docs/configuration) - Official Documentation on Jest Config

### ESLint
ESLint is a JavaScript and TypeScript linter that statically analyzes code to find and fix problems, enforcing consistent coding styles and catching potential bugs before runtime. It parses the code and applies a set of rules to detect issues such as syntax errors, stylistic inconsistencies and potential bugs. These rules can be configured in `.eslintrc.js` by extending presets like `airbnb-base` or by specifying individual rules like `"func-names": "off"`.

MarkBind uses ESLint to maintain code quality and consistency across the codebase. It helps enforce coding standards among the developers in both JavaScript and TypeScript files. ESLint is run not only during development but also during testing and CI. MarkBind has configured `.eslintrc.js` to match its desired coding standard, such as enforcing a 2-space indentation.

#### Resources
1. [ESLint Docs](https://eslint.org/docs/latest/) - Official ESLint Documentation
2. [MarkBind's ESLint Config](https://github.com/MarkBind/markbind/blob/master/.eslintrc.js) - MarkBind's `.eslintrc.js` File

### GitHub Actions
GitHub Actions are a set of tools that allow developers to automate certain workfloaws and add them to their repositories. One of its main uses in MarkBind is to implemenet a Continuous Integration (CI) pipeline. PRs and commits are automatically built and tested to ensure the code stays functional, verifying the integrity of MarkBind's master branch.

The workflows are defined in `.yml` files located in the `.github/workflows` directory. Each `.yml` file describes:
- Triggers: *When* the workflow should run (e.g. on push, pull requests, etc.)
- Jobs: A set of tasks to do, such as installing dependencies, running tests or uploading to CodeCov
- Steps: The individual commands within each job (e.g. `npm install`, `npm run setup`, `npm run test` etc.)

### CodeCov
CodeCov is a code coverage reporting tool that helps developers understand how much of their code is tested and accounted for by automated tests. It is able to visualize which lines of code are covered and which aren't. CodeCov can be a part of the CI pipeline, where the test coverage is uploaded after all tests have passed. 

MarkBind uses CodeCov to generate the code coverage reports within PRs. The code coverage report can then be used during the review process to determine if any drop in code coverage is acceptable or should be minimized. 

**Code Coverage Calculations**:<br>
One thing I learnt about CodeCov was how code coverage is calculated and how indirect changes affect it:
- Code coverage is calculated only for files that have at least one test. That means that files with no tests at all are excluded from the coverage percentage, even if they're 0% tested. If a test is later added to such a file, that file then becomes part of the coverage calculation.
- Indirect changes occur when testing one file brings in other previously untested files. For example, if an untested file (File A) depends on other untested files (Files B, C), adding a test to File A will also pull File B and C into the coverage calculaton, even if they remain untested.

This behaviour explains the drop in coverage in [this commit](https://github.com/MarkBind/markbind/commit/d1ba06439c4d94c15c20ec97db13cc32c53b7542). Tests were added to `serve.js`, which was originally untested. This lead `serve.js` to be included in the coverage calculations. However, since `serve.js` depends on other untested files like `logger.js`, `live-server/index.js` and `serveUtil.js`, those files were also included indirectly in the calculation. Because those additional files were also untested, the overall coverage percentage dropped, causing the commit to fail the CI coverage check.

**Upload Tokens**:<br>
Another issue with CodeCov was its use of global upload tokens to upload coverage reports. These tokens were limited, meaning that during periods of high traffic, PRs would not reliably generate coverage reports (see [discussion issue #2658](https://github.com/MarkBind/markbind/issues/2658)). This would hinder the review process and was also the reason why the drop in coverage in the previous example was only noticed *after* the PR had already been approved.

We resolved this by migrating from CodeCov v3 to v5. In v5, the [release notes](https://github.com/codecov/codecov-action/releases/tag/v5.0.0) stated that it was now possible to upload reports *without* an upload token, provided [certain conditions](https://docs.codecov.com/docs/codecov-tokens#uploading-without-a-token) were met. One of these conditions was that our repository was public and the reports had to come from an unprotected branch.

Since MarkBind follows a [fork-and-PR workflow](https://se-education.org/se-book/gitAndGithub/index.html#forking-workflow), these PRs from forks are considered as unprotected branches. This allowed us to take advantage of the new tokenless upload feature, making coverage uploads far more reliable during CI runs.

#### Resources:
1. [CodeCov Docs](https://docs.codecov.com/docs/quick-start) - Official CodeCov Documentation
2. [CodeCov v5](https://github.com/codecov/codecov-action/releases/tag/v5.0.0) - CodeCov v5.0.0 Release Notes
3. [Forking Workflow](https://se-education.org/se-book/gitAndGithub/index.html#forking-workflow) - MarkBind's Forking Workflow Guide

### RegEx
Regular Expressions (RegEx) are a sequence of characters used to match a patterns in text. They can range from simple exact-word matches to complex patterns using special characters.

RegEx is typically used in MarkBind to validate user inputs andc heck for discrepancies. Some examples include:
- The Highlighter component, to match the highlighter rules
- Within the `serve` command, to detect IP zero addresses and check the validity of IP addresses

#### Resources:
1. [RegEx Cheatsheet](https://www.dataquest.io/cheat-sheet/regular-expressions-cheat-sheet/) - A reference for RegEx constructs
2. [RegEx101](https://regex101.com/) - An interactive tool for testing RegEx patterns

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
1. **Invalid IPv6 URLs**<br>
    When an IPv6 address is supplied by the user, the opened URL is invalid. IPv6 URLs require square brackets `[]`, e.g., the address `::1` should be opened with a URL like `http://[::1]:8080` instead of `http://::1:8080`. As a side note, `localhost` resolves to `::1`.
2. **Incorrect Open URL for EADDRNOTAVAIL**<br>
    When this error occurs (indicating the specified address is unavailable), the patch retries using `127.0.0.1`. However, the opened URL still referenced the original unavailable address, causing confusion for users.

3. **Missing Warning for IPv6 Broadcast Address**<br>
    `serve.js` issues a warning when users specified `0.0.0.0` (IPv4 broadcast address), but the equivalent warning was missing for IPv6 addresses like `::`.

#### Resources
1. ['commander' Package](https://www.npmjs.com/package/commander) - Official `commander` npm page
1. [`live-server` Package](https://www.npmjs.com/package/live-server) - Official `live-server` npm page

<!-- ## Project Management
MarkBind has documentation for Project Management with topics ranging from Managing PRs, Doing a Release, Acknowledging Contributors and Managing the Repository. This information will be useful when working on MarkBind as a senior developer for CS3282.

### Managing PRs
MarkBind follows the general guidelines stated under [Working with PRs @SE-EDU](https://se-education.org/guides/guidelines/PRs.html). In particular, the way we phrase our PR review comments is important for a good discussion.

**PR Approvals**<br/>
MarkBind follows the rule that PRs should normally need two approvals before merging. This is to allow other developers to review the PR before hastily merging. If the PR is simple enough, then there's no need to wait for another approval.

As a side note, it's important to check for certain things in a PR. For example, PRs should not make any unnecessary changes in the codebase when solving an issue. It's also good to make use of the report generated by the CI pipeline, such as where all test cases pass and the coverage report generated by CodeCov. If any drop in coverage is detected, the reviewer will need to consider whether such a drop is too severe or could be avoided and addressed by the PR author.

**Merging PRs**<br/>

### Doing a Release

### Acknowleding Contributors

### Managing the Repository

#### Resources
1. [Project Management](https://markbind.org/devdocs/devGuide/projectManagement.html) - MarkBind's documentation for Project Management -->