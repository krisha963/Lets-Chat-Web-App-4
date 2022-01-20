// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMfP6A3ac5KhQytqYvqT3wBStdVHbQ-_E",
    authDomain: "project-94-3b2cd.firebaseapp.com",
    databaseURL: "https://project-94-3b2cd-default-rtdb.firebaseio.com",
    projectId: "project-94-3b2cd",
    storageBucket: "project-94-3b2cd.appspot.com",
    messagingSenderId: "1066077655059",
    appId: "1:1066077655059:web:e570110b72649781cf6fe6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name -" + Room_names);
      row = "<div class = 'room_name' id="+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=  row;  
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}