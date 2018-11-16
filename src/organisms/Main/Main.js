import React from 'react';
import { Route } from 'react-router-dom';
import 'organisms/Main/Main.css';
import Post from 'organisms/Post/Post';
import NewPost from 'organisms/NewPost/NewPost';
import Home from 'organisms/Home/Home';
import Login from 'molecules/Login/Login';

const MainNav = props => {
	return (
		<main className="App-main">
			<Route path={'/'} exact component={Home} />
			<Route path={'/posts/:postPath'} component={Post} />
			<Route path={'/new'} component={props.user ? NewPost : Login} />
			<Route path={'/login'} component={Login} />
		</main>
	);
};
export default MainNav;
