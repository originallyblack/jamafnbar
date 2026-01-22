const menuData = {
  mainDishes: {
    title: "Main Dishes",
    description: "Served with Rice and Peas / Plain Rice",
    items: [
      { name: "Jerk Chicken", medium: 12, large: 13.5 },
      { name: "Fried Chicken", medium: 11, large: 12.5 },
      { name: "Curry Goat", medium: 12.5, large: 14 },
      { name: "Oxtail", medium: 12.5, large: 14 },
      { name: "Callaloo & Saltfish", medium: 11, large: 12.5 },
      { name: "Ackee & Saltfish", medium: 11, large: 12.5 },
      { name: "Soup of the Day", medium: 4.50, large: 6.5 },
    ],
  },
  sides: {
    title: "Sides",
    items: [
      { name: "Fried Plantain", price: 1.5, note: "4 Pieces" },
      { name: "Fried Dumplings", price: 2.25 },
      {
        name: "Patties",
        options: ["Veg", "Chicken", "Jerk Chicken", "Beef", "Saltfish"],
        price: 3.75,
      },
      { name: "Steam Veg", price: 2 },
      { name: "Ackee & Saltfish", price: 4.5 },
    ],
  },
  extra: {
    title: "Extras",
    items: [
      { name: "Jerk Chicken", price: 6.5, perPortion: true },
      { name: "Fried Chicken", price: 5, perPortion: true },
      { name: "BBQ Chicken Leg", price: 5.5, perPortion: true },
      { name: "BBQ Chicken Wings", price: 3.5, perPortion: true },
      { name: "Rice n Red Peas", price: 3.5, perPortion: true },
      { name: "Plain Rice", price: 2.5, perPortion: true },

    ],
  },
  deal: {
    title: "Deals",
    items: ["1 Patty", "1 Drink (Can)"],
    price: 4.50,
  },
};

export default menuData;
