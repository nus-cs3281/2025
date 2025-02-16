<!-- ### Tool/Technology 1

List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.

### Tool/Technology 2

... -->

### Angular
CATcher and WATcher are both built using the Angular framework, which is a single-page web appliation framework. Angular comes with a CLI tool to accelerate development.

#### Components
- Components are the fundamental building blocks of Angular applications.
- Generating a component will create a TypeScript file, a HTML file, a CSS file, and a test file.
- The TypeScript class defines the interaction of the HTML template and the rendered DOM structure, while the style sheet describes its appearance.
- The `@Component` decorator in the .ts file identifies the class immediately below it as a component class, and specifies its metadata. It associates a template with the component by referencing the .html file (or with inline code).
- Template syntax
  - A template contains regular html as well as Angular template syntax, which alters the HTML based on the application's logic and the state of application and DOM data. 
  - Templates can use:
    - Data binding
    - Pipes
    - Directives

### GraphQL
- CATcher and WATcher use GraphQL to fetch and update issues, PRs, and comments from GitHub.
- GraphQL is a query language, which is a specific syntax used to query a server to request or mutate data.

Drawbacks to using a traditional REST API:
- Overfetching
  - Getting back more data than needed
- Underfetching
  - Getting back less data than needed 
  - Need to make multiple requests to different end points

GraphQL API is resolved into its schema and resolvers:
- Schema describes how the API will work
- Every schema has two required types: the query and the mutation type
  - Query: for fetching and reading data
  - Mutation: For creating, updating, or deleting data from API

GraphQL allows users to manually choose which fields they want to fetch from the API

<!-- Give sample code from CATcher -->
