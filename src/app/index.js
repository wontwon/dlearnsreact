import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";
import routes from "./routes";
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

import { Provider } from 'react-redux';
import createStore from "./lib/create-store";

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>{routes}</Router>
	</Provider>,
	document.getElementById("app-container")
);