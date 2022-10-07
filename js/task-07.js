const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputValueChange); 

function onInputValueChange(event) {
    textRef.style.fontSize = event.currentTarget.value + "px";
};