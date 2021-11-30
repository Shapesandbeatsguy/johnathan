const firebaseConfig = {
    apiKey: "AIzaSyD66ZfSmqXAlJlNaW4CCQZsV2xGF0j-ukE",
    authDomain: "kwitter-aecc6.firebaseapp.com",
    databaseURL: "https://kwitter-aecc6-default-rtdb.firebaseio.com",
    projectId: "kwitter-aecc6",
    storageBucket: "kwitter-aecc6.appspot.com",
    messagingSenderId: "592584528726",
    appId: "1:592584528726:web:1a14174abcc453bcbf3cf7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });

    
}