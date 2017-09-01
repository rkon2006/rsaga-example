import React from 'react';
import Todo from './Todo';

export default function Todos ({ todos, addTodo, fetchTodos }) {
    const List = todos.map(t => <Todo key={t.id} text={t.text} />);

    return (
        <div>
            <button onClick={() => addTodo('To Do on ' + Date.now())}>Add Todo</button>

            <ul>{List}</ul>
        </div>
    );
};