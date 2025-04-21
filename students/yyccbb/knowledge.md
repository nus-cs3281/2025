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
