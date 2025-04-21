<panel header="### MarkBind Processing Flow" type="seamless" no-close expanded>

1. **Nunjucks Templating Processing**
* The workflow begins with processing Nunjucks templates, a powerful templating engine that allows for reusable components, conditional rendering, loops, and variable interpolation.
* Any Nunjucks-specific syntax, such as `{{ '{' }}% for %{{ '}' }}` and `{{ '{{' }} variables {{ '}}' }}`, is evaluated and replaced with the corresponding content before moving to the next stage.
2. **Markdown to HTML Conversion**
* Once the Nunjucks templates have been fully processed, the system proceeds with converting Markdown files into HTML.
* This stage includes handling various Markdown features such as headings, lists, tables, code blocks, and MarkBind-specific extensions like expandable panels, tabbed displays, and embedded components.
3. **Final HTML Processing**
* After the Markdown has been transformed into HTML, the system performs a final round of processing on the generated HTML.
* This includes tasks like resolving custom components, enhancing the page structure, injecting additional scripts and styles, and ensuring proper linking between different parts of the site.

</panel>

<panel header="### Bootstrap CSS and Bootswatch" type="seamless" expanded no-close>

#### What is Bootstrap?
Bootstrap is a popular open-source CSS framework designed for responsive, mobile-first web development. It provides a comprehensive collection of pre-designed components, utilities, and a grid system that help developers create consistent and visually appealing websites without writing extensive CSS from scratch.

#### What is Bootswatch
Bootswatch is a collection of free themes for Bootstrap that makes it easy to customize the look and feel of Bootstrap-based websites without having to modify the core Bootstrap CSS.\
Users can easily apply these themes by using the `style.bootstrapTheme` property of the `site.json` configuration file. For example:
```json
{
  "style": {
    "bootstrapTheme": "bootswatch-cerulean"
  }
}
```

#### How does MarkBind use Bootstrap?
1. **Global inclusion:** <br> The minified Bootstrap CSS file (`bootstrap.min.css`) is included in the HTML of the rendered site. 
2. **Theming:** <br> MarkBind supports Bootswatch theme customization through the `style.bootstrapTheme` property in `site.json`. The path resolution logic for Bootswatch themed Bootstrap CSS files and code for copying the CSS to the generated site are both in `core/src/Site/index.ts`.
3. **Vue component styling:** <br> Vue components make direct use of Bootstrap classes for styling. An example might be `containerStyle()` method in `Box.vue`.
4. **Icon support:** <br> MarkBind also uses Bootstrap Icons (`bootstrap-icons`), which are converted into `<i class="bi-..."></i>` tags. 
5. **Breakpoints:** <br> `markbind.css` references Bootstrap breakpoints for dynamic adjustments of web components.

</panel>

<panel header="### Vue.js" type="seamless" no-close expanded>

#### What is Vue.js?
Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications.
* **Progressive Framework:** Can be incrementally adopted, from enhancing static HTML to powering sophisticated single-page applications
* **Reactive Data Binding:** Automatically updates the DOM when the underlying data changes
* **Component-Based Architecture:** Encourages building encapsulated, reusable components
* **Virtual DOM:** Uses a lightweight virtual DOM implementation for efficient rendering]

#### Key features
##### Directives
<panel header="`v-model`" type="seamless" no-close>

**Purpose:** Creates two-way data binding between form inputs and app state\
**Example:**

<include src="codeAndOutput.md" boilerplate>
<variable name="highlightStyle">vue</variable>
<variable name="code">
  <input v-model="message">
</variable>
</include>

* Automatically syncs the input value with the component's data
* Specialized handling for different input types (text, checkbox, radio, select)
* Modifiers available:

  * `.lazy`: Sync after change events instead of input events
  * `.number`: Convert input string to number
  * `.trim`: Trim whitespace from input

</panel>

<panel header="`v-if` / `v-else` / `v-else-if`" type="seamless" no-close>

**Purpose:** Conditionally render elements based on the truthiness of expressions\
**Example:**

<include src="codeAndOutput.md" boilerplate>
<variable name="highlightStyle">vue</variable>
<variable name="code">
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else>Not A or B</div>
</variable>
</include>

* Elements are completely added/removed from the DOM
* Full lifecycle hooks triggered when elements are created/destroyed
* Alternative: `v-show` (toggles visibility without removing from DOM)

</panel>

<panel header="`v-on` (or `@`)" type="seamless" no-close>

