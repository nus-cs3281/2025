### Summary

* **Feature development**:
  * Implemented portfolio mode for the report
    * New mode targeted for users to create a personal code portfolio page to showcase their coding work, with a more optimized view and individual repository date ranges.
    * Implemented a portfolio flag in the backend as a toggle for this new mode.
    * Implemented the new portfolio view in the frontend.
    * Coordinated with team member's backend implementation to support individual repository date ranges in this new mode in the frontend.
  * Support individual repository date ranges in the default mode in the frontend.
* **Testing and bug fixes**
  * Enhanced cypress tests to support running on multiple reports (default mode and portfolio mode).
  * Fix various frontend bugs and added more thorough testing.
  * Fix inconsistent timezones in Cypress tests.
* **Code maintenance**
  * Refactor frontend components for simplicity and to ensure consistent behavior.
  * Upgrade deprecated actions that caused checks to fail.
  * Bump up node to v20.

| Week | Achievements                                                                                                                                                                                                                         |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3    | Created issue: [CI failing due to deprecation of actions/upload-artifact@v3 #2273](https://github.com/reposense/RepoSense/issues/2273)                                                                                               |
| 3    | Created & merged PR: [[#2273] Update workflows to use v4 of artifact actions #2274](https://github.com/reposense/RepoSense/pull/2274)                                                                                                |
| 3    | Created PR: [[#2266] Fix Cypress tests that fail locally #2272](https://github.com/reposense/RepoSense/pull/2272)                                                                                                                    |
| 4    | Created issue: [Display time periods for each repository #2283](https://github.com/reposense/RepoSense/issues/2283)                                                                                                                  |
| 4    | Merged PR: [[#2266] Fix Cypress tests that fail locally #2272](https://github.com/reposense/RepoSense/pull/2272)                                                                                                                     |
| 4    | Created PR: [[#2275] Upgrade node to v20 in workflows #2282](https://github.com/reposense/RepoSense/pull/2282)                                                                                                                       |
| 5    | Merged PR: [[#2275] Upgrade node to v20 in workflows #2282](https://github.com/reposense/RepoSense/pull/2282)                                                                                                                        |
| 5    | Reviewed PR: [[#2190] Add ESLint rule to enforce commas between types #2287](https://github.com/reposense/RepoSense/pull/2287)                                                                                                       |
| 6    | Created issue: [BE: Flag to support optimised portfolio view #2304](https://github.com/reposense/RepoSense/issues/2304)                                                                                                              |
| 6    | Created issue: [FE: Support optimised portfolio view #2305](https://github.com/reposense/RepoSense/issues/2305)                                                                                                                      |
| 6    | Created PR: [[#2283] Display time periods for each repository #2303](https://github.com/reposense/RepoSense/pull/2303)                                                                                                               |
| 6    | Created PR: [[#2304] Portfolio flag to support optimised portfolio report #2310](https://github.com/reposense/RepoSense/pull/2310)                                                                                                   |
| 6    | Reviewed PR: [[#2280] Specify time periods for different repos in csv config #2281](https://github.com/reposense/RepoSense/pull/2281)                                                                                                |
| 7    | Merged PR: [[#2304] Portfolio flag to support optimised portfolio report #2310](https://github.com/reposense/RepoSense/pull/2310)                                                                                                    |
| 8    | Created PR: [[#2305] FE: Support optimised portfolio view #2320](https://github.com/reposense/RepoSense/pull/2320)                                                                                                                   |
| 9    | Combined PRs: [[#2283] Display time periods for each repository #2303](https://github.com/reposense/RepoSense/pull/2303) into [[#2305] FE: Support optimised portfolio view #2320](https://github.com/reposense/RepoSense/pull/2320) |
| 10   | Created issue: [Selected range on ramp does not translate correctly to dates in zoom view #2351](https://github.com/reposense/RepoSense/issues/2351)                                                                                 |
| 10   | Created issue: [Refactor c-summary and c-summary-portfolio #2359](https://github.com/reposense/RepoSense/issues/2359)                                                                                                                |
| 10   | Created issue: [Unable to reselect zoom range after clicking on the same spot twice #2360](https://github.com/reposense/RepoSense/issues/2360)                                                                                       |
| 10   | Reviewed PR: [[#2106] Implement comparison of files across repos #2322](https://github.com/reposense/RepoSense/pull/2322)                                                                                                            |
| 10   | Reviewed PR: [[#2334] Resolve conflict between CLI and CSV dates #2340](https://github.com/reposense/RepoSense/pull/2340)                                                                                                            |
| 11   | Created issue: [ESLint not catching stylelistic violations #2389](https://github.com/reposense/RepoSense/issues/2389)                                                                                                                |
| 11   | Merged PR: [[#2305] FE: Support optimised portfolio view #2320](https://github.com/reposense/RepoSense/pull/2320)                                                                                                                    |
| 11   | Reviewed PR: [[#2210] Add default sort order for groups #2331](https://github.com/reposense/RepoSense/pull/2331)                                                                                                                     |
| 12   | Re-reviewed updated PR: [[#2334] Resolve conflict between CLI and CSV dates #2340](https://github.com/reposense/RepoSense/pull/2340)                                                                                                 |
| 13   | Created issue: [Support shared Cypress test suites #2422](https://github.com/reposense/RepoSense/issues/2422)                                                                                                                        |
| 13   | Created issue: [logo.png gets deleted when running hotReloadFrontend gradle task #2423](https://github.com/reposense/RepoSense/issues/2423)                                                                                          |
| 13   | Created issue: [Missing dates in portfolio mode #2424](https://github.com/reposense/RepoSense/issues/2424)                                                                                                                           |
| 13   | Created issue: [Incorrect widgets when used in portfolio mode #2425](https://github.com/reposense/RepoSense/issues/2425)                                                                                                             |
| 13   | Created PR: [[#2359] Refactor summary components #2414](https://github.com/reposense/RepoSense/pull/2414)                                                                                                                            |
| 13   | Created PR: [[#2424] Fix missing dates in portfolio mode #2431](https://github.com/reposense/RepoSense/pull/2431)                                                                                                                    |
| 14   | Created PR: [[#2425] Fix incorrect widgets in portfolio mode #2435 ](https://github.com/reposense/RepoSense/pull/2435)                                                                                                               |
| 14   | Merged PR: [[#2359] Refactor summary components #2414](https://github.com/reposense/RepoSense/pull/2414)                                                                                                                             |
| 14   | Merged PR: [[#2424] Fix missing dates in portfolio mode #2431](https://github.com/reposense/RepoSense/pull/2431)                                                                                                                     |
| 14   | Merged PR: [[#2425] Fix incorrect widgets in portfolio mode #2435 ](https://github.com/reposense/RepoSense/pull/2435)                                                                                                                |
