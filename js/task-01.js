const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
const groups = [...category.children];

    groups.forEach(group => {
        if (group.tagName === 'H2') {
            console.log(`Category: ${group.textContent}`)
        }
    })

    groups.forEach(group => {
        if (group.tagName === 'UL') {
            console.log(`Elements: ${group.children.length}`);
        }
            
    })
});
   