**Purpose:** Attaches event listeners to elements\
**Example:**
<include src="codeAndOutput.md" boilerplate>
<variable name="highlightStyle">vue</variable>
<variable name="code">
  <button v-on:click="doSomething">Click me</button>
  <!-- Shorthand -->
  <button @click="doSomething">Click me</button>
</variable>
</include>

* Supports all native DOM events
* Modifiers available:

  * `.stop`: `event.stopPropagation()`
  * `.prevent`: `event.preventDefault()`
  * `.capture`: Use capture mode
  * `.once`: Trigger only once
  * `.self`: Only trigger if `event.target` is the element itself

</panel>

##### Computed Properties
**Purpose:** Dependent properties that are cached based on their reactive dependencies

```vue
computed: {
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
```

* Only re-computed when dependencies change
* Cached based on reactive dependencies
* More efficient than methods for frequently accessed values
* By default getter-only, but can specify both getter and setter

##### Watchers
**Purpose:** Custom logic for reacting to data changes
```vue
watch: {
    question(newValue, oldValue) {
        this.fetchAnswer()
    }
}
```

* Best used for asynchronous or expensive operations in response to changing data
* Access to both new and old values of the watched property
* Can watch nested properties using string paths or functions
* Option for immediate execution on component creation with `immediate: true`

##### Lifecycle Hooks
**Purpose:** Provide opportunities to execute code at specific points in a component's lifecycle
<panel header="###### Creation Hooks" type="seamless" no-close>

* `beforeCreate`: Called immediately after instance initialization, before data observation and event setup
* `created`: Called after the instance has been created, with data observation, computed properties, methods, and watch events set up
</panel>

<panel header="###### Mounting Hooks" type="seamless" no-close>

* `beforeMount`: Called right before mounting begins
* `mounted`: Called after the component has been mounted to the DOM

</panel>

<panel header="###### Updating Hooks" type="seamless" no-close>

* `beforeUpdate`: Called when data changes, before the DOM is patched
* `updated`: Called after a data change causes the DOM to be re-rendered

</panel>

<panel header="###### Destruction Hooks" type="seamless" no-close>

* `beforeDestroy`: Called right before a Vue instance is destroyed
* `destroyed`: Called after a Vue instance has been destroyed

</panel>

##### Vue 2 vs Vue 3
See the relevant section written by _Chan Ger Teck_.

</panel>

<panel header="### Puppeteer" type="seamless" no-close expanded>

#### What is Puppeteer?
Puppeteer is a JavaScript library which provides a high-level API to control Chrome or Firefox over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) or [WebDriver BiDi](https://pptr.dev/webdriver-bidi). Puppeteer runs in the headless (no visible UI) by default but can be configured to run in a visible ("headful") browser.

#### Use Puppeteer for PDF generation
In an attempt to generate high-fidelity PDFs from MarkBind sites, I built a pipeline that uses a headless Puppeteer instance that renders the webpage without the navigation components to generate a downloadable PDF. However, Prof Damith rejected this approach as he felt that similar-quality PDFs can be generated using the browser’s built-in print functionality.\
However, for the sake of completeness, I provide documentation of the main logic flow below:

<panel header="##### UI component" type="seamless" no-close>

The process begins with the Vue component:

1. Renders a button with loading state handling
1. Captures the current URL and specified filename
1. Sends a request to the server when clicked

```typescript
  fetch('/api/generate-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: currentUrl, filename: this.filename })
  })
```

</panel>

<panel header="##### Server-side API endpoint" type="seamless" no-close>

The server intercepts the request in `serve.js`:

1. Registers a special middleware to handle /api/generate-pdf requests
2. Parses the request body to extract URL and filename
3. Calls the PDF generator service
4. Returns the binary PDF data with proper headers

</panel>

<panel header="##### PDF Generation Service" type="seamless" no-close>

The core PDF generation happens in `pdfGenerator.js`:

1. Launches a headless Chrome browser using **Puppeteer**
2. Navigates to the specified URL
3. Waits for content to load
4. Injects CSS to hide navigation elements and style for printing
5. Generates and returns a PDF buffer

</panel>

<panel header="##### Client-Side Download" type="seamless" no-close>

Finally, the component handles the response:

1. Receives the PDF binary data
2. Creates a blob URL
3. Triggers the browser's download mechanism
4. Cleans up resources and resets the UI state

</panel>

To see the full code, click [here](https://github.com/yyccbb/markbind/tree/branch-pdf-download).

</panel>
