const form = document.querySelector(".form") as HTMLFormElement;
const button = document.querySelector(".button") as HTMLButtonElement;
let inputText = document.querySelector("#username") as HTMLInputElement;
let inputPassword = document.querySelector("#password") as HTMLInputElement;
const errorBox = document.querySelector(".error") as HTMLDivElement;

button.addEventListener("click", (event) => {
  event.preventDefault();

  const username: string = inputText.value;
  const password: string = inputPassword.value;

  if (username === "" || password === "") {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Por favor, preencha todos os campos.";
    errorBox.appendChild(errorMsg);

    setTimeout(() => {
      errorBox.innerHTML = "";
    }, 2000);
  } else {
    alert("Seja bem vindo.");
  }

  inputPassword.value = "";
  inputText.value = "";
});
