import { connect } from 'react-redux';
import {addTodo, fetchTodos} from '../actions/todos';

import TodosApp from '../components/TodoApp';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: (text) => dispatch(fetchTodos(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosApp);
