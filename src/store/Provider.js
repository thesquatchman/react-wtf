import React, { useReducer } from 'react';
import { RESET, LOADING, NAV_OPEN, SET_POSTS, SET_USER } from 'store/storeConstants';

const initialState = { isLoading: false, posts: [], user: null, navOpen: false };

const reducer = (state, action) => {
	switch (action.type) {
		case RESET:
			return initialState;
		case LOADING:
			return {
				...state,
				isLoading: true
			};
		case NAV_OPEN:
			return {
				...state,
				navOpen: !state.navOpen
			};
		case SET_POSTS:
			return {
				...state,
				isLoading: false,
				posts: action.posts
			};
		case SET_USER:
			return {
				...state,
				user: action.user
			};
		default:
			return state;
	}
};

export const AppContext = React.createContext({});

export const Provider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};
