import React from 'react';
import TodosContainer from '../containers/TodosContainer';

export default class TodosApp extends React.Component {
    componentDidMount() {
        const { fetchTodos } = this.props;

        fetchTodos();
    }

    render() {
        return (
            <div>
                <h1>App</h1>

                <TodosContainer />
            </div>
        );
    }
}
