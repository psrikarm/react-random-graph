import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {randomNumbers} from './reducers/SimpleReducer';

const rootReducer = combineReducers({randomNumbers});

const store = createStore(rootReducer);

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
