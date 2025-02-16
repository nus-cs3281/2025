### NVM (Node Version Manager)

Issue faced: CATcher uses node v16.x while WATcher uses node v14.x, it is hard to switch between node versions quickly when working on both projects

Tool used: Used nvm to easily manage and switch between different node versions locally

### Angular

#### Components and Modules

A typical component in Angular consists of 3 files:

- A html file that defines the layout of the component
- A css file that provides styling to the UI
- A typescript file that controls the logic and behaviour of the application, typically handles the data of the application too

Each component can have a module file where we can state the components/modules that this component is dependent on (i.e. the imports array) and the components that is provided by this module (i.e. the declarations array). This helps increasing the modularity and scalability of the whole application.

As a developer coming from React, here are some clear differences I have observed:

- There is no concept of states in Angular and the data passing is 2-ways, when the user updates from the UI, the value is automatically updated in the component and vice versa, whereas in React we would have to use states and explicitly update the states via setState or similar functions.
- Instead of defining the layout of componenet and logic in the same file, Angular split them into 2 seperate files (i.e. the html and typescript file), personally I felt that this split helps enforce the MVC architecture more strictly, but also imposes more restrictions when it comes to components that have tightly coupled logic

### CATcher

#### IssueTablesComponent and how issues are being shown in tables

While working on issue [#1309](https://github.com/CATcher-org/CATcher/issues/1309), I had to delve deep into how the the IssueTablesComponent is implemented in order to create new tables. A few meaningful observations learnt is summarised as follows:

- The issues displayed in the table is mainly dependent on 2 things,
  - The base issues data provided by `IssueService`, which is initialized based on `IssuesFilter`, and will periodically pull the issues from github
  - The `filters` we inject when creating the `IssueTablesComponent`, where the base issues can be filtered down to the issues that we are concerned of
  - The action buttons and its respective functionalities are pre-defined in the `IssueTableComponent` itself, we only specify the action buttons that we want when creating the `IssuesTablesComponent` through the `actions` input.

### Github Workflows/Actions

#### How github workflows/actions are being triggered

While working on the new phase (i.e. bug-trimming phase) for CATcher, the team decided to
use a `feature-bug-trimming` branch as the target branch we all merge into. However, I noticed that when we created PRs / merged PRs to that feature branch, there are no github workflows/actions being run. As this puts us at the risk of failing tests without knowing, I spent some time to learn how github workflows/actions are being triggered, summarised as follows:

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
