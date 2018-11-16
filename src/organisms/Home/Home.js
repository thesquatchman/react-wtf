import React from 'react';
import 'organisms/Home/Home.css';

const Home = props => {
	return (
		<div className="Home">
			<h1>Welcome to react.wtf</h1>
			<p>
				An honest and opionionated look into the react javscript library that tries to answer the
				questions: What the fuck react? Why the fuck react? and How the fuck react?
			</p>
			<h2>Code along:</h2>
			<p>
				You can follow along with the code that this site runs on{' '}
				<a
					href="https://github.com/thesquatchman/react-wtf"
					target="_blank"
					rel="noopener noreferrer"
				>
					here
				</a>
			</p>
			<p>
				A few words of consideration: to run the code you will need to set up a{' '}
				<a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer">
					firebase
				</a>{' '}
				project and create a file in this folder: <code>src/config/keys.js</code>
			</p>
			<p>key.js should contain the info you get from the Firebase web config:</p>
			<pre>
				<code>
					const config = {'{'}
					<br />
					... your config keys
					<br />
					{'}'}
					<br />
					export default config;
				</code>
			</pre>
			<h2>Or start fresh</h2>
			<p>
				The easiest way to jump right into code is to use{' '}
				<a
					href="https://facebook.github.io/create-react-app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Create React App
				</a>
				. It will install a Blank React app for you with no need to worry about configuring Webpack,
				EsLint or any of that fun stuff.
			</p>
			<h3>Hooks</h3>
			<p>
				A lot of the examples in this site use the proposed new methods called{' '}
				<a
					href="https://reactjs.org/docs/hooks-intro.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hooks
				</a>
				, which are technically not part of the official react yet. So after installing Create React
				App, just hop into your new package.json and change the versions on the 'react' and
				'react-dom' dependencies to:
			</p>
			<pre>
				<code>
					dependencies: {'{'}
					<br />
					"react": "^16.7.0-alpha.0",
					<br />
					"react-dom": "^16.7.0-alpha.0",
					<br />
					...
				</code>
			</pre>
			<p>
				Then just run <code>$ npm install</code>
			</p>
		</div>
	);
};
export default Home;
