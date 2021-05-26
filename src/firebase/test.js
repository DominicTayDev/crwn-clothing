import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('user')
  .doc('NRpHFSLmD39PVChLXOu1')
  .collection('cartItem')
  .doc('lfAn2rVV1YYstmttk3xV');
