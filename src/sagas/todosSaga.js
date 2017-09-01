import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodosList } from '../services/todos';
import { UPDATE_TODOS, FETCH_TODOS } from '../actions/todos';

function* fetchTodos() {
    try {
        const todos = yield call(fetchTodosList);
        yield put({ type: UPDATE_TODOS, todos });
    } catch({ message }) {
        yield put({ type: 'ERROR', message })
    }
}

function* todosSaga() {
    yield takeEvery(FETCH_TODOS, fetchTodos);
}

export default todosSaga;
