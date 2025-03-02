### Tool/Technology 1

#### Angular
Angular is the main tool used in both CATcher and WATcher. It is based on TypeScript.

Angular is a component-based framework.
Each component is generated with:
1. *.component.ts
2. *.component.html
3. *.component.css

Component state is maintained in the .ts file.  These state variables can be bound to HTML elements through use of curly braces \{\{}}.

Angular offers directives such as ngIf, ngFor that allow us to "use" JS in the HTML files.

Services are used for processing, for tasks that don't involve what the user sees. This is different from the .component file, which directly handles things the users see.
Services are kept in a separate directory /services/*.

Angular services can be "injected" into other services. This is done in the constructor. Once injected, the service can access of any the injected service methods.
But, it's important to not design the code in such a way that it causes a circular dependency. This was something I faced when implementing the presets, as the 
preset service relied on the filter service but the filter service also relied on the preset service. To fix it, we can redesign the code such that it doesn't
have this circular dependency or we can extract out the parts into a 3rd service that is then injected into both.


### Tool/Technology 2
RxJS

RxJS is the core component required for reactivity in Angular applications. It exposes the idea of "observables", and when the state of that observable changes,
it notifies any listeners attached to it.

Observables can be subscribed to and de-subscribed to at any time, using the .subscribe function. It is common practice to dennote observables as variables with
a trailing "$", for example `myObservable$`.

An observable is somewhat similar to a stream. We can register "stream processing functions" such as `map`, `filter`.

### Tool/Technology 3
Material Angular

Material Angular is the design library used by CATcher and WATcher. Unfortunately, it is currently using version 11, when the latest version is 19. Despite this,
most of the API is similar. 

Material Angular allows us to use pre-made components that follow the Material design style, allowing us to have a consistent and coherent UI experience. 


...