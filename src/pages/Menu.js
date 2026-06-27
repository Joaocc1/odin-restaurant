const breakfastItems = [
  { name: "Classic Breakfast (Eggs, Toast & Bacon)", price: 9.5 },
  { name: "Avocado Toast with Poached Eggs", price: 10.5 },
  { name: "Greek Yogurt with Granola & Seasonal Fruit", price: 7.5 },
  { name: "Buttermilk Pancakes with Maple Syrup & Berries", price: 9.0 },
  { name: "Croissant with Butter & Homemade Jam", price: 4.0 },
];
const mealItems = [
  { name: "Grilled Chicken Sandwich with Fries", price: 13.5 },
  { name: "Blue Mondays Cheeseburger", price: 15.0 },
  { name: "Roasted Vegetable & Goat Cheese Tart", price: 13.0 },
  { name: "Herb-Grilled Salmon with Seasonal Vegetables", price: 18.5 },
  { name: "Mushroom Risotto with Parmesan", price: 16.0 },
  { name: "Homemade Tomato Basil Soup with Artisan Bread", price: 8.0 },
  { name: "Seasonal Garden Salad", price: 10.5 },
];
const dessertItems = [
  { name: "New York Cheesecake", price: 6.5 },
  { name: "Warm Chocolate Brownie with Vanilla Ice Cream", price: 7.0 },
  { name: "Lemon Tart", price: 6.5 },
  { name: "Seasonal Fruit Crumble", price: 7.5 },
];
const hotDrinkItems = [
  { name: "Espresso", price: 2.2 },
  { name: "Americano", price: 2.8 },
  { name: "Cappuccino", price: 3.5 },
  { name: "Latte", price: 3.8 },
  { name: "Hot Chocolate", price: 4.0 },
  { name: "Selection of Teas", price: 2.8 },
];
const coldDrinkItems = [
  { name: "Fresh Orange Juice", price: 4.5 },
  { name: "Homemade Lemonade", price: 4.0 },
  { name: "Iced Tea", price: 3.8 },
  { name: "Sparkling Water", price: 2.5 },
  { name: "Still Water", price: 2.5 },
  { name: "Soft Drinks", price: 3.0 },
];

export default function Menu(mainElement) {
  const board = document.createElement("div");
  const paper = document.createElement("div");
  const mainHeading = document.createElement("h1");
  const menuContent = document.createElement("div");
  const menuBreakfast = createMenuSections("Breakfast", "menu-breakfast");
  const menuMeals = createMenuSections("Lunch & Dinner", "menu-meals");
  const menuDesserts = createMenuSections("Desserts", "menu-desserts");
  const menuHotDrinks = createMenuSections("Hot Drinks", "menu-hot-drinks");
  const menuColdDrinks = createMenuSections("Cold Drinks", "menu-cold-drinks");

  board.classList.add("board");
  paper.classList.add("paper");
  mainHeading.classList.add("main-heading");
  menuContent.classList.add("menu");

  mainHeading.textContent = "Menu";

  mainElement.appendChild(board);
  board.appendChild(paper);
  paper.appendChild(mainHeading);
  paper.appendChild(menuContent);
  menuContent.appendChild(menuBreakfast);
  menuContent.appendChild(menuMeals);
  menuContent.appendChild(menuDesserts);
  menuContent.appendChild(menuHotDrinks);
  menuContent.appendChild(menuColdDrinks);

  function createMenuSections(section, nameClass) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    div.classList.add(nameClass);
    div.classList.add("menu-category");
    h2.textContent = section;
    div.appendChild(h2);

    return div;
  }

  function createItem(item) {
    const div = document.createElement("div");
    div.classList.add("item");

    const p1 = document.createElement("p");
    p1.textContent = item.name;
    const p2 = document.createElement("p");
    p2.textContent = item.price;

    div.appendChild(p1);
    div.appendChild(p2);

    return div;
  }

  breakfastItems.forEach((item) => {
    menuBreakfast.appendChild(createItem(item));
  });
  mealItems.forEach((item) => {
    menuMeals.appendChild(createItem(item));
  });
  dessertItems.forEach((item) => {
    menuDesserts.appendChild(createItem(item));
  });
  hotDrinkItems.forEach((item) => {
    menuHotDrinks.appendChild(createItem(item));
  });
  coldDrinkItems.forEach((item) => {
    menuColdDrinks.appendChild(createItem(item));
  });
}
