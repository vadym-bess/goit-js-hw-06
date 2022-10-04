
const decrRef = document.querySelector("[data-action=decrement]");

const incrRef = document.querySelector("[data-action=increment]");
    
const counterValue = document.querySelector("#value");
counterValue.value = 0;

decrRef.addEventListener("click", () => {
    counterValue.value -= 1;
    counterValue.textContent = counterValue.value;
});

incrRef.addEventListener("click", () => {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
});
console.log(counterValue.value);

    
