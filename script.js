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

let products = JSON.parse(localStorage.getItem("products")) || [];

const totalProducts = document.getElementById("total-products");
const productTableBody = document.querySelector("#productTable tbody");
const errorMessage = document.getElementById("product-error");

function updateProductCount() {
    totalProducts.textContent = products.length;
}

function renderProducts() {
    productTableBody.innerHTML = "";
    products.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.description}</td>
        `;
        productTableBody.appendChild(row);
    });
    updateProductCount();
}


function addProduct() {
    const name = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const stock = document.getElementById("productStock").value.trim();
    const description = document.getElementById("productDescription").value.trim();


    if (!name || !price || !stock || !description) {
        errorMessage.textContent = "All fields are required.";
        return;
    }
    if (Number(price) <= 0) {
        errorMessage.textContent = "Price must be greater than 0.";
        return;
    }
    if (Number(stock) < 0) {
        errorMessage.textContent = "Stock cannot be negative.";
        return;
    }

    const newProduct = {
        name,
        price: Number(price),
        stock: Number(stock),
        description
    };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productStock").value = "";
    document.getElementById("productDescription").value = "";
    errorMessage.textContent = "";

    renderProducts();
}

function logout() {
    localStorage.removeItem("loggedIn"); 
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});





