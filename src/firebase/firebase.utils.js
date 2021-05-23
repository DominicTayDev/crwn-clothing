import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDNcFJa-pPZ5OPnjac2dRZDpyLBWKKhLUk',
  authDomain: 'crwn-db-8d1e2.firebaseapp.com',
  projectId: 'crwn-db-8d1e2',
  storageBucket: 'crwn-db-8d1e2.appspot.com',
  messagingSenderId: '502196213605',
  appId: '1:502196213605:web:a35ae1477b3db3c552b38c',
  measurementId: 'G-H9BZKPNEX8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
