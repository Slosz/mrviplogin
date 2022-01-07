var loggedIn = false;
while (loggedIn == false) {
  var username = prompt("Enter your username");
  if (username == "mrvip") {
      document.write("Logged In");
      loggedIn = true;
    } else {
      confirm("Wrong username!");
      loggedIn = false
  } 
} 