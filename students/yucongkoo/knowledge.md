### NVM (Node Version Manager)

Issue faced: CATcher uses node v16.x while WATcher uses node v14.x, it is hard to switch between node versions quickly when working on both projects

Tool used: Used nvm to easily manage and switch between different node versions locally

### Angular

#### Components and Modules

A typical component in Angular consists of 3 files:

- A html file that defines the layout of the component
- A css file that provides styling to the UI
- A typescript file that controls the logic and behaviour of the application, typically handles the data of the application too

Each component can have a module file where we can state the components/modules that this component is dependent on (i.e. the imports array) and the components that is provided by this module (i.e. the declarations array). This helps increasing the modularity and scalability of the whole application.

As a developer coming from React, here are some clear differences I have observed:

- There is no concept of states in Angular and the data passing is 2-ways, when the user updates from the UI, the value is automatically updated in the component and vice versa, whereas in React we would have to use states and explicitly update the states via setState or similar functions.
- Instead of defining the layout of componenet and logic in the same file, Angular split them into 2 seperate files (i.e. the html and typescript file), personally I felt that this split helps enforce the MVC architecture more strictly, but also imposes more restrictions when it comes to components that have tightly coupled logic
