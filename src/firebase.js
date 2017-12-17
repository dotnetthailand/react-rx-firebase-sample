import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyASTVCsBfJBxEpY4XXNxpKRLljuB9tvGio",
  authDomain: "react-rx-firebase-sample.firebaseapp.com",
  databaseURL: "https://react-rx-firebase-sample.firebaseio.com",
  projectId: "react-rx-firebase-sample",
  storageBucket: "react-rx-firebase-sample.appspot.com",
  messagingSenderId: "228785796166"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
