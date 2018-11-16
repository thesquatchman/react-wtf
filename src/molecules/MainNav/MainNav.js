import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'svg/logo-wtf.svg';
import 'molecules/MainNav/MainNav.css';

const MainNav = props => {
	const { posts, open } = props;
	return (
		<header className={`App-header ${open && 'open'}`}>
			<div className="navWrapper">
				<Link to={'/'} className="App-link App-link-logo">
					<img src={logo} className="App-logo" alt="logo" />
					<span>react.wtf</span>
				</Link>
				<nav>
					{posts.length > 0 &&
						posts.map(post => (
							<Link key={post.key} to={'/posts/' + post.relPath} className="App-link">
								{post.title}
							</Link>
						))}
				</nav>
			</div>
		</header>
	);
};
export default MainNav;
