### Cypress
TODO: Update

### Gradle
TODO: Update

References:
* [Gradle tasks](https://docs.gradle.org/current/userguide/tutorial_using_tasks.html)

### GitHub Actions

#### [#2273](https://github.com/reposense/RepoSense/issues/2273)
Familiarised myself with how GitHub Actions work at a high level, and understood basic workflow syntax to debug failing workflow runs.

Issue was discovered to be due to the differences between `pull_request` and `pull_request_target`. `pull_request_target` runs in the context of the base of the pull request, rather than in the context of the merge commit. This causes changes to the workflow in the PR to not be reflected in the runs.

Since the failure was a special case due to the [deprecation of certain actions](https://github.blog/changelog/2024-04-16-deprecation-notice-v3-of-the-artifact-actions/), exception was made to merge with the failing run. Precaution was taken to ensure the change is as intended, but trying it out on personal fork.

References:
* [Basic workflow syntax for GitHub Actions](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
* [Events that trigger workflows](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)
* [Pull Request vs Pull Request Target trigger](https://runs-on.com/github-actions/pull-request-vs-pull-request-target/)
* [GitHub Actions Actions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-pre-written-building-blocks-in-your-workflow)
