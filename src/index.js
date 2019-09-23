import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import './index.css';
import App from './Container/App';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


export const store = createStore(rootReducer, applyMiddleware(thunk));


// ReactDOM.render(<App/>, document.getElementById('root'));
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// serviceWorker.unregister();
