## 1. Angular and Frontend

List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.

### Aspects Learnt

##### Components
Coming from a React background, it was interesting to understand how Angular components work and how it talks to each other. A lot of the features are built in with their custom names like ```ngFor``` and ```(click)``` as compared to using JSX. It was very modular in nature which made the learning easier as I can focus on one component without having to break the rest or needing to learn the codebase of more than the surrounding components.

##### Observables
Angular uses a lot more of observables, emittors and listeners which is based on services to communicate between components. It was very different from React Redux and parent-child that I know of. This was what I had to make use of for one of my first [PRs #13203](https://github.com/TEAMMATES/teammates/pull/13203) to deal with dynamic child components listening to a hide/show all button.

### Resources Used

<strong>[Angular Crash Course by Traversy Media](https://www.youtube.com/watch?v=3dHNOWTI7H8)</strong>: A crash course for learning how Angular works for developers with some frontend experience. It covers the basics of Angular, including components, services, and routing.

## 2. Unit Testing and Mockito

### Aspects Learnt

##### Mocking functions
The use of ```when()``` was rather cool for me coming from JUnit and CS2103T. I did not expect to be able to mock functions and their return values. ```when()``` overrides a function call when that provided function is called, and returns the values given with chain functions. It allows me to perform unit tests much more easily as we do not need to worry about the implementation of the method being complete. There are other functions like ```verify()```, ```doThrow()```, ```any()``` which I've learnt to use as well that are extremely helpful for migrating the unit tests. They help me check if a method was called, to throw exceptions when a method is called, and to check if the parameters passed in are of the correct type.

##### Masquerading
The idea of masquerading was new and unique to me. I would not have expected that Admins can masquerade as any user and perform actions as them. This was a very interesting concept that I had to learn about when migrating the unit tests. Understanding it allowed me to refactor the access controls better as there are a few unique cases of masquerading. One such was if Admins had no access to a certain action, they should not be able to masquerade as a user to perform that action. This was an issue I faced that took many hours to settle, as I needed to mock an entire new class as well just to check the inability to masquerade.

### Resources Used
<strong>[Mockito Documentation](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html)</strong>: Official documentation for Mockito

## 3. Docker

### Aspects Learnt

##### Containerised Applications
This was my first time using Docker and it made development much easier by containing our backend in its own sandbox environment. It keeps the application standardised by running on one type of environment and ensures smooth development by not worrying about multiple types of environment to cater and develop for during production.

## 4. E2E Testing with Selenium

### Aspects Learnt

##### E2E Testing
E2E testing was not a new concept for me, but it was the first time I had my hands wet with it. My part was to migrate the E2E tests from datastore to SQL. I learnt and understood how the data bundles from JSON was loaded, deleted and restored. I also learnt how to use the Selenium API to perform actions like retrieving, filling and waiting for elements to load and seeing the results live as Selenium does all the testing.

## Final Thoughts
After the course, I have definitely learned a lot of testing related things by migrating multiple unit and e2e test cases, refactoring access controls, and scratching my head solving complicated issues. I have also learnt a bit on Angular trying to add the show all/collapse all button for the student submission page. It taught me the importance of testing and how it should not be underestimated. Testing allowes us developers to surface hidden issues that we might not find ourselves as we test weird edge cases. The project has also allowed me to understand why big projects take so much longer than small personal projects. The large codebase of TEAMMATES, combined with the never ending amount of test cases creates for all the features, and balancing workload with other modules make contributing to the project a slow process, causing V9 of TEAMMATES to take so many years to develop. Looking into the future, I hope to continue contributing to TEAMMATES here and there before CS3282 starts so that V9 can be completed soon and we can move on to touching deeper into other parts of the codebase other than testing.