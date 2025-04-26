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

#### Services
Dependency injection (DI) is a design pattern for creating and delivering some parts of an application to other parts of an application that requires them. In the DI system, there are two main roles: dependency consumer and dependency provider. 

In Angular, dependencies are typically services. When a service is provided at the root level, it becomes a singleton and and all classes will share the same instance of the service. This allows different classes (components, services, etc.) to inject the service and share information through it.

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

In the case of WATcher, using GraphQL means that additional fields can be fetched easily simply by adding new fields to the query and changing the Angular model for the issue / PR. For instance, when working on displaying reviewers in the PR cards in WATcher, I only had to add to the `FetchPullRequests` query and edit the respective Angular models to include the newly fetched data.

#### Rate limits
GitHub's GraphQL API has limitations in place to protect against excessive or abusive calls to GitHub's servers. 
While working on WATcher, we noticed that opening a large repository such as NUSMods will cause the rate limit to be exceeded very quickly, and this could be a potential problem for users who want to use WATcher for large repositories. 

##### Primary rate limit
Users have a limit of 5000 points per hour per user, where the point value of a query can be calculated as specified in their [docs](https://docs.github.com/en/graphql/overview/rate-limits-and-node-limits-for-the-graphql-api#predicting-the-point-value-of-a-query).

##### Secondary rate limit
GitHub also enforces secondary rate limits to prevent abuse of the API. GitHub does not allow too many concurrent requests, and no more than 2,000 points per minute are allowed for the GraphQL API endpoint.
