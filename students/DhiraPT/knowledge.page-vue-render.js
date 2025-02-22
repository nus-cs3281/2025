
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"tool-technology-1-mockito"}},[_v("Tool/Technology 1: Mockito"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-1-mockito","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"aspects-learned"}},[_v("Aspects Learned"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects-learned","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Stubbing Methods with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("when(...).thenReturn(...)")]),_v(":")])]),_v(" "),_c('p',[_v("I learned that this technique lets me define fixed return values for specific method calls. I can instruct Mockito to return a predetermined value when a certain method is invoked with given arguments.\nBy stubbing methods with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenReturn()")]),_v(", I isolate the class under test from its real dependencies. For example, if my code calls:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("Course course = mockLogic.getCourse(course.getId());\n")])])]),_c('p',[_v("I can specify:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("when(mockLogic.getCourse(course.getId())).thenReturn(expectedCourse);\n")])])]),_c('p',[_v("This approach ensures that the tests only focus on the behavior of the class under test without relying on actual implementations or external systems like databases or service layers.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Simulating State Changes Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer(...)")]),_v(":")])]),_v(" "),_c('p',[_v("One of the most powerful techniques I learned was using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(" to simulate side effects and state changes. This method enables me to dynamically alter the behavior of mocked methods based on actions performed within the test.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Syntax:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("doAnswer(invocation -> {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Custom logic to simulate a side effect or state change")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("}).when(mockLogic).someMethod(...);\n")])])])]),_v(" "),_c('li',[_c('p',[_v("This technique is especially helpful when my method under test changes the state of its dependencies. For example, when simulating the deletion of an instructor, I can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(" so that subsequent calls (such as fetching the instructor by email) return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v("—mirroring the real-life behavior after deletion.")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Advanced Stubbing Techniques with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenAnswer()")]),_v(":")])]),_v(" "),_c('p',[_v("In addition to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(", I learned how to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenAnswer()")]),_v(" to provide dynamic responses based on the input parameters of the method call. This custom Answer implementation allows for:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Syntax:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("when(mockLogic.someMethod(...)).thenAnswer(invocation -> {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Custom logic to compute and return a value based on the invocation")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ...")]),_v("\n")]),_c('span',[_v("});\n")])])])]),_v(" "),_c('li',[_c('p',[_v("This method is ideal when I need the stub to return a value that depends on the input. It adds flexibility to my tests, especially when I want my mocked method to behave differently based on its argument.")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Mocks vs. Spies:")]),_c('br'),_v("\nI learned that the key difference is:")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Mocks")]),_v(": Mockito creates a bare-bones instance of the class where every method returns default values (like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0")]),_v(", or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("false")]),_v(") unless explicitly stubbed.")]),_v(" "),_c('li',[_c('strong',[_v("Spies")]),_v(": A spy wraps a real object. By default, a spy calls the actual methods of the object while allowing me to override specific methods if needed.")])]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Mocks")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("List<String> mockedList = mock(ArrayList.class);\n")]),_c('span',[_v("mockedList.add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("verify(mockedList).add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v(", mockedList.size());  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Returns default value 0 because it’s fully stubbed.")]),_v("\n")])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Spies")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("List<String> realList = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" ArrayList<>();\n")]),_c('span',[_v("List<String> spyList = spy(realList);\n")]),_c('span',[_v("\n")]),_c('span',[_v("spyList.add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("verify(spyList).add("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"item\"")]),_v(");\n")]),_c('span',[_v("assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(", spyList.size());  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Now size() returns 1 because the real method is called.")]),_v("\n")])])])])]),_v(" "),_c('p',[_v("When to Use Each:")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Mocks")]),_v(": I use a mock when I want to completely isolate my class under test from its dependencies.")]),_v(" "),_c('li',[_c('strong',[_v("Spies")]),_v(": I choose a spy when I need most of the real behavior of an object but want to override one or two methods.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Advanced Verification Techniques:")])]),_v(" "),_c('p',[_v("Mockito’s advanced verification APIs allow me to check that the correct interactions occur between my class under test and its dependencies—not just that methods were called, but also that they were called in the right order and the correct number of times.")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Call Order Verification")]),_v(": Using Mockito’s InOrder API to verify that methods were called in a specific sequence."),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("InOrder inOrder = inOrder(mockLogic);\n")]),_c('span',[_v("inOrder.verify(mockLogic).startTransaction();\n")]),_c('span',[_v("inOrder.verify(mockLogic).executeQuery(anyString());\n")]),_c('span',[_v("inOrder.verify(mockLogic).commitTransaction();\n")])])])]),_v(" "),_c('li',[_c('strong',[_v("Invocation Count Verification")]),_v(": Applying verification modes like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("times()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("atLeast()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("atMost()")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("never()")]),_v(" to assert the precise number of method invocations."),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("verify(mockLogic, times("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(")).processData(any());\n")]),_c('span',[_v("verify(mockLogic, never()).handleError(any());\n")])])])])]),_v(" "),_c('p',[_v("These techniques are crucial when the order and frequency of interactions are essential for the correctness of the code, ensuring that the tested methods not only produce the right results but also follow the intended flow.")])])]),_v(" "),_c('h4',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://site.mockito.org/"}},[_v("Mockito Official Website")]),_v(" "),_c('ul',[_c('li',[_v("A reference for exploring and understanding the framework’s capabilities and best practices.")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-series/"}},[_v("Baeldung Mockito Series")]),_v(" "),_c('ul',[_c('li',[_v("Additional tutorials that provide further insights.")])])])]),_v(" "),_c('h4',{attrs:{"id":"conclusion"}},[_v("Conclusion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#conclusion","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learned these Mockito techniques mainly during the migration of our tests from our previous datastore to Google Cloud PostgreSQL.\nThe new test classes required a robust mocking framework, so I leveraged a combination of fixed-value stubbing with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("when(...).thenReturn(...)")]),_v(", dynamic behavior simulation with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("doAnswer()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenAnswer()")]),_v(", and careful selection between mocks and spies.\nThis approach enabled me to write unit tests that are both targeted and reliable.\nAlthough I did not extensively use advanced verification techniques during the migration, I appreciate the potential they offer for validating interactions between components.\nThese insights have been essential for developing robust tests, and I look forward to applying them in future projects.")]),_v(" "),_c('h3',{attrs:{"id":"tool-technology-2"}},[_v("Tool/Technology 2"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("...")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")])]),_v(" on Sat, 22 Feb 2025, 23:56:14 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  