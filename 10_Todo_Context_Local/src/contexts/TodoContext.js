import { createContext, useContext } from 'react';
export const TodoContext = createContext({//this defines the shape of the context
    todos: [
        {
            id: Date.now(),
            todo: "Todo Message",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

export const useTodo = () => {// this is a custom hook that allows us to use the context in our components
    // it uses useContext to access the TodoContext and returns its value
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;// this exports the Provider component from the context, which will be used to wrap our application and provide the context value to all components that need it