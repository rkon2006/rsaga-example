import { ADD_TODO, UPDATE_TODOS } from '../actions/todos';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: {
            return state.concat([{
                id: action.id,
                text: action.text
            }])
        }

        case UPDATE_TODOS: {
            return action.todos;
        }

        default: return state;
    }
}
