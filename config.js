import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCenb1wEsoldkx2AmBdRxqAU05hKzC2Ejk",
    authDomain: "complaint-forum-ed3f8.firebaseapp.com",
    projectId: "complaint-forum-ed3f8",
    storageBucket: "complaint-forum-ed3f8.appspot.com",
    messagingSenderId: "324523401716",
    appId: "1:324523401716:web:9ca34c5df8b66ce33b19a1"

};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()