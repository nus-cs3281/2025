### Tool/Technology 1: Mockito

#### Aspects Learned

- **Stubbing Methods with `when(...).thenReturn(...)`:**

  I learned that this technique lets me define fixed return values for specific method calls. I can instruct Mockito to return a predetermined value when a certain method is invoked with given arguments.
  By stubbing methods with `thenReturn()`, I isolate the class under test from its real dependencies. For example, if my code calls:

  ```java
  Course course = mockLogic.getCourse(course.getId());
  ```

  I can specify:

  ```java
  when(mockLogic.getCourse(course.getId())).thenReturn(expectedCourse);
  ```

  This approach ensures that the tests only focus on the behavior of the class under test without relying on actual implementations or external systems like databases or service layers.

- **Simulating State Changes Using `doAnswer(...)`:**

  One of the most powerful techniques I learned was using `doAnswer()` to simulate side effects and state changes. This method enables me to dynamically alter the behavior of mocked methods based on actions performed within the test.

  - Syntax:
    ```java
    doAnswer(invocation -> {
        // Custom logic to simulate a side effect or state change
        // ...
    }).when(mockLogic).someMethod(...);
    ```

  - This technique is especially helpful when my method under test changes the state of its dependencies. For example, when simulating the deletion of an instructor, I can use `doAnswer()` so that subsequent calls (such as fetching the instructor by email) return `null`—mirroring the real-life behavior after deletion.

- **Advanced Stubbing Techniques with `thenAnswer()`:**

  In addition to `doAnswer()`, I learned how to use `thenAnswer()` to provide dynamic responses based on the input parameters of the method call. This custom Answer implementation allows for:

  - Syntax:
    ```java
    when(mockLogic.someMethod(...)).thenAnswer(invocation -> {
        // Custom logic to compute and return a value based on the invocation
        // ...
    });
    ```

  - This method is ideal when I need the stub to return a value that depends on the input. It adds flexibility to my tests, especially when I want my mocked method to behave differently based on its argument.

- **Mocks vs. Spies:**  
  I learned that the key difference is:

  - **Mocks**: Mockito creates a bare-bones instance of the class where every method returns default values (like `null`, `0`, or `false`) unless explicitly stubbed.
  - **Spies**: A spy wraps a real object. By default, a spy calls the actual methods of the object while allowing me to override specific methods if needed.

  Examples:
  - **Mocks**:
    ```java
    List<String> mockedList = mock(ArrayList.class);
    mockedList.add("item");
    verify(mockedList).add("item");
    assertEquals(0, mockedList.size());  // Returns default value 0 because it’s fully stubbed.
    ```

  - **Spies**:
    ```java
    List<String> realList = new ArrayList<>();
    List<String> spyList = spy(realList);
    
    spyList.add("item");
    verify(spyList).add("item");
    assertEquals(1, spyList.size());  // Now size() returns 1 because the real method is called.
    ```

  When to Use Each:

  - **Mocks**: I use a mock when I want to completely isolate my class under test from its dependencies.
  - **Spies**: I choose a spy when I need most of the real behavior of an object but want to override one or two methods.

- **Advanced Verification Techniques:**

  Mockito’s advanced verification APIs allow me to check that the correct interactions occur between my class under test and its dependencies—not just that methods were called, but also that they were called in the right order and the correct number of times.
  - **Call Order Verification**: Using Mockito’s InOrder API to verify that methods were called in a specific sequence.
    ```java
    InOrder inOrder = inOrder(mockLogic);
    inOrder.verify(mockLogic).startTransaction();
    inOrder.verify(mockLogic).executeQuery(anyString());
    inOrder.verify(mockLogic).commitTransaction();
    ```
  - **Invocation Count Verification**: Applying verification modes like `times()`, `atLeast()`, `atMost()`, and `never()` to assert the precise number of method invocations.
    ```java
    verify(mockLogic, times(2)).processData(any());
    verify(mockLogic, never()).handleError(any());
    ```

  These techniques are crucial when the order and frequency of interactions are essential for the correctness of the code, ensuring that the tested methods not only produce the right results but also follow the intended flow.

#### Resources
- [Mockito Official Website](https://site.mockito.org/)
  - A reference for exploring and understanding the framework’s capabilities and best practices.
- [Baeldung Mockito Series](https://www.baeldung.com/mockito-series/)
  - Additional tutorials that provide further insights.

#### Conclusion
I learned these Mockito techniques mainly during the migration of our tests from our previous datastore to Google Cloud PostgreSQL.
The new test classes required a robust mocking framework, so I leveraged a combination of fixed-value stubbing with `when(...).thenReturn(...)`, dynamic behavior simulation with `doAnswer()` and `thenAnswer()`, and careful selection between mocks and spies.
This approach enabled me to write unit tests that are both targeted and reliable.
Although I did not extensively use advanced verification techniques during the migration, I appreciate the potential they offer for validating interactions between components.
These insights have been essential for developing robust tests, and I look forward to applying them in future projects.


### Tool/Technology 2

...