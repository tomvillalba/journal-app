import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBzSr0umTcPgZm3VRD__aJQJSgvpcqXbC4',
	authDomain: 'react-curso-fernandoherrera.firebaseapp.com',
	projectId: 'react-curso-fernandoherrera',
	storageBucket: 'react-curso-fernandoherrera.appspot.com',
	messagingSenderId: '267480560046',
	appId: '1:267480560046:web:1ac714897327e20d96d83f',
	measurementId: 'G-276PVES30S',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {db, googleAuthProvider, firebase};
