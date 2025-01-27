[//]: # (### Tool/Technology )

[//]: # ()
[//]: # (List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.)

### Tool/Technology 1: **Angular and Dark Mode Implementation for the frontend**

#### Aspects Learned
1. **Angular Component Communication:**
    - Understanding how child components communicate with parent components using `@Output` and `EventEmitter`.
    - Applying event binding in parent templates to listen for changes emitted by child components.

2. **Conditional Class Application:**
    - Dynamically applying CSS classes to elements using Angular’s `ngClass` directive.
    - Dynamically applying CSS classes to elements using Angular’s `[class]` binding syntax.
    - Managing theme switching logic in the parent component.

3. **Event Binding:**
    - Utilizing Angular’s `(event)` binding syntax to handle user interactions.
    - For example: `(change)="handleChange($event)"` to trigger functions when events like `change` occur, passing the event object as an argument.

#### Resources Used and Summary
1. **[Angular Official Documentation](https://angular.io/):**
    - [Components and Templates](https://angular.io/guide/component-interaction): Learned how to use `@Output` and `EventEmitter` to enable child-to-parent communication.
    - [NgClass Directive](https://angular.io/api/common/NgClass): Understood how to conditionally apply CSS classes dynamically based on variables.

2. **[Udemy Course: "Angular - The Complete Guide" by Maximilian Schwarzmüller](https://www.udemy.com/course/the-complete-guide-to-angular-2/):**
    - This course, although I have yet to complete it provided a basic understanding of Angular, including component communication and dynamic class management, which were instrumental in implementing the dark mode feature.

### Final Thoughts
By combining these resources, I was able to implement a basic dark mode feature that functions effectively but still requires refinement. One key area for improvement is ensuring the dark mode state persists when navigating between routes. Currently, when the route changes (e.g., from `localhost:4200/web/` to another route), the boolean variable controlling the dynamic CSS class allocation using `ngClass` resets to its default light mode, even if dark mode was active prior to the route change.

I suspect this behavior occurs because the page component is re-rendered during navigation, causing the component's state (including the boolean variable) to be re-initialized. To address this, I plan to research and implement a solution to persist the dark mode state. A promising approach might involve using a shared Angular service to store and manage the state globally, ensuring it remains consistent across routes. While I am not yet an expert in Angular, I am confident that further exploration and practice will help me refine this feature.
