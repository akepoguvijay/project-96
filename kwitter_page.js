// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
    authDomain: "kwitter-6abca.firebaseapp.com",
    databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
    projectId: "kwitter-6abca",
    storageBucket: "kwitter-6abca.appspot.com",
    messagingSenderId: "231606977400",
    appId: "1:231606977400:web:d2d2878892c4b97584fe8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

