const calculateCategories = () => {
  const listItems = document.querySelectorAll('.item');
  console.log(`Number of categories: ${listItems.length}`);
  listItems.forEach(el => {
    console.log(`Category: ${el.children[0].textContent}`);
    console.log(`Elements: ${el.children[1].children.length}`);
  });
};

calculateCategories();
