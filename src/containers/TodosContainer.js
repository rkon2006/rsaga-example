import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

import Todos from '../components/Todos';

const mapStateToProps = ({ todos }) => ({
    todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);
