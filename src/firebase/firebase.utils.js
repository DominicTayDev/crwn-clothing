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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
