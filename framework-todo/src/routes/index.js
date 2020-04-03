import { createHashHistory } from 'history';
import React from 'react';
import {
	Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Todo from '../pages/todo/todo'
import LayoutContainer from '../components/layoutContainer/layoutContainer'

export const history = createHashHistory();


const Routes = () => (
	<Router history={history}>
		<Switch>
			<LayoutContainer history={history}>
				<Route
					exact
					path='/'
					component={Todo} >
				</Route>
			</LayoutContainer>
        </Switch>
    </Router>
);

export default Routes;
