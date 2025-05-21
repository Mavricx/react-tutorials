## Why was React created?

React was created by Facebook to address issues with complex user interfaces, such as the "phantom/ghost message" problem, and to make building interactive UIs more efficient and predictable.

Other problems React solved include:

- **Difficult state management:** Managing and updating UI state across large applications was error-prone and hard to maintain.
- **Inefficient DOM updates:** Directly manipulating the DOM was slow and could lead to performance bottlenecks. React introduced the virtual DOM to optimize updates.
- **Tangled code structure:** Mixing logic and UI code made components hard to reuse and test. React's component-based architecture encourages modular, reusable code.
- **Unidirectional data flow:** Traditional frameworks often had complex, bidirectional data flows, making debugging difficult. React enforces a one-way data flow, simplifying data management.
- **Poor scalability:** As applications grew, maintaining and scaling codebases became challenging. React's patterns and ecosystem help manage large-scale applications more effectively.

## React is a library
> Remember: React is like a "soldier"—it strictly follows your instructions as a library. A framework, on the other hand, is more like a "manager"—it sets the rules and decides when your code runs.
 
A **library** is a collection of reusable code that you call when you need it. You stay in control of the flow of your program and decide when and how to use the library’s features.

A **framework** provides a structure and often controls the flow of your application. You write code that fits into the framework’s rules and lifecycle. The framework calls your code at specific points (this is called "Inversion of Control").

**Analogy:**  
- Using a library is like hiring a helper: you tell them exactly what to do and when.
- Using a framework is like joining a company: you follow their processes, and they tell you when to do your part.

**Example:**  
- React is a library for building user interfaces.
- Angular is a framework that provides a full structure for building web apps.

**Key difference:**  
- **Library:** You call the code.
- **Framework:** The code calls you.

## Topics to learn 
- Core of React.(state or UI manipulation, JSX)
- Component reusability
- reusing of component.(props).
- How to propagate change(hooks)

## Additional addon to react
- Router( react don't have router)
- State management ( React don't hav state management)
  ex- Redux, Redux toolkit, zustand, context API
- Class based component
  ex- legacy code
- BAAS apps(social media clone, e-commerce apps)
## After React
- React is not a compete solution in most case cause their is no seo, no routing , browser render of js.
- Migrate to frameworks like next.js , gatsby, or remix
