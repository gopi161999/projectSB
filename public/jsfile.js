//var s=add();
function add()
{
  var num1, num2, sum;
  num1 = parseInt(document.getElementById("first").value);
  num2 = parseInt(document.getElementById("second").value);
  sum = num1 + num2;
  //return sum;
  sessionStorage.setItem('S',sum);  
  re();
}
function re() {
        location.href = "re.html";
    }
<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyAwIpfwCpIZrY_hoqfoe2WW9f-J3NKCW8E",

    authDomain: "calc-64124.firebaseapp.com",

    projectId: "calc-64124",

    storageBucket: "calc-64124.appspot.com",

    messagingSenderId: "708500440448",

    appId: "1:708500440448:web:66243ce8475ea2fabcad65",

    measurementId: "G-SEH49S2J5W"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

