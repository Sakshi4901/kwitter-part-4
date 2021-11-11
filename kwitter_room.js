
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
    document.getElementById("user_name").innerHTML="welcome "+ user_name + "!";


    function addroom()
    {
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name "
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name -"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}
  function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.Location = "kwitter.html";
  }

