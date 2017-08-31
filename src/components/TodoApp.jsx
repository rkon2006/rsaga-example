import React from 'react';
import TodosContainer from '../containers/TodosContainer';

export default function TodosApp ({ todos }) {
    return (
        <div>
            <h1>App</h1>

            <TodosContainer />
        </div>
    );
}
