### Tool/Technology 1 : *Mockito*

#### Aspects Learnt:

- Mockito is a mocking framework for unit tests to mock dependencies. 
- One interesting thing about Mockito is that it can be used to reduce dependencies by creating test stubs of certain classes.
  - For instance, the Logic class is stubbed using `mock()`, creating a test stub for `Logic`.
- Mockito has `when()` that allows you to specify a `return object` using `thenReturn()` without running the actual method. This can reduce the chances of any bugs from dependencies affecting the unit test.
- Mockito has `verify()` that allows you to verify if a certain method call has been made. I think this helps greatly in debugging especially in a large code base.
- Mockito's `when()` requires the arguments of the method to mock to be specified, in some cases, we cannot pass in the arguments directly due to equality checks for the different objects, hence we can bypass that by using `any(<ClassName>.class)` where any argument of that class will trigger the mock method call.
- Mockito's `when()` allows you to throw `Exception.class` when you wish to mock the method to throw an exception. The method to mock throwing exceptions when the return type is not void is similar to `thenReturn()`, except we use `thenThrow`. But if the mocked method return type is void, then the way to do it is `doThrow(Exception.class).when(mockClass).add(anyString())`
  .add(anyString(), anyString());`

#### Resources used:

- I used the original [documentation](https://site.mockito.org/) to learn  how it runs.
- Overall, the documentation helps with what the method does, but I had to test out what they mean using the test cases that I am working on to test the result
  - For instance, I only realised that using `when()` does not call the actual method itself.

I learnt that Mocks and Stubs are both used in unit tests to reduce dependencies between classes during testing. I believe that Stubs are used in a way where we write some simplified classes that return exactly what we want from the other classes that have dependencies with the SUT. Whereas, Mocks are used to observe and verify the interactions between the SUTs and classes with dependencies, making it slightly different from Stubs.
I am not exactly sure of which is better in unit tests, and hopefully I can figure this out along the way.


### Tool/Technology 2 : *Selenium*

#### Aspects Learnt:

- Selenium is used to automate web applications for testing purposes.
- Selenium WebDrivers allow you to test the application on different browsers. Eg: Chrome, FireFox, Edge.
- Selenium is used to run our E2E Tests in Teammates, to ensure that all the integrated components of the application work together as expected when used by the end user.

#### Resources used:

- I used the original [documentation](https://www.selenium.dev/) to learn  how it runs.
- Overall, I had to set up the E2E tests locally, and run some E2E tests to learn how they work before writing new test cases.

Selenium is still a new tool for me and I hope to learn more as I write more E2E tests for Teammates.


### Final Thoughts

After the course, I first understood the importance of testing the software, both in isolated environments like unit tests as well as end-to-end tests to ensure that the entire system works as expected when all the classes are integrated. Testing is definitely not an easy task and it might take longer to write certain unit tests but these are all crucial to identifying bugs in the code. Before writing tests, we should first understand the behaviour of the SUT and expected outcomes, then we can easily write the tests and find bugs if there are any. Working with such a huge codebase, I noticed a huge level of abstraction even just in the tests and I believe that this is important in keeping the code clean and readable for new developers. I think that working on real world projects definitely helped to give a little push towards learning the different tools such as Docker, Selenium, Mockito. This is also a great introduction towards tools that are used in real projects, which can help me to consider the different tech stacks better for future projects.


