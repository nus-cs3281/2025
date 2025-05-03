## Summary

- Migrated 15 Unit Test cases for the PostgreSQL database: [#13201](https://github.com/TEAMMATES/teammates/pull/13201), [#13209](https://github.com/TEAMMATES/teammates/pull/13209), [#13210](https://github.com/TEAMMATES/teammates/pull/13210), [#13219](https://github.com/TEAMMATES/teammates/pull/13219), [#13220](https://github.com/TEAMMATES/teammates/pull/13220), [#13222](https://github.com/TEAMMATES/teammates/pull/13222), [#13224](https://github.com/TEAMMATES/teammates/pull/13224), [#13233](https://github.com/TEAMMATES/teammates/pull/13233), [#13234](https://github.com/TEAMMATES/teammates/pull/13234), [#13239](https://github.com/TEAMMATES/teammates/pull/13239), [#13244](https://github.com/TEAMMATES/teammates/pull/13244), [#13245](https://github.com/TEAMMATES/teammates/pull/13245), [#13247](https://github.com/TEAMMATES/teammates/pull/13247), [#13266](https://github.com/TEAMMATES/teammates/pull/13266), and [#13274](https://github.com/TEAMMATES/teammates/pull/13274)
- Migrated 1 E2E Test case for the PostgreSQL database: [#13310](https://github.com/TEAMMATES/teammates/pull/13310)
- Refactored the Test Access Controls for Unit Testing, and refactored about 35 Unit Tests regarding their access controls: [#13254](https://github.com/TEAMMATES/teammates/pull/13254)
- Submitted 3 different issues, one on improvement, one on potential bug, and the last on refactoring the remaining access controls for unit tests for new developers: [#13202](https://github.com/TEAMMATES/teammates/pull/13202), [#13237](https://github.com/TEAMMATES/teammates/pull/13237), and [#13304](https://github.com/TEAMMATES/teammates/pull/13304)
- Of which two of the issues have 2 open PRs (that I might get to some day): [#13238](https://github.com/TEAMMATES/teammates/pull/13238), and [#13203](https://github.com/TEAMMATES/teammates/pull/13203)
- Reviewed 10 PRs: [#13216](https://github.com/TEAMMATES/teammates/pull/13216), [#13242](https://github.com/TEAMMATES/teammates/pull/13242), [#13269](https://github.com/TEAMMATES/teammates/pull/13269), [#13280](https://github.com/TEAMMATES/teammates/pull/13280), [#13296](https://github.com/TEAMMATES/teammates/pull/13296), [#13298](https://github.com/TEAMMATES/teammates/pull/13298), [#13303](https://github.com/TEAMMATES/teammates/pull/13303), [#13308](https://github.com/TEAMMATES/teammates/pull/13308), [#13311](https://github.com/TEAMMATES/teammates/pull/13311), [#13314](https://github.com/TEAMMATES/teammates/pull/13314),

An even shorter summary: 3 issues opened (of which 1 partially resolved), 19 PRs submitted (of which 17 were merged), and 10 PRs reviewed.

| Week | PR |
|------|---|
| 2    | Opened PR: [[#12048] Migrate tests for DeleteNotificationActionTest #13201](https://github.com/TEAMMATES/teammates/pull/13201) |
| 2    | Submitted Issue: [Add a show all/collapse all button for students on their submission page #13202](https://github.com/TEAMMATES/teammates/pull/13202) |
| 2    | Opened PR: [[#13202] Show/Collapse All button in the student form submission #13203](https://github.com/TEAMMATES/teammates/pull/13203) |
| 3    | Opened PR: [[#12048] Migrate tests for CreateNotificationActionTest #13209](https://github.com/TEAMMATES/teammates/pull/13209) |
| 3    | Opened PR: [[#12048] Migrate tests for GetNotificationActionTest #13210](https://github.com/TEAMMATES/teammates/pull/13210) |
| 4    | Opened PR: [[#12048] Migrate tests for GetNotificationsActionTest #13219](https://github.com/TEAMMATES/teammates/pull/13219) |
| 4    | Opened PR: [[#12048] Migrate tests for GetReadNotificationsActionTest #13220](https://github.com/TEAMMATES/teammates/pull/13220) |
| 4    | Opened PR: [[#12048] Migrate tests for MarkNotificationAsReadActionTest #13222](https://github.com/TEAMMATES/teammates/pull/13222) |
| 4    | Opened PR: [[#12048] Migrate tests for UpdateNotificationActionTest #13224](https://github.com/TEAMMATES/teammates/pull/13224) |
| 5    | Reviewed PR: [[#12048] Migrate tests for GetSessionResultsActionTest #13216](https://github.com/TEAMMATES/teammates/pull/13216) |
| 5    | Opened PR: [[#12048] Migrate tests for CompileLogsActionTest #13233](https://github.com/TEAMMATES/teammates/pull/13233) |
| 5    | Opened PR: [[#12048] Migrate tests for QueryLogsActionTest #13234](https://github.com/TEAMMATES/teammates/pull/13234) |
| 6    | Merged PR: [[#12048] Migrate tests for DeleteNotificationActionTest #13201](https://github.com/TEAMMATES/teammates/pull/13201) |
| 6    | Submitted Issue: [Unformatted error for certain actions used for testing null UUID #13237](https://github.com/TEAMMATES/teammates/pull/13237) |
| 6    | Opened PR: [[#13237] Add catching NullPointerException in getUuidFromString #13238](https://github.com/TEAMMATES/teammates/pull/13238) |
| 6    | Opened PR: [[#12048] Migrate tests for CreateFeedbackSessionLogActionTest #13239](https://github.com/TEAMMATES/teammates/pull/13239) |
| 6    | Opened PR: [[#12048] Migrate tests for GetTimeZonesActionTest #13244](https://github.com/TEAMMATES/teammates/pull/13244) |
| 6    | Opened PR: [[#12048] Migrate tests for GetUsageStatisticsActionTest #13245](https://github.com/TEAMMATES/teammates/pull/13245) |
| 7    | Merged PR: [[#12048] Migrate tests for GetReadNotificationsActionTest #13220](https://github.com/TEAMMATES/teammates/pull/13220) |
| 7    | Merged PR: [[#12048] Migrate tests for MarkNotificationAsReadActionTest #13222](https://github.com/TEAMMATES/teammates/pull/13222) |
| 7    | Opened PR: [[#12048] Migrate tests for CalculateUsageStatisticsAction #13247](https://github.com/TEAMMATES/teammates/pull/13247) |
| 7    | Opened PR: [[#12048] Abstract Access Controls to BaseActionTest #13254](https://github.com/TEAMMATES/teammates/pull/13254) |
| 7    | Reviewed PR: [[#13227] Improve testing docs #13242](https://github.com/TEAMMATES/teammates/pull/13242) |
| 7    | Merged PR: [[#12048] Migrate tests for CreateNotificationActionTest #13209](https://github.com/TEAMMATES/teammates/pull/13209) |
| 7    | Merged PR: [[#12048] Migrate tests for GetNotificationActionTest #13210](https://github.com/TEAMMATES/teammates/pull/13210) |
| 7    | Merged PR: [[#12048] Migrate tests for GetNotificationsActionTest #13219](https://github.com/TEAMMATES/teammates/pull/13219) |
| 7    | Merged PR: [[#12048] Migrate tests for UpdateNotificationActionTest #13224](https://github.com/TEAMMATES/teammates/pull/13224) |
| 7    | Merged PR: [[#12048] Migrate tests for GetTimeZonesActionTest #13244](https://github.com/TEAMMATES/teammates/pull/13244) |
| 7    | Merged PR: [[#12048] Migrate tests for GetUsageStatisticsActionTest #13245](https://github.com/TEAMMATES/teammates/pull/13245) |
| 7    | Merged PR: [[#12048] Migrate tests for CalculateUsageStatisticsAction #13247](https://github.com/TEAMMATES/teammates/pull/13247) |
| 8    | Merged PR: [[#12048] Migrate tests for CompileLogsActionTest #13233](https://github.com/TEAMMATES/teammates/pull/13233) |
| 8    | Merged PR: [[#12048] Migrate tests for QueryLogsActionTest #13234](https://github.com/TEAMMATES/teammates/pull/13234) |
| 8    | Merged PR: [[#12048] Migrate tests for CreateFeedbackSessionLogActionTest #13239](https://github.com/TEAMMATES/teammates/pull/13239) |
| 8    | Opened PR: [[#12048] Migrate tests for GetDeadlineExtensionActionTest #13266](https://github.com/TEAMMATES/teammates/pull/13266) |
| 9    | Reviewed PR: [[#12048] Migrate Tests for SearchStudentsActionTest #13269](https://github.com/TEAMMATES/teammates/pull/13269) |
| 9    | Reviewed PR: [[#12048] Migrate tests for SendErrorReportActionTest #13280](https://github.com/TEAMMATES/teammates/pull/13280) |
| 9    | Merged PR: [[#12048] Migrate tests for GetDeadlineExtensionActionTest #13266](https://github.com/TEAMMATES/teammates/pull/13266) |
| 9    | Opened PR: [[#12048] Migrate tests for JsonResultTest #13274](https://github.com/TEAMMATES/teammates/pull/13274) |
| 9    | Merged PR: [[#12048] Migrate tests for JsonResultTest #13274](https://github.com/TEAMMATES/teammates/pull/13274) |
| 11   | Submitted Issue: [Refactoring for Unit Test Access Controls #13304](https://github.com/TEAMMATES/teammates/pull/13304) |
| 12   | Reviewed PR: [[#12048] Migrate tests for PublishFeedbackSessionActionTest #13298](https://github.com/TEAMMATES/teammates/pull/13298) |
| 12   | Reviewed PR: [[#12048] Migrate Tests for UpdateStudentActionTest #13303](https://github.com/TEAMMATES/teammates/pull/13303) |
| 12   | Reviewed PR: [[#12048] Migrate tests for UnpublishFeedbackSessionActionTest #13296](https://github.com/TEAMMATES/teammates/pull/13296) |
| 12   | Opened PR: [[#12048] Migrate InstructorCourseStudentDetailsPageE2ETest #13310](https://github.com/TEAMMATES/teammates/pull/13310) |
| 13   | Merged PR: [[#12048] Migrate InstructorCourseStudentDetailsPageE2ETest #13310](https://github.com/TEAMMATES/teammates/pull/13310) |
| 13   | Reviewed PR: [[#12048] Migrate FeedbackResultsPageE2ETest #13308](https://github.com/TEAMMATES/teammates/pull/13308) |
| 13   | Reviewed PR: [[#12048] Migrate InstructorFeedbackEditPageE2ETest #13314](https://github.com/TEAMMATES/teammates/pull/13314) |
| 13   | Reviewed PR: [[#12048] Migrate InstructorCourseEnrollPageE2ETest #13311](https://github.com/TEAMMATES/teammates/pull/13311) |
| Exam Week| Merged PR: [[#12048] Abstract Access Controls to BaseActionTest #13254](https://github.com/TEAMMATES/teammates/pull/13254) |