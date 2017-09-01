import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import TodosAppContainer from './containers/TodosAppContainer';

import reducers from './reducers';
import todosSaga from './sagas/todosSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todosSaga);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodosAppContainer />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
