const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginForm);

function onLoginForm(event) {
    event.preventDefault();
    
  const {elements: { email, password },} = event.currentTarget;

  if (email.value != "" && password.value != "") {
    const formSell = { email: email.value, password: password.value };
    console.log(formSell);
    event.currentTarget.reset();
  } else {
    alert("Ошибка! Поля Email или Password не заполнены!");
  }
}