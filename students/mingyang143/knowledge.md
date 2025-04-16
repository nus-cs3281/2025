[//]: # (### Tool/Technology )

[//]: # ()
[//]: # (List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.)

### Tool/Technology 1: **Angular and Dark Mode Implementation for the frontend**

#### Aspects Learned
1. **Angular Component Communication:**
    - Understanding how child components communicate with parent components using `@Output` and `EventEmitter`.
    - Applying event binding in parent templates to listen for changes emitted by child components.

2. **Conditional Class Application:**
    - Dynamically applying CSS classes to elements using Angular’s `ngClass` directive.
    - Dynamically applying CSS classes to elements using Angular’s `[class]` binding syntax.
    - Managing theme switching logic in the parent component.

3. **Event Binding:**
    - Utilizing Angular’s `(event)` binding syntax to handle user interactions.
    - For example: `(change)="handleChange($event)"` to trigger functions when events like `change` occur, passing the event object as an argument.

#### Resources Used and Summary
1. **[Angular Official Documentation](https://angular.io/):**
    - [Components and Templates](https://angular.io/guide/component-interaction): Learned how to use `@Output` and `EventEmitter` to enable child-to-parent communication.
    - [NgClass Directive](https://angular.io/api/common/NgClass): Understood how to conditionally apply CSS classes dynamically based on variables.

2. **[Udemy Course: "Angular - The Complete Guide" by Maximilian Schwarzmüller](https://www.udemy.com/course/the-complete-guide-to-angular-2/):**
    - This course, although I have yet to complete it provided a basic understanding of Angular, including component communication and dynamic class management, which were instrumental in implementing the dark mode feature.

### Final Thoughts
By combining these resources, I was able to implement a basic dark mode feature that functions effectively but still requires refinement. One key area for improvement is ensuring the dark mode state persists when navigating between routes. Currently, when the route changes (e.g., from `localhost:4200/web/` to another route), the boolean variable controlling the dynamic CSS class allocation using `ngClass` resets to its default light mode, even if dark mode was active prior to the route change.

I suspect this behavior occurs because the page component is re-rendered during navigation, causing the component's state (including the boolean variable) to be re-initialized. To address this, I plan to research and implement a solution to persist the dark mode state. A promising approach might involve using a shared Angular service to store and manage the state globally, ensuring it remains consistent across routes. While I am not yet an expert in Angular, I am confident that further exploration and practice will help me refine this feature.

### Tool/Technology 2: **Mockito and advanced unit testing**

#### Aspects Learned

1. **Argument Matchers and Primitive vs. Boxed Types**  
   One thing that really stood out to me while working with Mockito was how it handles **primitive vs. boxed types**. I always assumed that since `Boolean` is just the boxed version of `boolean`, their argument matchers would behave the same way. However, I discovered that:
   - `anyBoolean()` works for both `boolean` and `Boolean`, but `any(Boolean.class)` only works for `Boolean`.
   - This small but crucial difference helped me understand why some of my test cases weren’t behaving as expected.

2. **Handling Null Values in Argument Matchers**  
   Another unexpected challenge was that `any()` **does not match `null` values**. I initially thought `any()` would work universally, but my tests kept failing when `null` was passed in. After some research, I found that I needed to use **`nullable(UUID.class)`** instead. This was an important learning moment because it made me more aware of how Mockito’s matchers handle `null` values differently.

3. **Verifying Method Calls**  
   I also gained a deeper understanding of **method verification** in Mockito.
   - To check if a method was called a specific number of times, I can use:
     ```java
     verify(mockObject, times(n)).methodToBeTested();
     ```
   - `times(1)` ensures the method was called exactly once, while `never()`, `atLeastOnce()`, and `atMost(n)` give more flexibility in defining expected call frequency.
   - I used to take method verification for granted, but now I see how powerful it can be for ensuring the correct interactions in my tests.

4. **Difference Between `mock()` and `spy()`**

   I decided to dive deeper into stubbing with mockito which led me to learn more about the difference between `mock()` and `spy()`.
   - `mock(Class.class)`: Creates a mock object that does **not** execute real method logic.
   - `spy(object)`: Creates a partial mock where real methods are called unless stubbed.
   - Although I'm not using spies now in TEAMMATES, I’ll need to be mindful of them in future projects, as unstubbed methods execute normally and can unexpectedly impact tests.

#### Resources Used and Summary

1. **[Mockito Official Documentation](https://site.mockito.org/):**
   - This was my go-to reference for understanding Mockito’s features, especially argument matchers and verification techniques.

2. **[Mockito Series written by baeldung](https://www.baeldung.com/mockito-series):**
   - Baeldung's examples helped me bridge the gap between learning individual Mockito features and applying them in real-world testing scenarios.

### Final Thoughts

Working with Mockito has made me more confident in writing unit tests. I also gained a much deeper appreciation for argument matchers and null handling. Learning that `any()` does not match null but `nullable(Class.class)` does was an unexpected but valuable insight. These small details can make or break test reliability, so I’m glad I encountered them early on.

Looking ahead, I aim to sharpen my Mockito skills by exploring advanced features like mocking final classes and static methods. I also plan to experiment further with `ArgumentCaptor`, as it offers a more structured approach to inspecting method arguments in tests.

Mockito has already helped me write more effective and maintainable unit tests, and I’m excited to continue improving my testing skills with its advanced features!

### Tool/Technology 3: **E2E testing with Seleinum**

#### Aspects Learned

1. **Simulating User Workflows with Selenium**  
   While writing E2E tests for `InstructorFeedbackEditPageE2ETest`, I got hands-on experience with simulating real user actions using **Selenium**—like clicking buttons, selecting dropdowns, and filling text fields.
   - It gave me a better understanding of how an app is used from a user’s point of view, and how to verify behavior **from the outside in**, rather than relying on internal implementation.

2. **Using the Page Object Pattern for Maintainability**  
   One of the standout aspects of TEAMMATES’ E2E testing architecture is its use of the **Page Object Pattern**.
   - I interacted with `InstructorFeedbackEditPage` which abstracts user interactions like `editSessionDetails()`, `copyQuestion()`, and `deleteQuestion()` into easy-to-read methods.
   - This helped me avoid brittle selectors in test code and focus purely on the behavior under test. I now better appreciate why decoupling UI structure from test logic improves maintainability.

3. **End-to-End Testing Mindset**  
   E2E testing forces a shift in mindset: instead of testing small functions, I had to think of **user workflows**.
   - For example, in `InstructorFeedbackEditPageE2ETest`, I verified the flow from editing session settings to saving and checking if the changes persisted.
   - It taught me to balance **test coverage vs. cost**, as E2E tests are more expensive to run and maintain than unit tests. That’s why I learned to focus on **happy paths** and **common exceptions**, while leaving edge cases to unit/integration testing.

#### Resources Used and Summary

1. **TEAMMATES Developer Guide - E2E Testing Section**
   - This was my main reference to understand how TEAMMATES structures E2E tests, and how Selenium interacts with page objects.

2. **Selenium Official Documentation**
   - Helped me learn proper techniques to interact with web elements and handle dynamic UI changes using `waits`, `findElement`, and `actions`.

3. **InstructorFeedbackEditPage and Existing Tests in TEAMMATES Codebase**
   - Studying similar E2E test files gave me reusable patterns for structuring assertions, handling browser context switching, and organizing test logic.

### Final Thoughts

Working on this E2E test taught me how to **write robust, user-centered tests** that are maintainable and comprehensive. I no longer see E2E testing as just UI clicking automation — it's about capturing workflows, ensuring frontend-backend consistency, and protecting critical paths of the app from regression.

Going forward, I’m keen to improve by writing utility methods for repetitive test actions and exploring more advanced Selenium features like headless browser testing and parallel test execution. TEAMMATES' architecture gave me a solid foundation to grow as a test writer and as a software engineer overall.
