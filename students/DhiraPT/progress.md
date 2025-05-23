## Summary

In this project, I contributed to test migration, bug fixes, and code quality improvements. My key contributions include:

- **Test Migration**:

  - Migrated multiple unit tests to use SQL-based logic instead of the previous Datastore model (e.g., [DeleteStudentActionTest #13204](https://github.com/TEAMMATES/teammates/pull/13204), [UpdateStudentActionTest #13303](https://github.com/TEAMMATES/teammates/pull/13303), while ensuring near 100% coverage.

  - Modified `MockEmailSender` to simulate email sending failures for testing ([#13262](https://github.com/TEAMMATES/teammates/pull/13262)). Previously, it was not possible to test the behavior of the system when email sending fails.

- **Code Quality & Standardization**:

  - Standardized naming conventions for FeedbackSession Actions ([#13229](https://github.com/TEAMMATES/teammates/pull/13229)). The previous names were inconsistent, which could cause confusion about whether variables were associated with the correct action class.

- **Bug Fixes**:

  - Fixed a `NullPointerException` in the `Student` class by adding null checks ([#13264](https://github.com/TEAMMATES/teammates/pull/13264))—this issue was observed in other classes as well (more to be fixed).

  - Resolved a bug where incorrect closing soon reminders could be sent ([#13293](https://github.com/TEAMMATES/teammates/pull/13293)).

- **Issue Reporting & Community Support**:

  - Reported issues like PostgreSQL port conflicts ([#13291](https://github.com/TEAMMATES/teammates/issues/13291)).

  - Reviewed pull requests and assisted with contributor queries.

Lastly, I am currently working on the E2E migration, which will require improvements to the test architecture first ([#13324](https://github.com/TEAMMATES/teammates/issues/13324)).

| Week | Achievements                                                                                                                                                         |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2    | Submitted Issue: [Duplicate Feedback Sessions Appear on Student Page #13199](https://github.com/TEAMMATES/teammates/issues/13199)                                    |
| 4    | Reviewed PR: [[#12048] Migrate tests for GetAccountActionTest #13212](https://github.com/TEAMMATES/teammates/pull/13212)                                             |
| 5    | Submitted Issue: [Standardize the Naming Convention for FeedbackSession Actions #13228](https://github.com/TEAMMATES/teammates/issues/13228)                         |
| 6    | Merged PR: [[#12048] Migrate Tests for DeleteStudentActionTest #13204](https://github.com/TEAMMATES/teammates/pull/13204)                                            |
| 6    | Merged PR: [[#12048] Migrate Tests for DeleteStudentsActionTest #13205](https://github.com/TEAMMATES/teammates/pull/13205)                                           |
| 7    | Merged PR: [[#12048] Migrate Tests for DeleteInstructorActionTest #13207](https://github.com/TEAMMATES/teammates/pull/13207)                                         |
| 7    | Merged PR: [[#12048] Migrate Tests for FeedbackSessionPublishedRemindersActionTest #13223](https://github.com/TEAMMATES/teammates/pull/13223)                        |
| 7    | Responded to contributor queries: [#13199](https://github.com/TEAMMATES/teammates/issues/13199#issuecomment-2707383293)                                              |
| 7    | Merged PR: [[#13228] Standardize the Naming Conventions for FeedbackSession Actions #13229](https://github.com/TEAMMATES/teammates/pull/13229)                       |
| 8    | Submitted Issue: [Allow MockEmailSender to Simulate Email Sending Failures #13261](https://github.com/TEAMMATES/teammates/issues/13261)                              |
| 8    | Merged PR: [[#13261] Implement Email Sending Failure Behavior in MockEmailSender #13262](https://github.com/TEAMMATES/teammates/pull/13262)                          |
| 8    | Submitted Issue: [NullPointerException in Student class methods when student team is null #13263](https://github.com/TEAMMATES/teammates/issues/13263)               |
| 8    | Merged PR: [[#13263] Add null checks to methods in Student class #13264](https://github.com/TEAMMATES/teammates/pull/13264)                                          |
| 8    | Merged PR: [[#12048] Migrate Tests for FeedbackSessionClosedRemindersActionTest #13208](https://github.com/TEAMMATES/teammates/pull/13208)                           |
| 8    | Merged PR: [[#12048] Migrate Tests for SearchInstructorsActionTest #13259](https://github.com/TEAMMATES/teammates/pull/13259)                                        |
| 8    | Merged PR: [[#12048] Migrate Tests for RegenerateStudentKeyActionTest #13258](https://github.com/TEAMMATES/teammates/pull/13258)                                     |
| 8    | Merged PR: [[#12048] Migrate Tests for RegenerateInstructorKeyActionTest #13226](https://github.com/TEAMMATES/teammates/pull/13226)                                  |
| 9    | Submitted Issue: [Potential incorrect sending of closing soon email #13275](https://github.com/TEAMMATES/teammates/issues/13275)                                     |
| 9    | Reviewed PR: [[#12048] Migrate tests for GetStudentsActionTest #13243](https://github.com/TEAMMATES/teammates/pull/13243)                                            |
| 10   | Merged PR: [[#12048] Migrate Tests for SearchStudentsActionTest #13269](https://github.com/TEAMMATES/teammates/pull/13269)                                           |
| 10   | Merged PR: [[#12048] Migrate Tests for FeedbackSessionClosingSoonRemindersActionTest #13211](https://github.com/TEAMMATES/teammates/pull/13211)                      |
| 10   | Merged PR: [[#12048] Migrate Tests for FeedbackSessionOpenedRemindersActionTest #13215](https://github.com/TEAMMATES/teammates/pull/13215)                           |
| 10   | Merged PR: [[#12048] Migrate Tests for FeedbackSessionOpeningSoonRemindersActionTest #13221](https://github.com/TEAMMATES/teammates/pull/13221)                      |
| 10   | Submitted Issue: [PostgreSQL port conflict when running dev server #13291](https://github.com/TEAMMATES/teammates/issues/13291)                                      |
| 10   | Submitted Issue: [Same Google account silently auto-selected when logging in after failed login attempt #13292](https://github.com/TEAMMATES/teammates/issues/13292) |
| 11   | Responded to contributor queries: [#13291](https://github.com/TEAMMATES/teammates/issues/13291#issuecomment-2769908793)                                              |
| 11   | Merged PR: [[#13275] Fix potential incorrect sending of closing soon email #13293](https://github.com/TEAMMATES/teammates/pull/13293)                                |
| 12   | Merged PR: [[#12048] Migrate Tests for UpdateStudentActionTest #13303](https://github.com/TEAMMATES/teammates/pull/13303)                                            |
| 13   | Reviewed PR: [[#12048] Migrate FeedbackConstSumOptionQuestionE2E #13315](https://github.com/TEAMMATES/teammates/pull/13315)                                          |
| 13   | Submitted Issue: [Entities created during E2E tests persist in the database #13323](https://github.com/TEAMMATES/teammates/issues/13323)                             |
| 13   | Submitted Issue: [Data Migration: pageobjects migration to SQL-based versions #13324](https://github.com/TEAMMATES/teammates/issues/13324)                           |
| 13   | Merged PR: [[#13324] Migrate to InstructorFeedbackEditPageSql #13325](https://github.com/TEAMMATES/teammates/pull/13325)                                             |
| 13   | Opened PR: [[#12048] Migrate Tests for FeedbackConstSumRecipientQuestionE2ETest #13318](https://github.com/TEAMMATES/teammates/pull/13318)                           |
