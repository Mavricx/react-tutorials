## How React Works

React is a JavaScript library for building user interfaces. It uses a component-based architecture, where each part of the UI is encapsulated in a reusable component.

### Key Concepts

- **Components:** Independent, reusable pieces of UI defined as JavaScript functions or classes.
- **JSX:** A syntax extension that allows you to write HTML-like code in JavaScript.
- **Virtual DOM:** React creates a lightweight copy of the actual DOM. When state changes, React updates the Virtual DOM first, then efficiently updates only the changed parts in the real DOM.
- **State and Props:** State holds data that may change over time, while props are inputs passed to components.
- **Unidirectional Data Flow:** Data flows from parent to child components, making the app predictable and easier to debug.

### Rendering Process

1. Components receive data via props or state.
2. React renders the UI based on this data.
3. When data changes, React updates the Virtual DOM.
4. React compares the Virtual DOM with the previous version (diffing).
5. Only the changed elements are updated in the real DOM (reconciliation).

This approach makes React efficient and suitable for building complex, interactive web applications.