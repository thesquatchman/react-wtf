import React, { useEffect, useContext } from 'react';
import { auth, database } from 'services/firebase';
import { AppContext } from 'store/Provider';
import { LOADING, SET_POSTS, SET_USER } from 'store/storeConstants';
import MainNav from 'molecules/MainNav/MainNav';
import UserMenu from 'molecules/UserMenu/UserMenu';
import NavToggle from 'atoms/NavToggle/NavToggle';

import Main from 'organisms/Main/Main';
import 'containers/AppContainer.css';

// i got this from stackoverflow, don't trust it too much ;)
const snapshotToArray = snapshot =>
  Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));

const Router = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(
    () => {
      if (state.posts.length === 0) {
        dispatch({ type: LOADING });
        database.ref('posts/').on('value', snapshot => {
          const posts = snapshotToArray(snapshot.val());
          dispatch({ type: SET_POSTS, posts });
        });
      }
    },
    [state.posts, state.isLoading]
  );

  useEffect(
    () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          dispatch({ type: SET_USER, user });
        } else {
          dispatch({ type: SET_USER, user: null });
        }
      });
    },
    [state.user]
  );

  return (
    <div className="App">
      <UserMenu user={state.user} />
      <MainNav posts={state.posts} open={state.navOpen} />
      <Main posts={state.posts} user={state.user} />
      <NavToggle />
    </div>
  );
};

export default Router;
