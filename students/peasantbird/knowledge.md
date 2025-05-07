### Tool/Technology 1: Mockito

#### Aspects Learnt:

- Mockito is a framework for mocking dependencies
- Use `mock()` to create a mock class. Most of instantiating the mock classes is done in `BaseActionTest`.
- Use `when()` and `thenReturn()` to mock a specific function and return result.
- Use `verify()` to check if a function is called 0-N times (use `never()` for 0 times, and times(N) for N times). Helpful to check if a certain flow in application code was run
- Use `reset()` to reset a mock (e.g. no. of times a function of the mock was called, etc.)

#### Resources used:

- I looked at the [official website](https://site.mockito.org/) as well as the helpful links it suggested.

### Tool/Technology 2: TestNG

#### Aspects Learnt:

- For TestNG, I mainly learnt that TestNG natively supports parallel execution of unit tests
- You can control exactly what to run in parallel (methods, classes, tests, or instances) and how many threads to use, directly from your TestNG configuration or annotations.
- e.g. `testng-e2e-sql.xml`

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="e2e-tests-sql" parallel="tests" thread-count="2">
    <test name="e2e-tests-sql" parallel="classes">
        <packages>
            <package name="teammates.e2e.util" />
        </packages>
        <classes>
            <class name="teammates.e2e.cases.sql.FeedbackMcqQuestionE2ETest" />
            <class name="teammates.e2e.cases.sql.FeedbackMsqQuestionE2ETest" />
            <class name="teammates.e2e.cases.sql.FeedbackTextQuestionE2ETest" />
            <class name="teammates.e2e.cases.sql.FeedbackNumScaleQuestionE2ETest" />
            <class name="teammates.e2e.cases.sql.FeedbackRubricQuestionE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorStudentRecordsPageE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorCourseDetailsPageE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorFeedbackEditPageE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorStudentListPageE2ETest" />
            <class name="teammates.e2e.cases.sql.StudentHomePageE2ETest" />
            <class name="teammates.e2e.cases.sql.StudentCourseJoinConfirmationPageE2ETest" />
            <class name="teammates.e2e.cases.sql.AdminSearchPageE2ETest" />
            <class name="teammates.e2e.cases.sql.AdminHomePageE2ETest" />
            <class name="teammates.e2e.cases.sql.FeedbackRankOptionQuestionE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorHomePageE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorCourseEnrollPageE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorNotificationsPageE2ETest" />
            <class name="teammates.e2e.cases.sql.StudentCourseDetailsPageE2ETest" />
            <class name="teammates.e2e.cases.sql.RequestPageE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorCourseStudentDetailsEditPageE2ETest" />
            <class name="teammates.e2e.cases.sql.InstructorCourseStudentDetailsPageE2ETest" />
        </classes>
    </test>
</suite>
```

- Or you could do something like:

```
@Test(threadPoolSize = 3, invocationCount = 6, timeOut = 10000)
public void loadTest() {
    // This single test method will be invoked 6 times,
    // running up to 3 invocations concurrently.
}
```

#### Resources used:

- [Official website](https://testng.org/#_testng_documentation) as well as ChatGPT for some examples.

### Tool/Technology 3: Angular

#### Aspects Learnt:

- Structural directives: `*ngFor` and `*ngIf` for dynamic template rendering

  - `*ngIf`: Conditionally includes or removes a chunk of the template based on a boolean expression.
  - `*ngFor`: Renders a template once per item in an iterable.

    ```
    <ul>
        <li *ngFor="let item of items; let i = index; trackBy: trackById">
            {{ i + 1 }}. {{ item.name }}
        </li>
    </ul>
    ```

- Two-Way Binding with `[(ngModel)]`

```
<!-- Binds input value to component property and updates it on each keystroke -->
<input [(ngModel)]="searchText" placeholder="Search items">
<p>You’re searching for: {{ searchText }}</p>
```

- One-Way Binding + Change Event: `[ngModel]` & `(ngModelChange)`: Gives you explicit control over when and how changes propagate.

```
<!-- html -->
<input
  [ngModel]="searchText"
  (ngModelChange)="onSearchTextChange($event)"
  placeholder="Search items">

<!-- ts -->
searchText = '';
onSearchTextChange(updated: string) {
  this.searchText = updated.trim().toLowerCase();
  this.filterItems();
}
```

#### Resources Used

- Angular Official Documentation
  - [Structural Directives Guide](https://angular.io/guide/structural-directives) – Overview of *ngIf, *ngFor, and how to write your own structural directives
  - [Forms Guide](https://angular.io/guide/forms) – Detailed coverage of template-driven forms, including ngModel and (ngModelChange)
