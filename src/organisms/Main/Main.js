import React from 'react';
import { Route } from 'react-router-dom';
import 'organisms/Main/Main.css';
import Post from 'organisms/Post/Post';
import NewPost from 'organisms/NewPost/NewPost';
import Login from 'molecules/Login/Login';

const MainNav = props => {
	return (
		<main className="App-main">
			<Route path={'/'} exact component={() => <h2>Home</h2>} />
			<Route path={'/posts/:postPath'} component={Post} />
			<Route path={'/new'} component={props.user ? NewPost : Login} />
			<Route path={'/login'} component={Login} />
		</main>
	);
};
export default MainNav;
