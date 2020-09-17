import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC1p-m-KkN8bQDnujx4myCPcNxdF32b0HI',
  authDomain: 'sentence-builder-4714171.firebaseapp.com',
  databaseURL: 'https://sentence-builder-4714171.firebaseio.com',
  projectId: 'sentence-builder-4714171',
  storageBucket: 'sentence-builder-4714171.appspot.com',
  messagingSenderId: '925066380063',
  appId: '1:925066380063:web:1fae941f83537689e5262a',
};

const firebaseAPI = firebase.initializeApp(firebaseConfig);

export default firebaseAPI;
