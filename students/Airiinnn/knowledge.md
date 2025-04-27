### Defining requirements
I learned the importance of defining clear requirements for changes and how to do so more effectively. 
When implementing the portfolio mode, requirements, assumptions and intended behaviors were not confirmed before starting implementation.
This led to some misalignment between the frontend and backend changes, that could have been avoided with proper planning. There were also edge cases that were not considered due to assumptions.

From these learning experiences, I learned that exact requirements and behaviors should be thought of and confirmed before implementing, and to clear up any assumptions especially when working with others to reduce any unnecessary fixes and changes.

### Code Reviews
Through the code reviews I have received and given, I have learned the true utility of it.
* Useful to have a fresh perspective looking at changes to help catch unconsidered edge cases. 
* Ensures better code quality, allowing for reviewers to suggest improvements, and also making the author accountable for good code, sufficient testing and documentation.
* Allows reviewers to have a deeper understanding of changes that may be required for their own changes. This was particularly helpful for me in understanding the backend changes, allowing me to implement the frontend for individual repository date ranges.

### AI Use
I used AI, specifically LLMs like Claude & ChatGPT, to help with some of my changes. While working on a larger codebase, I found out what these tools can be useful for and how to utilise them effectively.
AI was particularly useful in solving smaller, simpler tasks, like writing test cases, refactoring smaller functions and logic etc., but fail at making large changes that spanned multiple components.
While it may be possible with enough prompting, it is definitely harmful to productivity and dangerous especially if the user does not fully understand the changes.

My key takeaway for productive and safe AI use in projects is to use them for simple, localized tasks that do not require an understanding of larger context, and avoid using it for large, complicated changes.
It is also important to understand all changes, both for own learning and to reduce unintended bugs.

### Vue
As the frontend utilized Vue, I had to familiarize thoroughly with it. The codebase was following the Options API (instead of Composition API).
I appreciate the simplicity of it, having options such as `data`, `computed`, `mounted` etc. to effectively organize code in a component. 

I had to learn about mixins as well to refactor duplicate logic in components that follow the Options API.

`v-model` was another useful thing I learned, which enabled simple two-way binding between parent and child.

References:
* [TypeScript with Options API](https://vuejs.org/guide/typescript/options-api.html)
* [Mixins](https://www.vueframework.com/guide/mixins.html#basics)
* [v-model](https://vuejs.org/guide/components/v-model.html)

### Cypress
As Cypress was used extensively for frontend testing, I had to familiarise myself thoroughly with the available commands to effectively write test cases.
This was particularly useful for more complicated tests that required navigating to another page, clicks on specific location, etc.

Coming from a Selenium background, Cypress was significantly easier to setup and run, not requiring additional drivers etc., and also a lot easier to write tests in.

References:
* [Cypress commands](https://docs.cypress.io/api/table-of-contents)

### Vite
Better understood what Vite does and the basics of configuring it.

Implemented new modes in the config file to support using custom public directory.

References:
* [Vite Config](https://vite.dev/config/)

### Gradle
Learnt more about Gradle as a tool and its functionalities. I realized the utility of Gradle tasks, being capable of running various things not limited to Java, even including triggering the frontend Cypress tests.

I enhanced the tasks related to frontend testing to serve and run on multiple reports, and learned how to create more complex tasks with dependencies and background tasks.

References:
* [Gradle tasks](https://docs.gradle.org/current/userguide/tutorial_using_tasks.html)
* [Gradle plugins](https://docs.gradle.org/current/userguide/plugins.html)

### GitHub Actions
Familiarised myself with how GitHub Actions work at a high level, and understood basic workflow syntax to debug failing workflow runs.

There was an issue that was due to the differences between `pull_request` and `pull_request_target`. `pull_request_target` runs in the context of the base of the pull request, rather than in the context of the merge commit. This causes changes to the workflow in the PR to not be reflected in the runs.

Since the failure was a special case due to the [deprecation of certain actions](https://github.blog/changelog/2024-04-16-deprecation-notice-v3-of-the-artifact-actions/), exception was made to merge with the failing run. Precaution was taken to ensure the change is as intended, but trying it out on personal fork.

References:
* [Basic workflow syntax for GitHub Actions](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
* [Events that trigger workflows](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)
* [Pull Request vs Pull Request Target trigger](https://runs-on.com/github-actions/pull-request-vs-pull-request-target/)
* [GitHub Actions Actions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-pre-written-building-blocks-in-your-workflow)
