
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDeCXY2bN1WYalmJOCymiuqFLzqtZ4_u-Y",
      authDomain: "kwitter-5bfa5.firebaseapp.com",
      databaseURL: "https://kwitter-5bfa5-default-rtdb.firebaseio.com",
      projectId: "kwitter-5bfa5",
      storageBucket: "kwitter-5bfa5.appspot.com",
      messagingSenderId: "570106787163",
      appId: "1:570106787163:web:9eb4a2ad9b8429b57c567e"
    };
    
    // Initialize Firebase
var.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
