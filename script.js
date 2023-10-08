var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');

eye.addEventListener('click', togglePass);

function togglePass() {
  eye.classList.toggle('active');
  (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
}



function checkStuff() {
  var username = document.form1.username;
  var password = document.form1.password;
  var msg = document.getElementById('msg');

  if (username.value == "") {
    msg.style.display = 'block';
    msg.innerHTML = "Please enter your username"; 
    username.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }

  if (password.value == "") {
    msg.innerHTML = "Please enter your password";
    password.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }

  
  var correctUsername = "usn";
  var correctPassword = "pw";

  
  if (username.value === correctUsername && password.value === correctPassword) {
    
    window.location.href = "dashboard.php";
    return false; 


  } else {
    
    msg.style.display = 'block';
    msg.innerHTML = "Login failed. Please check your USN & PW";
    msg.style.fontSize = '12px'; 
    return false;
  }
}


