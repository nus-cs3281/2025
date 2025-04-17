### MarkBind

#### Summary
During this semester, I contributed to the development and maintenance of the MarkBind project, focusing on improving the functionality and user-experience of the CLI commands. I also helped out in other areas, like the highlight feature and devOps. My key contributions include:

- **CLI Improvements**
    - Added custom host validation for the `serve` command to notify users of invalid hosts
    - Improved reliability of the `serve` command by handling UncaughtExceptions in non-MarkBind directories, as well as for `build` and `deploy` commands
    - Fixed issues with MarkBind's patch of `live-server`, which includes mismatches in the openURL and serveURL and issues with IPv6 addresses
- **Highlight Component**
    - Added the ability for authors to highlight based on absolute positions rather than positions relative to indentation level
    - Fixed an issue where tabs '\t' are considered as 8 spaces wide rather than 4 spaces
- **Improved DevOps**
    - Adjusted tsconfig files to prevent the duplication of TypeScript tests, as well as migrating a legacy JavaScript test file to TypeScript
    - Investigated and fixed an issue with unreliable CodeCov generation by migrating to CodeCov v5

| Week | Achievements |
| ---- | ------------ |
| 1 | Authored PR: [Add optional absolute char indexing for highlighting #2584](https://github.com/MarkBind/markbind/pull/2584) |
| 2 | Responded to contributor queries: [#2584](https://github.com/MarkBind/markbind/pull/2584) |
| 4 | Authored PR: [Catch UncaughtException when serving in non-Markbind directories #2592](https://github.com/MarkBind/markbind/pull/2592) |
| 5 | Authored PR: [Add custom host validation #2599](https://github.com/MarkBind/markbind/pull/2599) |
| 5 | Responded to contributor queries: [#2584](https://github.com/MarkBind/markbind/pull/2584) |
| 6 | Responded to contributor queries: [#2584](https://github.com/MarkBind/markbind/pull/2584), [#2599](https://github.com/MarkBind/markbind/pull/2599) |
| 6 | Merged PR: [Catch UncaughtException when serving in non-Markbind directories #2592](https://github.com/MarkBind/markbind/pull/2592) |
| 7 | Created Issue: [Invalid URL of IPv6 address used for serve command's live preview #2617](https://github.com/MarkBind/markbind/issues/2617) |
| 7 | Created Issue: [Unavailable address opening the wrong URL during serve command #2620](https://github.com/MarkBind/markbind/issues/2620) |
| 7 | Authored PR: [Fix issues with serve and URL of live preview #2621](https://github.com/MarkBind/markbind/pull/2621) |
| 8 | Reviewed PR: [Refactor codeBlockButton Plugins #2625](https://github.com/MarkBind/markbind/pull/2625) |
| 8 | Created Issue: [Optimization: Migrate standalone JavaScript test files in core package to TypeScript #2634](https://github.com/MarkBind/markbind/issues/2634) |
| 8 | Created Issue: [Incomplete test coverage for MarkBind CLI commands #2635](https://github.com/MarkBind/markbind/issues/2635) |
| 8 | Authored PR: [Update Jest config to exclude duplicated JavaScript tests #2638](https://github.com/MarkBind/markbind/pull/2638) |
| 8 | Authored PR: [Migrate JavaScript test to TypeScript #2637](https://github.com/MarkBind/markbind/pull/2637) |
| 8 | Responded to contributor queries: [#2621](https://github.com/MarkBind/markbind/pull/2621), [#2637](https://github.com/MarkBind/markbind/pull/2637), [#2638](https://github.com/MarkBind/markbind/pull/2638) |
| 8 | Discussed Issue: [#2612](https://github.com/MarkBind/markbind/issues/2612) |
| 8 | Authored PR: [Reduce logging level and improve error message for popover #2639](https://github.com/MarkBind/markbind/pull/2639) |
| 8 | Merged PR: [Add code highlighting based on absolute positions #2584](https://github.com/MarkBind/markbind/pull/2584) |
| 8 | Merged PR: [Migrate filterIconAssets.test.js to TypeScript #2637](https://github.com/MarkBind/markbind/pull/2637) |
| 9 | Created Issue: [Missing warning for IPv6 zero address #2651](https://github.com/MarkBind/markbind/issues/2651) |
| 9 | Responded to contributor queries: [#2599](https://github.com/MarkBind/markbind/pull/2599), [#2621](https://github.com/MarkBind/markbind/pull/2621) |
| 9 | Merged PR: [Add custom host validation #2599](https://github.com/MarkBind/markbind/pull/2599) |
| 9 | Merged PR: [Fix issues with MarkBind's patch of live-server #2621](https://github.com/MarkBind/markbind/pull/2621) |
| 9 | Authored PR: [Refactor isValidHost and resolve Codecov issue #2656](https://github.com/MarkBind/markbind/pull/2656) |
| 9 | Merged PR: [Update config files to prevent duplicated JavaScript tests #2638](https://github.com/MarkBind/markbind/pull/2638) |
| 9 | Merged PR: [Refactor isValidHost and resolve Codecov issue #2656](https://github.com/MarkBind/markbind/pull/2656) |
| 9 | Created Issue: [Discussion: CodeCov bot failing to report status for PRs #2658](https://github.com/MarkBind/markbind/issues/2658) |
| 9 | Authored PR: [Update Dev Guide on PR review and Codecov #2659](https://github.com/MarkBind/markbind/pull/2659) |
| 10 | Reviewed PR: [Add card stack component #2648](https://github.com/MarkBind/markbind/pull/2648) |
| 10 | Merged PR: [Update Developer Guide on Codecov for PR Review #2659](https://github.com/MarkBind/markbind/pull/2659) |
| 11 | Created Issue: [KaTeX fonts not loading properly #2672](https://github.com/MarkBind/markbind/issues/2672) |
| 11 | Created Issue: [UncaughtException when using build or deploy in non-MarkBind directories #2673](https://github.com/MarkBind/markbind/issues/2673) |
| 11 | Authored PR: [Catch UncaughtException for build and deploy #2674](https://github.com/MarkBind/markbind/pull/2674) |
| 11 | Merged PR: [Catch UncaughtException for build and deploy #2674](https://github.com/MarkBind/markbind/pull/2674) |
| 11 | Authored PR: [Migrate CodeCov from v3 to v5 #2675](https://github.com/MarkBind/markbind/pull/2675) |
| 11 | Merged PR: [Migrate CodeCov from v3 to v5 #2675](https://github.com/MarkBind/markbind/pull/2675) |
| 12 | Discussed Issue: [#2670](https://github.com/MarkBind/markbind/issues/2670) |
| 12 | Approved PR: [#2678](https://github.com/MarkBind/markbind/pull/2678) |
| 13 | Created Issue: [Inconsistencies with popover error message location #2688](https://github.com/MarkBind/markbind/issues/2688) |
| 13 | Created Issue: [Include and Popover cyclic reference not properly replacing div with error #2695](https://github.com/MarkBind/markbind/issues/2695) |
| 13 | Created Issue: [`<a-point>` displays "undefined" for bottom legend #2698](https://github.com/MarkBind/markbind/issues/2698) |
| 13 | Created Issue: [Add a "back" link for footnotes #2699](https://github.com/MarkBind/markbind/issues/2699) |