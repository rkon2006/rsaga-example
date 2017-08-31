export const ADD_TODO = 'ADD_TODO';

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: Date.now(),
    text
});
