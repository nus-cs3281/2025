## Angular and Frontend

List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.

### Aspects Learnt

##### Components
Coming from a React background, it was interesting to understand how Angular components work and how it talks to each other. A lot of the features are built in with their custom names like ```ngFor``` and ```(click)``` as compared to using JSX. It was very modular in nature which made the learning easier as I can focus on one component without having to break the rest or needing to learn the codebase of more than the surrounding components.

##### Observables
Angular uses a lot more of observables, emittors and listeners which is based on services to communicate between components. It was very different from React Redux and parent-child that I know of. This was what I had to make use of for one of my first [PRs #13203](https://github.com/TEAMMATES/teammates/pull/13203) to deal with dynamic child components listening to a hide/show all button.

### Resources Used

<strong>[Angular Crash Course by Traversy Media](https://www.youtube.com/watch?v=3dHNOWTI7H8)</strong>: A crash course for learning how Angular works for developers with some frontend experience. It covers the basics of Angular, including components, services, and routing.

## Testing and Mockito

### Aspects Learnt

##### Mocking functions
The use of ```when()``` was rather cool for me coming from JUnit and CS2103T. I did not expect to be able to mock functions and their return values. ```when()``` overrides a function call when that provided function is called, and returns the values given with chain functions. It allows me to perform unit tests much more easily as we do not need to worry about the implementation of the method being complete.

### Resources Used
<strong>[Mockito Documentation](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html)</strong>: Official documentation for Mockito

## Docker

### Aspects Learnt

##### Containerised Applications
This was my first time using Docker and it made development much easier by containing our backend in its own sandbox environment. It keeps the application standardised by running on one type of environment and ensures smooth development by not worrying about multiple types of environment to cater and develop for during production.
...