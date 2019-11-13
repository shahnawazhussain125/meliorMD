
  // Initialize Firebase
  import firebase from 'firebase'
  import 'firebase/firestore';
  
    const config = {
      apiKey: "AIzaSyAkHMCThgrFgXehmqMM2GAt9q5U_MdBefs",
      authDomain: "online-parking-system-9c30f.firebaseapp.com",
      databaseURL: "https://online-parking-system-9c30f.firebaseio.com",
      projectId: "online-parking-system-9c30f",
      storageBucket: "online-parking-system-9c30f.appspot.com",
      messagingSenderId: "446689556232"
    };
    const fire = firebase.initializeApp(config);
    export default fire;
  