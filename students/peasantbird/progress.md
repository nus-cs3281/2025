## Summary

In this project, I contributed to test migration and a frontend feature. My key contributions include:

- **Test Migration**:

  - Migrated multiple unit tests to use SQL-based logic instead of the previous Datastore model (e.g., [GetFeedbackSessionSubmittedGiverSetActionTest #13294](https://github.com/TEAMMATES/teammates/pull/13294), [UnpublishFeedbackSessionActionTest #13296](https://github.com/TEAMMATES/teammates/pull/13296)), while ensuring near 100% coverage.

  - Modified `MockRecaptchaVerifier` to allow for mocking `isVerificationSuccessful()` to return either true or false, to test different flows ([#13253](https://github.com/TEAMMATES/teammates/pull/13253)). Previously, it was not possible to test the behavior of the system when verification fails.

  - Overrided `getCurrentUserWithTransaction(UserInfoCookie uic)` in `MockUserProvision` to return the mockUser if logged in, so that Actions which call that method can be tested without failing ([#13253](https://github.com/TEAMMATES/teammates/pull/13253)).

- **Frontend Feature**:

  - Wrote an end-to-end feature allowing empty weights for MCQ questions ([#13282](https://github.com/TEAMMATES/teammates/pull/13282)). Underwent first review and currently making more changes before raising for further reviews.

- **Community Support**:

  - Helped the other CS3281 contributors with queries, as well as suggestions for implementation ideas

    - For instance, suggested overriding `getMasqueradeUser(String googleId)` in `MockUserProvision` for this [PR to Abstract Access Controls to BaseActionTest](https://github.com/TEAMMATES/teammates/pull/13254/files) because I faced similar issue where the method was not overrided and the original flow through `UserProvision` would not work in a test environment.

| Week | Achievements                                                                                                                                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4    | Opened PR: [[#12048] Migrate tests for DeleteAccountRequestActionTest #13213](https://github.com/TEAMMATES/teammates/pull/13213)                             |
| 4    | Helped answer clarifications and queries regarding writing unit tests from Wei Loon                                                                          |
| 6    | Addressed comments from reviewers: [[#12048] Migrate tests for DeleteAccountRequestActionTest #13213](https://github.com/TEAMMATES/teammates/pull/13213)     |
| 6    | Merged PR: [[#12048] Migrate tests for DeleteAccountRequestActionTest #13213](https://github.com/TEAMMATES/teammates/pull/13213)                             |
| 7    | Opened PR: [[#12048] Migrate tests for CreateAccountRequestActionTest #13253](https://github.com/TEAMMATES/teammates/pull/13253)                             |
| 8    | Opened PR: [[#12048] Migrate tests for GetAccountRequestActionTest #13270](https://github.com/TEAMMATES/teammates/pull/13270)                                |
| 8    | Opened PR: [[#12048] Migrate tests for ResetAccountRequestActionTest #13271](https://github.com/TEAMMATES/teammates/pull/13271)                              |
| 8    | Opened PR: [[#12048] Migrate tests for SearchAccountRequestsActionTest #13272](https://github.com/TEAMMATES/teammates/pull/13272)                            |
| 9    | Merged PR: [[#12048] Migrate tests for CreateAccountRequestActionTest #13253](https://github.com/TEAMMATES/teammates/pull/13253)                             |
| 9    | Merged PR: [[#12048] Migrate tests for GetAccountRequestActionTest #13270](https://github.com/TEAMMATES/teammates/pull/13270)                                |
| 9    | Merged PR: [[#12048] Migrate tests for ResetAccountRequestActionTest #13271](https://github.com/TEAMMATES/teammates/pull/13271)                              |
| 9    | Merged PR: [[#12048] Migrate tests for SearchAccountRequestsActionTest #13272](https://github.com/TEAMMATES/teammates/pull/13272)                            |
| 10   | Opened PR: [[#12547] Empty weights for MCQ #13282](https://github.com/TEAMMATES/teammates/pull/13282)                                                        |
| 10   | Opened PR: [[#12048] Migrate tests for GetFeedbackSessionSubmittedGiverSetActionTest #13294](https://github.com/TEAMMATES/teammates/pull/13294)              |
| 10   | Opened draft PR: [[#12048] Migrate tests for UnpublishFeedbackSessionActionTest #13296](https://github.com/TEAMMATES/teammates/pull/13296)                   |
| 10   | Opened draft PR: [[#12048] Migrate tests for PublishFeedbackSessionActionTest #13298](https://github.com/TEAMMATES/teammates/pull/13298)                     |
| 10   | Merged PR: [[#12048] Migrate tests for GetFeedbackSessionSubmittedGiverSetActionTest #13294](https://github.com/TEAMMATES/teammates/pull/13294)              |
| 11   | Finish PR: [[#12048] Migrate tests for UnpublishFeedbackSessionActionTest #13296](https://github.com/TEAMMATES/teammates/pull/13296)                         |
| 11   | Finish PR: [[#12048] Migrate tests for PublishFeedbackSessionActionTest #13298](https://github.com/TEAMMATES/teammates/pull/13298)                           |
| 12   | Merge PR: [[#12048] Migrate tests for PublishFeedbackSessionActionTest #13298](https://github.com/TEAMMATES/teammates/pull/13298)                            |
| 12   | Addressed comments from reviewers: [[#12048] Migrate tests for UnpublishFeedbackSessionActionTest #13296](https://github.com/TEAMMATES/teammates/pull/13296) |
| 13   | Merge PR: [[#12048] Migrate tests for UnpublishFeedbackSessionActionTest #13296](https://github.com/TEAMMATES/teammates/pull/13296)                          |
| 13   | Opened draft PR: [[#12048] Migrate tests for SubmitFeedbackResponsesActionTest #13317](https://github.com/TEAMMATES/teammates/pull/13317)                    |
