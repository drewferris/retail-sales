import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';


import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
