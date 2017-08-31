import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodosApp from './components/TodoApp';

import reducers from './reducers';

const store = createStore(reducers);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodosApp />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
