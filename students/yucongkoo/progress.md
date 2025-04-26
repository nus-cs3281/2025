### Summary
Over the course of the semester, I contributed to both CATcher (primarily during the first half) and WATcher (mainly in the second half). Through these projects, I progressively built my experience and expertise across various areas, including implementation, documentation, testing, and project management. I have summarised notable contributions as follows:

- **CATcher bug trimming phase** (main contribution as developer):
  - Participated in requirements gathering ([#1309](https://github.com/CATcher-org/CATcher/issues/1309))
  - Implemented both frontend and backend changes ([#1312](https://github.com/CATcher-org/CATcher/pull/1312))
  - Tested the new phase throughly, discovered bug [#1327](https://github.com/CATcher-org/CATcher/issues/1327)
  - Updated documentation (i.e. DG) to include the new user workflow with bug trimming phase ([#43](https://github.com/CATcher-org/catcher-org.github.io/pull/43))
- **Project management** (main contribution as part of transitioning into senior developer/project maintainer):
  - Identified pitfall in usage of feature branch (CATcher bug trimming phase), where PR merges into the feature branch does not run our CI tests ([#1320](https://github.com/CATcher-org/CATcher/issues/1320))
  - Researched root cause of failing Github CI ([failing tests](https://github.com/CATcher-org/CATcher/issues/1335), [failing playwright](https://github.com/CATcher-org/CATcher/issues/1292)), and fixed the problem to maintain a healthy CI pipeline ([#1336](https://github.com/CATcher-org/CATcher/pull/1336), [#1298](https://github.com/CATcher-org/CATcher/pull/1298))
  - Standardized deployment workflow between CATcher and WATcher to allow deployment from target branch ([#1336](https://github.com/CATcher-org/CATcher/pull/1336))
  - Released new WATcher version [V1.3.0](https://github.com/CATcher-org/WATcher/releases/tag/V1.3.0) and CATcher hotfix [V3.6.1](https://github.com/CATcher-org/CATcher/releases/tag/V3.6.1)
  - Created good first issues [CATcher #1315](https://github.com/CATcher-org/CATcher/issues/1315), [WATcher #470](https://github.com/CATcher-org/WATcher/issues/470)
- **Others**:
  - Reviewed PRs ([#1321](https://github.com/CATcher-org/CATcher/pull/1321#discussion_r1948430106), [#1319](https://github.com/CATcher-org/CATcher/pull/1319#pullrequestreview-2604841262), [#1328](https://github.com/CATcher-org/CATcher/pull/1328#pullrequestreview-2619991780), [#1331](https://github.com/CATcher-org/CATcher/pull/1331#pullrequestreview-2620080929), [#1352](https://github.com/CATcher-org/CATcher/pull/1352#pullrequestreview-2745470774), [#456](https://github.com/CATcher-org/WATcher/pull/456#pullrequestreview-2763147315)), providing suggestions on code quality improvements where possible 
  - Multiple code contributions as part of releasing new WATcher versions ([#426](https://github.com/CATcher-org/WATcher/pull/426), [#458](https://github.com/CATcher-org/WATcher/pull/458), [#468](https://github.com/CATcher-org/WATcher/pull/468))
  - Fixed production bug reported by users [#1348](https://github.com/CATcher-org/CATcher/issues/1348#issuecomment-2745252534)

| Week | Achievements                                                                                                                                                                                                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Merged PR : [Fix formatting style of issue-table component](https://github.com/CATcher-org/CATcher/pull/1291)                                                                                                                                 |
| 1    | Submitted and Researched Issue: [Playwright Github workflow failing #1292](https://github.com/CATcher-org/CATcher/issues/1292)                                                                                                                |
| 2    | Merged PR: [Downgrade ubuntu version in playwright.yml #1298](https://github.com/CATcher-org/CATcher/pull/1298)                                                                                                                               |
| 2    | Participated in Issue Investigation : [Workflow failing due to updated nested dependencies #1304](https://github.com/CATcher-org/CATcher/issues/1304#issuecomment-2609636737)                                                                 |
| 4    | Reported and Researched Bug: [Problematic RestGithubIssueState value #1310](https://github.com/CATcher-org/CATcher/issues/1310)                                                                                                               |
| 4    | Merged PR: [Fix RestGithubIssueState value for closed states #1311](https://github.com/CATcher-org/CATcher/pull/1311)                                                                                                                         |
| 4    | Initiated and participated in discussion of UI and user workflow for new bug-trimming phase: [Create new UI for bug reporting phase that allows deleting and un-deleting of issues #1309](https://github.com/CATcher-org/CATcher/issues/1309) |
| 4    | Created good first issue: [Refactor IssueTablesComponent #1315](https://github.com/CATcher-org/CATcher/issues/1315)                                                                                                                       |
| 5    | Merged PR: [Implement new UI and logic for deleting and restoring issues #1312](https://github.com/CATcher-org/CATcher/pull/1312)                                                                                                             |
| 5    | Created Issue: [Setup Builds and Tests not running for feature-bug-trimming branch #1320](https://github.com/CATcher-org/CATcher/issues/1320)                                                                                                 |
| 5    | Created Issue: [Remove Setup Builds and Test workflow from feature branch #1323](https://github.com/CATcher-org/CATcher/issues/1323)                                                                                                          |
| 5    | Merged PR: [Update github-actions.yml to run when push/PR #1322](https://github.com/CATcher-org/CATcher/pull/1322)                                                                                                                            |
| 5    | Reviewed PR: [Fix incorrect Github REST API response types #1321](https://github.com/CATcher-org/CATcher/pull/1321#discussion_r1948430106)                                                                                                    |
| 5    | Reviewed PR: [Create issue component for bug trimming phase #1319](https://github.com/CATcher-org/CATcher/pull/1319#pullrequestreview-2604841262)                                                                   |
| 6    | Submitted Bug: [Line through UI for issues-deleted.component.css is not working on Safari #1327](https://github.com/CATcher-org/CATcher/issues/1327)                                                                                          |
| 6    | Reviewed PR: [Fix strikethrough on Safari #1328](https://github.com/CATcher-org/CATcher/pull/1328#pullrequestreview-2619991780)                                                                                                               |
| 6    | Merged PR: [Remove feature branch from github-actions.yml #1329](https://github.com/CATcher-org/CATcher/pull/1329)                                                                                                                            |
| 6    | Reviewed PR: [Merge Feature bug trimming branch to main #1331](https://github.com/CATcher-org/CATcher/pull/1331#pullrequestreview-2620080929)                                                                                                 |
| 6    | Participated in Issue Investigation: [Filter bar overflows horizontal screen space #396](https://github.com/CATcher-org/WATcher/issues/396#issuecomment-2682312709)                                                                           |
| 7    | Merged PR: [Add bug-trimming phase to user-workflow.md #43](https://github.com/CATcher-org/catcher-org.github.io/pull/43)                                                                                                                     |
| 7    | Reported and Researched Bug: [npm test on MacOS is failing #1335](https://github.com/CATcher-org/CATcher/issues/1335)                                                                                                                         |
| 7    | Merged PR: [Update karma config #1336](https://github.com/CATcher-org/CATcher/pull/1336)                                                                                                                                                      |
|7| Created Issue: [Deselect all selections for filters #423](https://github.com/CATcher-org/WATcher/issues/423)|
|7| Merged PR: [Add side border to draft PR cards #426](https://github.com/CATcher-org/WATcher/pull/426)|
|7| Participated in branching workflows discussion: [Use feature-branches instead of merging to main #427](https://github.com/CATcher-org/WATcher/issues/427#issuecomment-2705558358)|
|8| Created Issue to standardize deployment workflow in CATcher and WATcher: [Update deployment workflow to allow manual deployments from tag #429](https://github.com/CATcher-org/WATcher/issues/429)|
|8| Merged PR: [Upgrade Octokit authentication to fix deprecation warnings #1344](https://github.com/CATcher-org/CATcher/pull/1344)|
|9| Deployed WATcher [V1.3.0](https://github.com/CATcher-org/WATcher/releases/tag/V1.3.0)|
|9| Created Issue: [Update DG to include a common error faced during local set up #18](https://github.com/CATcher-org/WATcher-docs/issues/18)|
|9| Merged PR: [Update docs to include workaround to common errors #22](https://github.com/CATcher-org/WATcher-docs/pull/22)|
|9| Contributed to discussion of possible WATcher enhancements:<br> - [Give a more detailed tool tip for 'keep filter' button #440](https://github.com/CATcher-org/WATcher/issues/440#issuecomment-2738997268)<br>- [Visually differentiate issues and PRs more #441](https://github.com/CATcher-org/WATcher/issues/441#issuecomment-2739008201)<br>- [Show matching issues and PRs together #444](https://github.com/CATcher-org/WATcher/issues/444#issuecomment-2739088533)|
|10| Investigated CATcher bug reported by users: [Issue with reassigning assignees after unchecking issue as duplicate #1348](https://github.com/CATcher-org/CATcher/issues/1348#issuecomment-2745252534)|
|10| Merged PR: [Fix bug related to assignees dropdown showing old values #1349](https://github.com/CATcher-org/CATcher/pull/1349)|
|11| Merged PR: [Change keep filters to use slider button #458](https://github.com/CATcher-org/WATcher/pull/458)|
|12| Reviewed PR: [Change logo to WATcher #23](https://github.com/CATcher-org/WATcher-docs/pull/23)|
|12| Reviewed PR: [Fix navigability issue caused by shared table name #1352](https://github.com/CATcher-org/CATcher/pull/1352#pullrequestreview-2745470774)|
|12| Cherry-picked and deployed [hotfix](https://github.com/CATcher-org/CATcher/commit/b1340c94f82bc1b0bbeb3cb00b8e62183995eebe) for CATcher V3.6.1 |
|12| Published CATcher release [V3.6.1](https://github.com/CATcher-org/CATcher/releases/tag/V3.6.1)|
|13| Created Issue: [Give a more detailed tool tip for 'keep filter' button #440](https://github.com/CATcher-org/WATcher/issues/440)|
|13| Merged PR: [Change keep filters to use slider button #458](https://github.com/CATcher-org/WATcher/pull/458)|
|13| Reviewed PR: [Add a badge to indicate whether the PR follows the forking workflow #456](https://github.com/CATcher-org/WATcher/pull/456#pullrequestreview-2763147315)|
|13| Created Issue: [Bug of all select panels getting transformed to the right #467](https://github.com/CATcher-org/WATcher/issues/467)|
|13| Merged PR: [Target only filter-bar-panel to move to right #468](https://github.com/CATcher-org/WATcher/pull/468)|
|13| Created good first issue: [Inconsistency on showing pagination of dashboard #470](https://github.com/CATcher-org/WATcher/issues/470)|