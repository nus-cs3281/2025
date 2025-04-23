### Summary
Throughout the semester, I contributed to improving RepoSense's infrastructure, continuous integration (CI/CD) pipelines, and extending its frontend and backend features. My contributions focus on debugging CI issues, upgrading workflows, feature development, and maintaining overall project. Key contributions include:

- **Infrastructure and CI/CD**
  - Upgraded GitHub Actions runners to newer versions for macOS and added support for Ubuntu 24.04 ([PR #2260](https://github.com/reposense/RepoSense/pull/2260), [PR #2261](https://github.com/reposense/RepoSense/pull/2261)).
  - Implemented CI checks on PRs and restricted deployment to the master branch in publish-RepoSense ([PR #20](https://github.com/reposense/publish-RepoSense/pull/20), [PR #23](https://github.com/reposense/publish-RepoSense/pull/23#commits-pushed-590fdfd)).
  - Discovered issue for surge.sh preview failures ([Issue #2292](https://github.com/reposense/RepoSense/issues/2292)).
- **Feature Development and Enhancement**
  - Extended the blurb feature that originally supporting only repository descriptions to also support author and chart blurbs, focusing mainly on backend implementation ([PR #2239](https://github.com/reposense/RepoSense/pull/2239), [PR #2350](https://github.com/reposense/RepoSense/pull/2350)).
  - Created related issues ([PR #2311](https://github.com/reposense/RepoSense/pull/2311)) and cleaned up associated code and documentation ([PR #2394](https://github.com/reposense/RepoSense/pull/2394)).
- **Codebase Maintenance**
  - Modernized Vue templates by using directive shorthand syntax ([PR #2290](https://github.com/reposense/RepoSense/pull/2290)).
  - Updated workflows to avoid GitHub Actions deprecation warnings ([PR #2298](https://github.com/reposense/RepoSense/pull/2298)).
- **Testing and Review**
  - Reviewed multiple PRs and provided feedback on improvements for code quality and functionality.
  - Discussed with teammates to understand the codebase, bug fixes, feature implementations, and work distribution.

### Progress 
| Week | Achievements                                                                                                                                                                       |
|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | Discovered with the team regarding the issue of failing of the application due to incompaible Java version (Java17)                                                                |
| 1    | Investigated in the issue of the failing CI due to deprecated macOS-12                                                                                                             |
| 1    | Created PR : [[#2259] Upgrade GitHub Actions macOS runners to 13, 14 and 15](https://github.com/reposense/RepoSense/pull/2260)                                                     |
| 1    | Created PR: [[#2252] Add ubuntu-24.04 to CI runners](https://github.com/reposense/RepoSense/pull/2261)                                                                             |
| 2    | Solved the issue of failing Cypress Frontend test due to missing dependencies: [Updated the apt indexes](https://github.com/reposense/RepoSense/pull/2260#issuecomment-2614490638) |
| 2    | Solved issue: [Upgrade GitHub Actions macOS runners to 13 and 14 (and possibly 15) #2259](https://github.com/reposense/RepoSense/issues/2259)                                      |
| 2    | Solved issue: [Add ubuntu-24.04 to CI runners and bump publish-RepoSense runner #2252](https://github.com/reposense/RepoSense/issues/2252)                                         |
| 3    | Merged PR: [[#2259] Upgrade GitHub Actions macOS runners to 13, 14 and 15](https://github.com/reposense/RepoSense/pull/2260)                                                       |
| 3    | Merged PR: [[#2252] Add ubuntu-24.04 to CI runners](https://github.com/reposense/RepoSense/pull/2261)                                                                              |
| 3    | Reviewed PR: [[#2269] Update codecov version](https://github.com/reposense/RepoSense/pull/2271)                                                                                    |
| 3    | Reviewed PR: [[#2266] Fixed Cypress tests that fail locally](https://github.com/reposense/RepoSense/pull/2272)                                                                     |
| 4    | Created PR: [[#2252] Update ubuntu runner in publish-RepoSense](https://github.com/reposense/publish-RepoSense/pull/18)                                                            |
| 4    | Created PR: [[#2252] Enable CI Checks on PRs and Restrict Deployment to Master in publish-RepoSense](https://github.com/reposense/publish-RepoSense/pull/20)                       |
| 4    | Merged PR: [[#2252] Enable CI Checks on PRs and Restrict Deployment to Master in publish-RepoSense](https://github.com/reposense/publish-RepoSense/pull/20)                        |                                                                                                                                                                             
| 4    | Created issue: [Surge.sh Build Preview failing on recent PRs #2292](https://github.com/reposense/RepoSense/issues/2292)                                                            |
| 5    | Merged PR:[[#2252] Update ubuntu runner in publish-RepoSense](https://github.com/reposense/publish-RepoSense/pull/18)                                                              |
| 5    | Created PR: [[#1955] Usage of directive shorthand syntax in .vue files #2290](https://github.com/reposense/RepoSense/pull/2290)                                                    |
| 5    | Solved issue: [Usage of directive shorthand syntax in .vue files #1955](https://github.com/reposense/RepoSense/issues/1955)                                                        |
| 5    | Created PR: [[#2224] Update GitHub workflow to avoid deprecation warnings](https://github.com/reposense/RepoSense/pull/2298)                                                       |
| 5    | Solved part of issue: [Deprecation warnings for publish-RepoSense #2224](https://github.com/reposense/RepoSense/issues/2224)                                                       |
| 5    | Reviewed PR: [[#2275] Upgrade node to v20 in workflows #2282](https://github.com/reposense/RepoSense/pull/2282)                                                                    |
| 5    | Reviewed PR: [[#2296] Remove Travis Support #2297](https://github.com/reposense/RepoSense/pull/2297)                                                                               |
| 6    | Created issue: [Add blurbs for Authors #2311](https://github.com/reposense/RepoSense/issues/2311)                                                                                  |
| 7    | Created issue: [CI/CD Pipeline Not Triggering Automatically Due to Restrictive Condition #2316](https://github.com/reposense/RepoSense/issues/2316)                                |
| 7    | Reviewed PR: [[#2292] Fix surge.sh preview failure on PR #2293](https://github.com/reposense/RepoSense/pull/2293)                                                                  |
| 7    | Created PR: [[#2316] Update CI/CD Trigger to Allow Automatic Execution for All Relevant Events #23](https://github.com/reposense/publish-RepoSense/pull/23#commits-pushed-590fdfd) |
| 7    | Created PR: [[#2311] Add blurbs for Authors #2339](https://github.com/reposense/RepoSense/pull/2339)                                                                               |
| 8    | Merged PR: [[#2316] Update CI/CD Trigger to Allow Automatic Execution for All Relevant Events #23](https://github.com/reposense/publish-RepoSense/pull/23#commits-pushed-590fdfd)  | 
| 8    | Reviewed PR: [[#2327] Upgrade Vite version to 6.2.2 #2328](https://github.com/reposense/RepoSense/pull/2328)                                                                       |
| 8    | Reviewed PR: [[#2326] Optimize Vite Chunk Size #2325](https://github.com/reposense/RepoSense/pull/2325)                                                                            |
| 9    | Created PR: [[#2308] Add blurbs for charts #2350](https://github.com/reposense/RepoSense/pull/2350/commits/fce6cbe1d3e1fb733d90e55229fb2a4f846b31a9)                               |
| 9    | Reviewed PR: [[#2308][#2311] Add author blurbs and repo blurbs to the frontend #2319](https://github.com/reposense/RepoSense/pull/2319#issuecomment-2758845407)                    |
| 10   | Reviewed PR: [[#2366] Support datetime for since and until CLI config #2369](https://github.com/reposense/RepoSense/pull/2369)                                                     |
| 10   | Reviewed PR: [[#2205] Move title.md to config directory #2315](https://github.com/reposense/RepoSense/pull/2315)                                                                   |
| 10   | Reviewed PR: [[#2201] Change Frontend Package Manager to pnpm #2313](https://github.com/reposense/RepoSense/pull/2313)                                                             |
| 11   | Merged PR: [[#2311] Add blurbs for Authors #2339](https://github.com/reposense/RepoSense/pull/2339)                                                                                |                                                                                                                             
| 12   | Created issue: [Debugging Code Leftover in RepoBlurbMarkdownParser File #2392](https://github.com/reposense/RepoSense/issues/2392)                                                 |
| 12   | Created PR: [[#2391][#2992] Update User Guide and Clean Up Code #2394](https://github.com/reposense/RepoSense/pull/2394)                                                           |
| 12   | Merged PR: [[#2391][#2992] Update User Guide and Clean Up Code #2394](https://github.com/reposense/RepoSense/pull/2394)                                                            |
| 13   | Created issue: [Adding test cases for blurb front end #2432](https://github.com/reposense/RepoSense/issues/2432)                                                                   |
| 13   | Created issue: [Investigate why the order for parsing for blurb is inconsistent #2433](https://github.com/reposense/RepoSense/issues/2433)                                         |
| 13   | Reviewed PR: [[#2424] Fix missing dates in portfolio mode #2431](https://github.com/reposense/RepoSense/pull/2431)                                                                 |
| 13   | Reviewed PR: [[#2419] Group Renovate Minor and Patch Updates #2434](https://github.com/reposense/RepoSense/pull/2434)                                                              |
