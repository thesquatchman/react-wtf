import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import config from 'config/keys';

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
