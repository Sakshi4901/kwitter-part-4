var firebaseConfig = {
      apiKey: "AIzaSyD0zEwBhjpvav2c2kgX_ibrIS4hJTKJzDE",
      authDomain: "kwitter-e0ade.firebaseapp.com",
      databaseURL: "https://kwitter-e0ade-default-rtdb.firebaseio.com",
      projectId: "kwitter-e0ade",
      storageBucket: "kwitter-e0ade.appspot.com",
      messagingSenderId: "6632249953",
      appId: "1:6632249953:web:93ee5bc452d25ca5276820"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.Location = "kwitter.html";
  }
