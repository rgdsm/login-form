"use strict";
const form = document.querySelector(".form");
const button = document.querySelector(".button");
let inputText = document.querySelector("#username");
let inputPassword = document.querySelector("#password");
const errorBox = document.querySelector(".error");
button.addEventListener("click", (event) => {
    event.preventDefault();
    const username = inputText.value;
    const password = inputPassword.value;
    if (username === "" || password === "") {
        const errorMsg = document.createElement("p");
        errorMsg.textContent = "Por favor, preencha todos os campos.";
        errorBox.appendChild(errorMsg);
        setTimeout(() => {
            errorBox.innerHTML = "";
        }, 2000);
    }
    else {
        alert("Seja bem vindo.");
    }
    inputPassword.value = "";
    inputText.value = "";
});
