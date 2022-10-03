const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];






const navRef = document.querySelector('#ingredients');

const listTotal = ingredients.map(ingredient => {
let itemRef = document.createElement("li");
itemRef.textContent = ingredient;
itemRef.classList.add("item");
return itemRef
});

navRef.append(...listTotal)