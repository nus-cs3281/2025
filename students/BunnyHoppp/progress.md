## Summary

In this project, I contributed to test migration, and bug fixes. 

### Test Migration

- Migrated unit tests due to the migration from Google Cloud Datastore to PostgreSQL. My first unit test migration was [[#12048] Migrate tests for DeleteFeedbackQuestionActionTest](https://github.com/TEAMMATES/teammates/pull/13218) where I had started my journey deep diving into the large codebase of Teammates. It took me a long while, but it was worthwhile and helped me to migrate the other unit tests easily.
- Next, I will be working on an E2E test to ensure that the entire system works as expected from start to end. PR: [[#12048] Migrate Tests for FeedbackContributionQuestionE2ETest](https://github.com/TEAMMATES/teammates/pull/13322)

### Bug Fixes
- One major unit test was for [GetHasResponsesActionTest](https://github.com/TEAMMATES/teammates/pull/13289) where I noticed that the `GetHasResponsesAction` class was not migrated properly where the migrated courses still followed `Datastore` logic, instead of the new `SqlLogic`. This was rectified in the PR [[#13287] Fix GetHasResponsesAction #13288](https://github.com/TEAMMATES/teammates/pull/13288).

Overall, while working on Teammates, I learnt that software be constantly evolving especially with advancements in technology, and what works now might be obsolete in the future, and so we must be prepared to further develop our current software to match current trends and requirements. Furthermore, it is important to ensure that the developments are well documented and tested before deployoment through extensive testing to ensure that the system does not break when a new version is released.


| Week | Achievements                                                                                                                                      |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| 4    | Opened PR: [[#12048] Migrate tests for DeleteFeedbackQuestionActionTest #13218](https://github.com/TEAMMATES/teammates/pull/13218)                |
| 5    | Opened PR: [[#12048] Migrate tests for UpdateFeedbackQuestionActionTest #13231](https://github.com/TEAMMATES/teammates/pull/13231)                |
| 5    | Merged PR: [[#12048] Migrate tests for DeleteFeedbackQuestionActionTest #13218](https://github.com/TEAMMATES/teammates/pull/13218)                |
| 6    | Opened PR: [[#12048] Migrate tests for CreateFeedbackQuestionActionTest #13240](https://github.com/TEAMMATES/teammates/pull/13240)                |
| 6    | Opened PR: [[#12048] Refactor tests for DeleteFeedbackQuestionActionTest #13246](https://github.com/TEAMMATES/teammates/pull/13246)               |
| 6    | Merged PR: [[#12048] Refactor tests for DeleteFeedbackQuestionActionTest #13246](https://github.com/TEAMMATES/teammates/pull/13246)               |
| 6    | Opened PR: [[#12048] Migrate tests for CreateFeedbackResponseCommentActionTest #13248](https://github.com/TEAMMATES/teammates/pull/13248)         |
| 6    | Opened PR: [[#12048] Migrate tests for DeleteFeedbackResponseCommentActionTest #13249](https://github.com/TEAMMATES/teammates/pull/13249)         |
| 6    | Opened PR: [[#12048] Migrate tests for UpdateFeedbackResponseCommentActionTest #13251](https://github.com/TEAMMATES/teammates/pull/13251)         |
| 6    | Reviewed PR: [[#13227] Improve testing docs #13242](https://github.com/TEAMMATES/teammates/pull/13242)                                            |
| 7    | Opened PR: [[#12048] Migrate tests for CreateInstructorActionTest #13255](https://github.com/TEAMMATES/teammates/pull/13255)                      |
| 7    | Opened PR: [[#12048] Migrate tests for UpdateInstructorActionTest #13256](https://github.com/TEAMMATES/teammates/pull/13256)                      |
| 7    | Merged PR: [[#12048] Migrate tests for UpdateInstructorActionTest #13256](https://github.com/TEAMMATES/teammates/pull/13256)                      |
| 7    | Merged PR: [[#12048] Migrate tests for CreateInstructorActionTest #13255](https://github.com/TEAMMATES/teammates/pull/13255)                      |
| 7    | Merged PR: [[#12048] Migrate tests for UpdateFeedbackQuestionActionTest #13231](https://github.com/TEAMMATES/teammates/pull/13231)                |
| 7    | Merged PR: [[#12048] Migrate tests for CreateFeedbackQuestionActionTest #13240](https://github.com/TEAMMATES/teammates/pull/13240)                |                                                                                                                        |
| 8    | Opened PR: [[#12048] Migrate tests for GetAuthInfoActionTest #13273](https://github.com/TEAMMATES/teammates/pull/13273)                           |
| 8    | Reviewed PR: [[#13261] Implement Email Sending Failure Behavior in MockEmailSender #13262](https://github.com/TEAMMATES/teammates/pull/13262)     |
| 9    | Merged PR: [[#12048] Migrate tests for GetAuthInfoActionTest #13273](https://github.com/TEAMMATES/teammates/pull/13273)                           |                                                                                                                               |
| 10   | Opened PR: [[#12048] Migrate tests for ActionFactoryTest #13283](https://github.com/TEAMMATES/teammates/pull/13283)                               |
| 10   | Opened PR: [[#12048] Migrate tests for BinFeedbackSessionActionTest #13284](https://github.com/TEAMMATES/teammates/pull/13284)                    |
| 10   | Opened PR: [[#12048] Migrate tests for GetActionClassesActionTest #13285](https://github.com/TEAMMATES/teammates/pull/13285)                      |
| 10   | Opened PR: [[#12048] Migrate tests for InstructorSearchIndexingWorkerActionTest #13286](https://github.com/TEAMMATES/teammates/pull/13286)        |
| 10   | Opened Issue: [[#13287] Incorrect path for migrated courses in GetHasResponsesAction #13287](https://github.com/TEAMMATES/teammates/issues/13287) |
| 10   | Opened PR: [[#13287] Fix GetHasResponsesAction #13288](https://github.com/TEAMMATES/teammates/pull/13288)                                         |
| 10   | Closed PR: [[#13287] Fix GetHasResponsesAction #13288](https://github.com/TEAMMATES/teammates/pull/13288)                                         |                                                                                              |
| 10   | Closed Issue: [[#13287] Incorrect path for migrated courses in GetHasResponsesAction #13287](https://github.com/TEAMMATES/teammates/issues/13287) |                                                                                                                             |
| 10   | Opened PR: [[#12048] Migrate tests for GetHasResponsesActionTest #13289](https://github.com/TEAMMATES/teammates/pull/13289)                       |
| 10   | Merged PR: [[#12048] Migrate tests for GetHasResponsesActionTest #13289](https://github.com/TEAMMATES/teammates/pull/13289)                       |                                                                                                                                       |
| 10   | Merged PR: [[#12048] Migrate tests for ActionFactoryTest #13283](https://github.com/TEAMMATES/teammates/pull/13283)                               |                                                                                                                               |
| 10   | Merged PR: [[#12048] Migrate tests for BinFeedbackSessionActionTest #13284](https://github.com/TEAMMATES/teammates/pull/13284)                    |                                                                                                                               |
| 10   | Merged PR: [[#12048] Migrate tests for GetActionClassesActionTest #13285](https://github.com/TEAMMATES/teammates/pull/13285)                      |                                                                                                                               |
| 10   | Merged PR: [[#12048] Migrate tests for InstructorSearchIndexingWorkerActionTest #13286](https://github.com/TEAMMATES/teammates/pull/13286)        |                                                                                                                                |
| 10   | Merged PR: [[#12048] Migrate tests for CreateFeedbackResponseCommentActionTest #13248](https://github.com/TEAMMATES/teammates/pull/13248)         |                                                                                                                               |
| 10   | Merged PR: [[#12048] Migrate tests for DeleteFeedbackResponseCommentActionTest #13249](https://github.com/TEAMMATES/teammates/pull/13249)         |                                                                                                                               |
| 10   | Merged PR: [[#12048] Migrate tests for UpdateFeedbackResponseCommentActionTest #13251](https://github.com/TEAMMATES/teammates/pull/13251)         |                                                                                                                               |
| 10   | Reviewed PR: [[#12048] Migrate GetCourseJoinStatusActionTest #13299](https://github.com/TEAMMATES/teammates/pull/13299)                           |
| 13   | Opened PR: [[#12048] Migrate Tests for FeedbackContributionQuestionE2ETest](https://github.com/TEAMMATES/teammates/pull/13322)                    |
| 13   | Reviewed PR: [[#13324] Migrate to InstructorFeedbackEditPageSql](https://github.com/TEAMMATES/teammates/pull/13325)                               |


