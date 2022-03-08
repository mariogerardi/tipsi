import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOneGZSAtzt-9NTigo8YQfQXajMUnwkeg',
  authDomain: 'tipsi-27.firebaseapp.com',
  databaseURL: 'https://tipsi-27.firebaseio.com',
  projectId: 'tipsi-27',
  storageBucket: 'tipsi-27.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:166565815436:ios:ab60dade1a72d75ae407a9',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };