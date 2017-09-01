export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: Date.now(),
    text
});

export const fetchTodos = () => ({ type: FETCH_TODOS });
