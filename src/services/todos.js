const todos = [
    {
        id: 1,
        text: 'Do this'
    },
    {
        id: 2,
        text: 'Not to do anything'
    },
    {
        id: 3,
        text: 'Call somebody'
    }
];

export const fetchTodosList = () => (Promise.resolve(todos));