function login() {
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let errorMsg = document.getElementById('error');

    errorMsg.textContent = "";

    if (username === "" && password === "") {
        return;
    }

    if (username !== "admin" && password !== "admin@123") {
        errorMsg.textContent = "Invalid username and password!";
        return;
    }

    if (username !== "admin") {
        errorMsg.textContent = "Invalid username!";
        return;
    }

    if (password !== "admin@123") {
        errorMsg.textContent = "Invalid password!";
        return;
    }

   
    localStorage.setItem("loggedIn", "1");
    location.href = "dashboard.html";
}

function logout(){
    localStorage.removeItem("loggedIn");
    location.href = "index.html";
}

if (location.pathname.includes("dashboard.html") && localStorage.getItem("loggedIn") !== "1") {
    location.href = "index.html";
}


