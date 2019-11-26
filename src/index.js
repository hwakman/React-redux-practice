import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo'
import './index.css';

// Redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from  './reducers';
import logger from 'redux-logger';

const store = createStore(Reducers, applyMiddleware(logger));

const App = () => {
    return(
        <Provider store={store}>
            <Todo />
        </Provider>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
