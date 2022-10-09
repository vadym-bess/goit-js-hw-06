
const refs = {
    inputRef: document.querySelector("#name-input"),
    outputRef: document.querySelector("#name-output")
};

refs.inputRef.addEventListener("input", onInputChange);


function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        refs.outputRef.textContent = event.currentTarget.value;
    } else {
        refs.outputRef.textContent = "Anonymous";
    }
};

