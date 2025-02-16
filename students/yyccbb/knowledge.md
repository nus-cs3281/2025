### MarkBind Processing Flow
1. Nunjucks Templating Processing
* The workflow begins with processing Nunjucks templates, a powerful templating engine that allows for reusable components, conditional rendering, loops, and variable interpolation.
* Any Nunjucks-specific syntax, such as `{{ '{' }}% for %{{ '}' }}` and `{{ '{{' }} variables {{ '}}' }}`, is evaluated and replaced with the corresponding content before moving to the next stage.
2. Markdown to HTML Conversion
* Once the Nunjucks templates have been fully processed, the system proceeds with converting Markdown files into HTML.
* This stage includes handling various Markdown features such as headings, lists, tables, code blocks, and MarkBind-specific extensions like expandable panels, tabbed displays, and embedded components.
3. Final HTML Processing
* After the Markdown has been transformed into HTML, the system performs a final round of processing on the generated HTML.
* This includes tasks like resolving custom components, enhancing the page structure, injecting additional scripts and styles, and ensuring proper linking between different parts of the site.


...
