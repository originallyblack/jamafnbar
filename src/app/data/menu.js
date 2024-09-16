const menuData = {
  mainDishes: {
    title: "Main Dishes",
    description: "Served with Rice and Peas / Plain Rice",
    items: [
      { name: "Jerk Chicken", medium: 10, large: 12 },
      { name: "Fried Chicken", medium: 10, large: 12 },
      { name: "Curry Goat", medium: 11, large: 13 },
      { name: "Oxtail", medium: 11, large: 13 },
      { name: "Callaloo & Saltfish", medium: 10, large: 12 },
      { name: "Soup of the Day", medium: 4, large: 6 },
    ],
  },
  sides: {
    title: "Sides",
    items: [
      { name: "Fried Plantain", price: 1, note: "3 pieces" },
      { name: "Fried Dumplings", price: 2 },
      {
        name: "Patties",
        options: ["Veg", "Chicken", "Jerk Chicken", "Beef", "Saltfish"],
        price: 3.5,
      },
      { name: "Steam Veg", price: 2 },
      { name: "Ackee & Saltfish", price: 6 },
    ],
  },
  extra: {
    title: "Extras",
    items: [
      { name: "Jerk Chicken", price: 6, perPortion: true },
      { name: "Fried Chicken", price: 4, perPortion: true },
    ],
  },
  deal: {
    title: "Deals",
    items: ["1 Patty", "1 Drink (Can)"],
    price: 4,
  },
};

export default menuData;
