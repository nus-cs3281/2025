
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"tool-technology-1-mockito"}},[_v("Tool/Technology 1: Mockito"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-1-mockito","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"aspects-learned"}},[_v("Aspects Learned"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects-learned","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Stubbing Methods with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("when(...).thenReturn(...)")]),_v(":")])]),_v(" "),_c('p',[_v("I learned that this technique lets me define fixed return values for specific method calls. I can instruct Mockito to return a predetermined value when a certain method is invoked with given arguments.\nBy stubbing methods with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenReturn()")]),_v(", I isolate the class under test from its real dependencies. For example, if my code calls:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("Course course = mockLogic.getCourse(course.getId());\n")])])]),_c('p',[_v("I can specify:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("when(mockLogic.getCourse(course.getId())).thenReturn(expectedCourse);\n")])])]),_c('p',[_v("This approach ensures that the tests only focus on the behavior of the class under test without relying on actual implementations or external systems like databases or service layers.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Simulating State Changes Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer(...)")]),_v(":")])]),_v(" "),_c('p',[_v("One of the most powerful techniques I learned was using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(" to simulate side effects and state changes. This method enables me to dynamically alter the behavior of mocked methods based on actions performed within the test.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Syntax:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("doAnswer(invocation -> {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Custom logic to simulate a side effect or state change")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("}).when(mockLogic).someMethod(...);\n")])])])]),_v(" "),_c('li',[_c('p',[_v("This technique is especially helpful when my method under test changes the state of its dependencies. For example, when simulating the deletion of an instructor, I can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(" so that subsequent calls (such as fetching the instructor by email) return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v("—mirroring the real-life behavior after deletion.")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Advanced Stubbing Techniques with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenAnswer()")]),_v(":")])]),_v(" "),_c('p',[_v("In addition to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(", I learned how to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenAnswer()")]),_v(" to provide dynamic responses based on the input parameters of the method call. This custom Answer implementation allows for:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Syntax:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("when(mockLogic.someMethod(...)).thenAnswer(invocation -> {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Custom logic to compute and return a value based on the invocation")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("});\n")])])])]),_v(" "),_c('li',[_c('p',[_v("This method is ideal when I need the stub to return a value that depends on the input. It adds flexibility to my tests, especially when I want my mocked method to behave differently based on its argument.")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Mocks vs. Spies:")])]),_v(" "),_c('p',[_v("I learned that the key difference is:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Mocks")]),_v(": Mockito creates a bare-bones instance of the class where every method returns default values (like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(", or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("false")]),_v(") unless explicitly stubbed.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Spies")]),_v(": A spy wraps a real object. By default, a spy calls the actual methods of the object while allowing me to override specific methods if needed.")])])]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Mocks")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("List<String> mockedList = mock(ArrayList.class);\n")]),_c('span',[_v("mockedList.add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("verify(mockedList).add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v(", mockedList.size());  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Returns default value 0 because it’s fully stubbed.")]),_v("\n")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Spies")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("List<String> realList = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" ArrayList<>();\n")]),_c('span',[_v("List<String> spyList = spy(realList);\n")]),_c('span',[_v("\n")]),_c('span',[_v("spyList.add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("verify(spyList).add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(", spyList.size());  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Now size() returns 1 because the real method is called.")]),_v("\n")])])])])]),_v(" "),_c('p',[_v("When to Use Each:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Mocks")]),_v(": I use a mock when I want to completely isolate my class under test from its dependencies.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Spies")]),_v(": I choose a spy when I need most of the real behavior of an object but want to override one or two methods.")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Static Mocking:")])]),_v(" "),_c('p',[_v("Mockito allows mocking static methods using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MockedStatic<T>")]),_v(", which is useful when working with utility classes or framework methods that are difficult to inject as dependencies.")]),_v(" "),_c('ul',[_c('li',[_v("Syntax:"),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("try")]),_v(" (MockedStatic<ClassName> mockStaticInstance = mockStatic(ClassName.class)) {\n")]),_c('span',[_v("    mockStaticInstance.when(ClassName::staticMethod).thenReturn(mockedValue);\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Call the static method")]),_v("\n")]),_c('span',[_v("    ReturnType result = ClassName.staticMethod();\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Verify the static method was called")]),_v("\n")]),_c('span',[_v("    mockStaticInstance.verify(ClassName::staticMethod, times("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v("));\n")]),_c('span',[_v("}\n")])])])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Advanced Verification Techniques:")])]),_v(" "),_c('p',[_v("Mockito’s advanced verification APIs allow me to check that the correct interactions occur between my class under test and its dependencies—not just that methods were called, but also that they were called in the right order and the correct number of times.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Call Order Verification")]),_v(": Using Mockito’s InOrder API to verify that methods were called in a specific sequence.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("InOrder inOrder = inOrder(mockLogic);\n")]),_c('span',[_v("inOrder.verify(mockLogic).startTransaction();\n")]),_c('span',[_v("inOrder.verify(mockLogic).executeQuery(anyString());\n")]),_c('span',[_v("inOrder.verify(mockLogic).commitTransaction();\n")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Invocation Count Verification")]),_v(": Applying verification modes like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("times()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("atLeast()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("atMost()")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("never()")]),_v(" to assert the precise number of method invocations.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("verify(mockLogic, times("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(")).processData(any());\n")]),_c('span',[_v("verify(mockLogic, never()).handleError(any());\n")])])])])]),_v(" "),_c('p',[_v("These techniques are crucial when the order and frequency of interactions are essential for the correctness of the code, ensuring that the tested methods not only produce the right results but also follow the intended flow.")])])]),_v(" "),_c('h4',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://site.mockito.org/"}},[_v("Mockito Official Website")])]),_v(" "),_c('ul',[_c('li',[_v("A reference for exploring and understanding the framework’s capabilities and best practices.")])])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-series/"}},[_v("Baeldung Mockito Series")])]),_v(" "),_c('ul',[_c('li',[_v("Additional tutorials that provide further insights.")])])])]),_v(" "),_c('h4',{attrs:{"id":"conclusion"}},[_v("Conclusion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#conclusion","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learned these Mockito techniques mainly during the migration of our tests from our previous datastore to Google Cloud PostgreSQL.\nThe new test classes required a robust mocking framework, so I leveraged a combination of fixed-value stubbing with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("when(...).thenReturn(...)")]),_v(", dynamic behavior simulation with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenAnswer()")]),_v(", and careful selection between mocks and spies.\nThis approach enabled me to write unit tests that are both targeted and reliable.\nAlthough I did not extensively use advanced verification techniques during the migration, I appreciate the potential they offer for validating interactions between components.\nThese insights have been essential for developing robust tests, and I look forward to applying them in future projects.")]),_v(" "),_c('h3',{attrs:{"id":"tool-technology-2-objectify-and-jakarta-persistence-jpa"}},[_v("Tool/Technology 2: Objectify and Jakarta Persistence (JPA)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-2-objectify-and-jakarta-persistence-jpa","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"aspects-learned-2"}},[_v("Aspects Learned"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects-learned-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Objectify for Google Cloud Datastore (NoSQL):")])]),_v(" "),_c('p',[_c('strong',[_v("Objectify")]),_v(" is a lightweight Java library that simplifies working with "),_c('strong',[_v("Google Cloud Datastore")]),_v(", a NoSQL database.\nIt provides easy-to-use annotations for mapping Java objects to Datastore entities, while also supporting schema evolution.")]),_v(" "),_c('p',[_v("Key Features:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("@Entity")]),_v(": Marks a class as an entity that will be stored in Datastore.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@Id")]),_v(": Defines the primary key for the entity.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@Index")]),_v(": Defines a Datastore index for a property to optimize querying. This annotation allows specifying custom indexing rules for properties that will be queried frequently.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@Load")]),_v(": An annotation for lazy-loading data, allowing entities to be loaded only when needed, improving efficiency when handling large datasets.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@AlsoLoad")]),_v(": Maps a field to a different property name in Datastore, useful for schema evolution.")])])]),_v(" "),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Entity")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Course")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Id")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Long id;\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Index")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@AlsoLoad(\"course_name\")")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" String name;\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Constructors, getters, setters...")]),_v("\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Fetching an entity:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("Course course = objectify.load().type(Course.class).id(courseId).now();\n")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Jakarta Persistence (JPA) for Relational Databases:")])]),_v(" "),_c('p',[_c('strong',[_v("Jakarta Persistence (JPA)")]),_v(" is the standard Java API for Object-Relational Mapping (ORM), used for storing Java objects in relational databases such as PostgreSQL.\nIt provides annotations to define how Java objects map to SQL tables and how relationships between entities are managed.")]),_v(" "),_c('p',[_v("Key Features:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("@Entity")]),_v(": Defines a persistent Java object.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@Table")]),_v(": Defines the table in the database that the entity will be mapped to. By default, the table name will be the same as the entity class name, but the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Table")]),_v(" annotation allows you to specify a different table name.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@Id")]),_v(": Marks the field as the primary key of the entity.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@GeneratedValue")]),_v(": Specifies the strategy for auto-generating the primary key (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GenerationType.IDENTITY")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GenerationType.AUTO")]),_v(").")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@Column")]),_v(": Maps a field to a specific column in the database table. It allows specifying additional attributes like column name, nullable, unique constraints, and default values.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@OneToMany, @ManyToOne, @ManyToMany")]),_v(": Establishes relationships between entities.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("@JoinColumn")]),_v(": Specifies the column used for joining tables in relationships. This is often used with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@ManyToOne")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@OneToMany")]),_v(" annotations to define the foreign key.")])])]),_v(" "),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Entity")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Table(name = \"students\")")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Student")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Id")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@GeneratedValue(strategy = GenerationType.IDENTITY)")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Long id;\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Column(name = \"student_name\", nullable = false)")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" String name;\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Column(name = \"email\", unique = true)")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" String email;\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Constructors, getters, setters...")]),_v("\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Fetching an entity:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("Student student = entityManager.find(Student.class, studentId);\n")])])])])]),_v(" "),_c('h4',{attrs:{"id":"resources-2"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/objectify/objectify/wiki/"}},[_v("Objectify Documentation")])]),_v(" "),_c('ul',[_c('li',[_v("A comprehensive guide to using Objectify for Google Cloud Datastore.")])])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://jakartaee.github.io/persistence/latest/draft.pdf"}},[_v("Jakarta Persistence Documentation")])]),_v(" "),_c('ul',[_c('li',[_v("The official Jakarta Persistence specification.")])])])]),_v(" "),_c('h4',{attrs:{"id":"conclusion-2"}},[_v("Conclusion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#conclusion-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In my experience with Objectify and Jakarta Persistence, I learned how to map Java objects to Datastore entities and relational database tables, respectively.\nI was working on standardizing naming conventions for variables and had to modify Java variable names and change the entity/SQL entity names.\nOne of my mentors pointed out that without using the correct annotations, mismatched entity or column names between the code and the actual database schema could lead to errors.\nTo address this, I utilized annotations like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@AlsoLoad(\"oldName\")")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Column(nullable = false, name = \"<COLUMN_NAME>\")")]),_v(" to ensure proper mapping of fields to database columns and to avoid potential issues.\nUnderstanding and applying these annotations correctly was key for me in preventing errors and ensuring smooth database operations.")]),_v(" "),_c('h3',{attrs:{"id":"tool-technology-3"}},[_v("Tool/Technology 3"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("...")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Fri, 14 Mar 2025, 13:50:34 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  