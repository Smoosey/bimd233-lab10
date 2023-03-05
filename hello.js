function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(`Username: ${username}, Password: ${password}`);
    document.getElementById("output").innerHTML = `Username: ${username}, Password: ${password}`;
  }