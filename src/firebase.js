// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDX7InNcrg_HwCmkVs3TboZ6ZX4-5khHmI',
	authDomain: 'todo-firebase-482af.firebaseapp.com',
	projectId: 'todo-firebase-482af',
	storageBucket: 'todo-firebase-482af.appspot.com',
	messagingSenderId: '734345454888',
	appId: '1:734345454888:web:f510482f91268474cd1c1d',
	measurementId: 'G-KQX4CBSSEY'
});

const db = firebaseApp.firestore();

export default db;
