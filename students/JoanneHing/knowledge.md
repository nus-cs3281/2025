## GitHub Actions & CI/CD Workflows
### GitHub Action Runners
**Issues encountered:**

- CI pipeline was failing due to deprecated macOS-12 runner 
- Cypress frontend tests failed on new runner configurations due to missing dependencies 
- Needed to update Ubuntu runner to latest version (24.04)
- Implementing automated CI/CD deployment for publish-reposense

**Knowledge gained:**
- Learned how GitHub Actions uses strategy matrix to configure different environments simultaneously. This allows defining multiple OS versions and configurations in a single workflow file.
  - For example, the code snippet shows how strategy matrix is used in a `yaml` file:
```yaml
  strategy:
    matrix:
        os: [ubuntu-24.04, macOS-13, macOS-14, macOS-15]
```
- Developed systematic approach to identifying CI failures through careful analysis of workflow logs and understanding environment variables.

**References:**
- [Using GitHUb Strategy Matrix to select a runner](https://stackoverflow.com/questions/77781713/using-github-strategy-matrix-to-select-a-runner)
- [Github Actions: Customize runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/customizing-github-hosted-runners#installing-software-on-ubuntu-runners)
- [Cypress documentation issue](https://github.com/cypress-io/cypress-documentation/issues/5816)

---------
### CI Deployment Configurations
**Issues encountered:**
- CI/CD pipeline wasn't triggering automatically due to restrictive conditions
- Need to ensure that the pipeline is triggered only when expected

**Knowledge gained:**
- Learned to restrict deployments to specific branches (e.g., only allowing deployment from the master branch) by setting conditions in the workflow.
```yaml
  if: (github.event_name == 'push' && github.ref == 'refs/heads/master') || github.event_name == 'schedule'
```
- Configured workflows to automatically run tests on pull requests to ensure code quality before merging.
- Discovered how GitHub Actions defines trigger events and how to properly configure them to ensure workflows are triggered when expected.
```yaml
on:
  pull_request:
  push:
    branches:
      - master
```
-  Learned to schedule workflows using cron syntax in GitHub Actions, allowing tasks like routine checks or deployments to run automatically at set intervals without manual triggers.
```yaml
    schedule:
        - cron: '0 0 * * *'
```

**References:**
- [GitHub Actions: Workflow triggers](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [GitHub Actions: Scheduled workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule)

---------
### YAML File Structure
**Issues encountered:**
- Encountered deprecation warnings in workflow YAML files
- Needed to understand workflow file structure to implement reliable CI/CD

**Knowledge gained:**
- Developed deeper understanding of YAML syntax
- Learned how to define dependencies between jobs using the needs keyword, ensuring proper execution order.
```yaml
deploy:
    needs: build
    runs-on: ubuntu-24.04
```

**References:**
- [GitHub Actions: Workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---------
### Backend Development (Java)
**Issues encountered:**
- Initial implementation lacked proper abstraction for different blurb types
- Needed to refactor code to improve maintainability and readability

**Knowledge gained:**
- Applied abstraction for creating different types of blurb model and parsers.
- Learned to use Java's inheritance and polymorphism to create a base class for blurbs and extend it for specific types.
- Used generics to create a flexible and reusable parser class that can handle different blurb types.
- Developed comprehensive test cases to validate parser behavior with various input formats and edge cases.
- Learned to use Java's Path API effectively for cross-platform file path handling.

**References:**
- [Java Generics](https://docs.oracle.com/javase/tutorial/java/generics/index.html)
- [Java Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)
- [Java Path API](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html)

---------
### Frontend Development (Typescript, Vue.js)
**Issues encountered:**
- Codebase used verbose directive syntax in Vue templates

**Knowledge gained:**
- Learned about Vue's shorthand directive syntax and its benefits for code readability.
- Developed systematic approach to refactoring multiple template files while ensuring consistent behavior.

**References:**
- [Vue.js: Shorthand syntax](https://vuejs.org/guide/extras/syntax.html#shorthand-syntax)
- [Intellij IDEA: Rename refactoring](https://www.jetbrains.com/help/idea/rename-refactorings.html)

---------
### Code Review
**Issues encountered:**
- Need to provide valuable feedback to team members during code reviews
- Hard to understand code changes quickly

**Knowledge gained:**
- Developed systematic approach to reviewing PRs, focusing on functional correctness, code structure and organization, and documentation quality.
- Learned to provide actionable feedback that helps improve code quality without discouraging contributors.

---------
### PR Merging
**Issues encountered:**
- Needed to create clear and informative PR descriptions
- Managing merge conflicts

**Knowledge gained:**
- Learned to create comprehensive PR descriptions
- Discovered how to properly attribute work to multiple contributors using the `Co-authored-by:` syntax in commit messages.

**References:**
- [GitHub: Co-authored-by](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)

---------
## Summary
As nearing the end of the work on RepoSense for this semester, I can say that I have gained a lot in technical areas throughout various fronts. The project gave us a hands-on experience in developing a real-world project. However, the most important thing I learned was how to properly develop in someone else's codebase and give meaningful contributions while respecting the architectural integrity.

Of particular importance, the blurb extension taught me a lot about properly considering abstraction and design patterns: my first solution was frankly unextendable, but feedback from my peers and iterations led to a cleaner solution that accommodates different types of blurb through proper inheritance hierarchy design.

The other hands-on experience provided to me with GitHub Actions and CI/CD pipelines had improved my understandings in DevOps paradigms that are important to software development in today's world. 

Finally, collaborative processes of PR management, issue-tracking, and code review form exposure to best practices in software development.

I am grateful for the opportunity to work on this project with my team and look forward to applying these skills in future endeavors.