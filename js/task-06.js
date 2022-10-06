const textValidator = document.getElementById("validation-input");

textValidator.addEventListener("blur", () => {

  if (textValidator.value.length == textValidator.dataset.length) {
    textValidator.classList.remove("valid", "invalid");
    textValidator.classList.add("valid");
  } else {
    textValidator.classList.remove("valid", "invalid");
    textValidator.classList.add("invalid");
  }
});
