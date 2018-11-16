import React, { useContext } from 'react';
import { AppContext } from 'store/Provider';
import { auth, googleAuthProvider } from 'services/firebase';
import 'molecules/Login/Login.css';

const Login = () => {
	const { state } = useContext(AppContext);
	return state.user ? (
		<div className="logout">
			<h2>Logout</h2>
			<button onClick={() => auth.signOut()}>sign out</button>
		</div>
	) : (
		<div className="login">
			<h2>Login</h2>
			<button onClick={() => auth.signInWithPopup(googleAuthProvider)}>sign in</button>
		</div>
	);
};
export default Login;
