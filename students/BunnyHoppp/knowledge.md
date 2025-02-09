### Tool/Technology 1 : *Mockito*

#### Aspects Learnt:

- Mockito is a mocking framework for unit tests to mock dependencies. 
- One interesting thing about Mockito is that it can be used to reduce dependencies by creating test stubs of certain classes.
  - For instance, the Logic class is stubbed using `mock()`, creating a test stub for `Logic`.
- Mockito has `when()` that allows you to specify a `return object` using `thenReturn()` without running the actual method. This can reduce the chances of any bugs from dependencies affecting the unit test.
- Mockito has `verify()` that allows you to verify if a certain method call has been made. I think this helps greatly in debugging especially in a large code base.

#### Resources used:

- I used the original [documentation](https://site.mockito.org/) to learn  how it runs.
- Overall, the documentation helps with what the method does, but I had to test out what they mean using the test cases that I am working on to test the result
  - For instance, I only realised that using `when()` does not call the actual method itself.