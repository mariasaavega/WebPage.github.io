const togglePasswordLogin = document.querySelector("#togglePasswordLogin");
const passwordLogin = document.querySelector("#passwordLogin");

togglePasswordLogin.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    passwordLogin.getAttribute("type") === "password" ? "text" : "password";
  passwordLogin.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});
