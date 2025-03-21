### NPM (Node Package Manager)

#### Managing packages

**Issue faced:**
I faced an [issue](https://github.com/CATcher-org/WATcher-docs/issues/18) when setting up the project locally that was related to a default NPM package used by Node to build and compile native modules written in C++. I had to dig deep into how packages were being installed and managed by NPM to resolve the issue and have documented my findings as follows:

**Knowledge gained:**
- NPM is the default package manager for `Node.js`, helping developers to install and manage packages (i.e. libraries/dependencies) via `package.json`
- NPM hosts a collection of open-source packages at their online registry, where we can then install these packages to be used in our project
- Packages can be installed globally (i.e. system wide) or locally (i.e. per project, under the `node_modules/` folder)
- Installation of packages is essentially pulling the source code of the package from NPM online registry, and will be ran locally when required. Hence it is possible (but certainly not recommended) to modify the pulled source code locally, as mentioned in one of the workarounds to this [issue](https://github.com/CATcher-org/WATcher-docs/issues/18)

**Reference:** https://docs.npmjs.com/packages-and-modules

#### Custom script definitions 

**Issue faced:**
I realised that we were using a npm command that I was very unfamiliar with, that is `npm run ng:serve:web`, and I wondered what this command meant

**Knowledge gained:**
- When running commands in the form of `npm run <command>`, e.g. `npm run ng:serve:web`, these commands are actually self-defined scripts under the `package.json` file.
- These are different from built-in npm commands, e.g. `npm build`

**Reference:** https://docs.npmjs.com/cli/v9/commands/npm-run-script

-------------------------------------------------------------------------------------

### NVM (Node Version Manager)

**Issue faced:** 
CATcher uses Node 16 while WATcher uses Node 14 to build, it was hard to switch between node versions quickly when working on both projects

**Knowledge gained:** 
We can use NVM to easily manage and switch between different node versions locally

-------------------------------------------------------------------------------------

### Angular

#### Components and Modules

A typical component in Angular consists of 3 files:

- A html file that defines the layout of the component
- A css file that provides styling to the UI
- A typescript file that controls the logic and behaviour of the application, typically handles the data of the application too

Each component can have a module file where we can state the components or modules that this component is dependent on (i.e. the imports array) and the components that is provided by this module (i.e. the declarations array). This helps increasing the modularity and scalability of the whole application.

As a developer coming from React, here are some clear differences I have observed:

- There is no concept of states in Angular and the data passing is 2-ways, when the user updates from the UI, the value is automatically updated in the component and vice versa, whereas in React we would have to use states and explicitly update the states via setState or similar functions.
- Instead of defining the layout of componenet and logic in the same file, Angular split them into 2 seperate files (i.e. the html and typescript file), personally I felt that this split helps enforce the MVC architecture more strictly, but also imposes more restrictions when it comes to components that have tightly coupled logic

**Reference:**
https://v17.angular.io/guide/component-overview

-------------------------------------------------------------------------------------

### CATcher

#### IssueTablesComponent and how issues are being shown in tables

While working on issue [#1309](https://github.com/CATcher-org/CATcher/issues/1309), I had to delve deep into how the the `IssueTablesComponent` is implemented in order to create new tables. A few meaningful observations learnt is summarised as follows:

- The issues displayed in the table is mainly dependent on 2 things,
  - The base issues data provided by `IssueService`, which is initialized based on `IssuesFilter`, and will periodically pull the issues from github
  - The `filters` we inject when creating the `IssueTablesComponent`, where the base issues can be filtered down to the issues that we are concerned of
  - The action buttons and its respective functionalities are pre-defined in the `IssueTableComponent` itself, we only specify the action buttons that we want when creating the `IssuesTablesComponent` through the `actions` input.

-------------------------------------------------------------------------------------

### Github Workflows/Actions

#### How github workflows/actions are being triggered

**Issue faced:**
While working on the new phase (i.e. bug-trimming phase) for CATcher, the team decided to
use a `feature-bug-trimming` branch as the target branch we all merge into. However, I noticed that when we created PRs / merged PRs to that feature branch (see this [issue](https://github.com/CATcher-org/CATcher/issues/1320) for more details), there are no github workflows/actions being run. This puts us at the risk of failing tests without knowing, I spent some time to learn how github workflows/actions are being triggered.

**Knowledge gained:**
- The potential trigger points for workflows are defined under the `on:` section within the workflow file (i.e. `.yml` file)
- We can automatically trigger the workflows when we `push` or `pull-request` to certain branches that are included:

```
on:
  # Automatically triggers this workflow when there is a push (i.e. new commit) on any of the included branches
  push:
    branches: [sample-branch1, sample-branch2]

  # Similar to push:, but for PRs towards the included branches
  pull_request:
    branches: [sample-branch1]
```

- We can also define an manual trigger point using the `workflow_dispatch` keyword:

```
on:
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
```

**Reference:**
https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow

-------------------------------------------------------------------------------------

### Github APIs

#### REST vs GraphQL

**Issue faced:**
As both CATcher and WATcher involves heavy interaction with the GitHub API(i.e. GitHub acts like our database), I often ran into issues related to the models that we retrieve from the Github API:
- [Problematic RestGithubIssueState value #1310](https://github.com/CATcher-org/CATcher/issues/1310)
- [Redundant fetching of GitHub issues: Duplicated REST & GraphQL API Calls #1313](https://github.com/CATcher-org/CATcher/issues/1313)

**Knowledge gained:**
- REST API 
  - Designed for standard HTTP requests and has **fixed endpoints**, hence
  - responses usually have more data than needed by the users, and
  - we might need multiple requests and aggregate data in the application logic to form the final results
- GraphQL API 
  - Designed as a query language, and can **specify exactly what we need in a single request**, hence
  - we can prevent over-fetching or under-fetching
- GitHub adopted both API standards and provides endpoints to both these standards, allowing clients the flexibility to decide on their own what standard they want to use
- We started off the project with REST APIs, and later on decided to move towards GraphQL APIs as the customized queries fit our use case more (since GitHub is like a database to us). However, in order to prevent making breaking changes to the existing API calls, we decided to not change most of the existing REST API calls that were already implemented.

**Reference:**
- [REST API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [GraphQL API](https://docs.github.com/en/graphql)
- [ChatGPT's explanation](https://chatgpt.com/share/67dc3c80-ba2c-800a-a4ec-d80fe9c5bfcf)