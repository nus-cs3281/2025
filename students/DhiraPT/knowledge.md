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

- **Static Mocking:**

  Mockito allows mocking static methods using `MockedStatic<T>`, which is useful when working with utility classes or framework methods that are difficult to inject as dependencies.

  - Syntax:
    ```java
    try (MockedStatic<ClassName> mockStaticInstance = mockStatic(ClassName.class)) {
        mockStaticInstance.when(ClassName::staticMethod).thenReturn(mockedValue);

        // Call the static method
        ReturnType result = ClassName.staticMethod();

        // Verify the static method was called
        mockStaticInstance.verify(ClassName::staticMethod, times(1));
    }
    ```

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


### Tool/Technology 2: Objectify and Jakarta Persistence (JPA)

#### Aspects Learned

- **Objectify for Google Cloud Datastore (NoSQL):**

  **Objectify** is a lightweight Java library that simplifies working with **Google Cloud Datastore**, a NoSQL database.
  It provides easy-to-use annotations for mapping Java objects to Datastore entities, while also supporting schema evolution.

  Key Features:

  - **@Entity**: Marks a class as an entity that will be stored in Datastore.

  - **@Id**: Defines the primary key for the entity.

  - **@Index**: Defines a Datastore index for a property to optimize querying. This annotation allows specifying custom indexing rules for properties that will be queried frequently.

  - **@Load**: An annotation for lazy-loading data, allowing entities to be loaded only when needed, improving efficiency when handling large datasets.

  - **@AlsoLoad**: Maps a field to a different property name in Datastore, useful for schema evolution.

  Example:

  ```java
  @Entity
  public class Course {
      @Id
      private Long id;
  
      @Index
      @AlsoLoad("course_name")
      private String name;

      // Constructors, getters, setters...
  }
  ```

  Fetching an entity:

  ```java
  Course course = objectify.load().type(Course.class).id(courseId).now();
  ```

- **Jakarta Persistence (JPA) for Relational Databases:**

  **Jakarta Persistence (JPA)** is the standard Java API for Object-Relational Mapping (ORM), used for storing Java objects in relational databases such as PostgreSQL.
  It provides annotations to define how Java objects map to SQL tables and how relationships between entities are managed.

  Key Features:

  - **@Entity**: Defines a persistent Java object.

  - **@Table**: Defines the table in the database that the entity will be mapped to. By default, the table name will be the same as the entity class name, but the `@Table` annotation allows you to specify a different table name.

  - **@Id**: Marks the field as the primary key of the entity.

  - **@GeneratedValue**: Specifies the strategy for auto-generating the primary key (e.g., `GenerationType.IDENTITY`, `GenerationType.AUTO`).

  - **@Column**: Maps a field to a specific column in the database table. It allows specifying additional attributes like column name, nullable, unique constraints, and default values.

  - **@OneToMany, @ManyToOne, @ManyToMany**: Establishes relationships between entities.

  - **@JoinColumn**: Specifies the column used for joining tables in relationships. This is often used with `@ManyToOne` and `@OneToMany` annotations to define the foreign key.

  Example:

  ```java
  @Entity
  @Table(name = "students")
  public class Student {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

      @Column(name = "student_name", nullable = false)
      private String name;
  
      @Column(name = "email", unique = true)
      private String email;

      // Constructors, getters, setters...
  }
  ```

  Fetching an entity:

  ```java
  Student student = entityManager.find(Student.class, studentId);
  ```

#### Resources

- [Objectify Documentation](https://github.com/objectify/objectify/wiki/)

  - A comprehensive guide to using Objectify for Google Cloud Datastore.

- [Jakarta Persistence Documentation](https://jakartaee.github.io/persistence/latest/draft.pdf)

  - The official Jakarta Persistence specification.

#### Conclusion

In my experience with Objectify and Jakarta Persistence, I learned how to map Java objects to Datastore entities and relational database tables, respectively.
I was working on standardizing naming conventions for variables and had to modify Java variable names and change the entity/SQL entity names.
One of my mentors pointed out that without using the correct annotations, mismatched entity or column names between the code and the actual database schema could lead to errors.
To address this, I utilized annotations like `@AlsoLoad("oldName")` and `@Column(nullable = false, name = "<COLUMN_NAME>")` to ensure proper mapping of fields to database columns and to avoid potential issues.
Understanding and applying these annotations correctly was key for me in preventing errors and ensuring smooth database operations.


### Tool/Technology 3: Selenium with Java

#### Aspects Learned

- **Selenium WebDriver Basics:**

  Selenium is a powerful tool for automating web applications for testing purposes. It provides a simple API to interact with web elements, simulating user actions like clicking buttons, entering text, and navigating through pages.

  - **WebDriver**: The main interface for controlling the browser. It allows me to create an instance of a browser (like Chrome or Firefox) and perform actions on it.

  - **Locators**: Selenium provides various ways to locate elements on a webpage, including:
    - `By.id()`: Locates an element by its ID.
    - `By.name()`: Locates an element by its name attribute.
    - `By.className()`: Locates an element by its class name.
    - `By.tagName()`: Locates an element by its tag name.
    - `By.linkText()`: Locates a link by its visible text.
    - `By.partialLinkText()`: Locates a link by part of its visible text.
    - `By.cssSelector()`: Locates an element using CSS selectors.
    - `By.xpath()`: Locates an element using XPath expressions.

  Example:

  ```java
  WebDriver driver = new ChromeDriver();
  driver.get("https://example.com");
  WebElement element = driver.findElement(By.id("elementId"));
  element.click();
  ```

- **Implicit and Explicit Waits:**

  Selenium provides mechanisms to handle dynamic content loading on web pages.

  - **Implicit Wait**: Sets a default wait time for the WebDriver to poll the DOM for a certain period when trying to find an element. It applies to all elements in the test.

    ```java
    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    ```

  - **Explicit Wait**: Allows me to wait for a specific condition to occur before proceeding. It is more flexible and can be applied to specific elements.

    ```java
    WebDriverWait wait = new WebDriverWait(driver, 10);
    WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementId")));
    ```

- **Page Object Model (POM):**

  The Page Object Model is a design pattern that enhances test maintainability and readability by creating a separate class for each page of the application. Each class contains methods that represent actions that can be performed on that page.

  Example:
    
  ```java
  public class LoginPage {
      private WebDriver driver;
  
      @FindBy(id = "username")
      private WebElement usernameField;
  
      @FindBy(id = "password")
      private WebElement passwordField;
  
      @FindBy(id = "loginButton")
      private WebElement loginButton;
  
      public LoginPage(WebDriver driver) {
          this.driver = driver;
          PageFactory.initElements(driver, this);
      }
  
      public void login(String username, String password) {
          usernameField.sendKeys(username);
          passwordField.sendKeys(password);
          loginButton.click();
      }
  }
  ```
  
  - **Advantages**:
    - Improved code organization and readability.
    - Easier maintenance: If the UI changes, I only need to update the page object class instead of every test case.
    - Reusability: I can reuse page object methods across multiple test cases.

#### Resources

- [Selenium Official Documentation](https://www.selenium.dev/documentation/)

  - Official documentation for Selenium, including guides and API references.

#### Conclusion

I learned how to use Selenium when trying to understand the existing E2E test code.
It is definitely a powerful tool for automating web applications and testing.
