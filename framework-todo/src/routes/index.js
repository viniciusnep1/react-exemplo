import { createHashHistory } from 'history';
import React from 'react';
import {
	Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Todo from '../pages/todo/todo'
import LayoutContainer from '../components/layoutContainer/layoutContainer'
import Posts from '../pages/posts/posts'
import PostsDetails from '../pages/posts/posts.details'
import Albums from '../pages/albums/albums'

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
				<Route
					exact
					path='/posts'
					component={Posts} >
				</Route>
				<Route
					exact
					path='/posts/:id'
					component={PostsDetails} >
				</Route>
				<Route
					exact
					path='/albuns'
					component={Albums} >
				</Route>
			</LayoutContainer>
        </Switch>
    </Router>
);

export default Routes;
