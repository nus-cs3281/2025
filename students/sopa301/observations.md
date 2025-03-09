### Project: typescript-eslint

Monorepo for the tooling that enables ESLint and Prettier to support TypeScript

### My Contributions

[Fixed](https://github.com/typescript-eslint/typescript-eslint/pull/10710) a bug where `declare` variables in definition files were incorrectly flagged as shadowing global variables.

### My Learning Record

Learnt more about the `no-shadow` rule of the typescript-eslint ruleset via the documentation.

Comparisons to internal project RepoSense:
typescript-eslint:
1. PR Checklist
2. No custom commit message on merge to master
3. Accepting PRs tag
4. Issues and PRs are prefixed with words like "Enhancement", "Docs", "Bug" for issues, "chore", "fix", "feat", "test" for PRs.
5. Presence of Semantic Breaking Change PR CI action.

Recommendations for internal project:
1. We should consider using the PR checklist as a reminder for contributors to follow the conventions. Sometimes, steps may be missed by accident and the checklist is a great way to keep track.
2. We could consider using some sort of `accepting-prs` or `help-wanted` label for our issues. Currently, a lot of our issues are suggestions/ongoing discussions, and it is difficult for contributors to determine which issue should be worked on. Having a label would make these issues easier to find and more clearly conveys its status.
3. If we would like to increase the frequency of our releases, having some sort of CI action to detect breaking changes would make it much easier to filter PRs with breaking changes.
