import { createContext } from "react";
const initialCategories = [
  {
    id: "1",
    name: "Housing",
    type: "expenses",
    img: "housing.png",
  },
  {
    id: "2",
    name: "Transportation",
    type: "expenses",
    img: "transportation.png",
  },
  {
    id: "3",
    name: "Food",
    type: "expenses",
    img: "food.png",
  },
  {
    id: "5",
    name: "Insurance",
    type: "expenses",
    img: "insurance.png",
  },
  {
    id: "7",
    name: "Saving",
    type: "expenses",
    img: "saving.png",
  },
  {
    id: "8",
    name: "Personal Spending",
    type: "expenses",
    img: "personal.png",
  },
  {
    id: "9",
    name: "Entertainment",
    type: "expenses",
    img: "popcorn.png",
  },
  {
    id: "10",
    name: "Miscellaneous",
    type: "expenses",
    img: "duck.png",
  },
  {
    id: "11",
    name: "Wages",
    type: "income",
    img: "wage.png",
  },
  {
    id: "12",
    name: "Salary",
    type: "income",
    img: "salary.png",
  },
  {
    id: "13",
    name: "Gift",
    type: "income",
    img: "giftbox.png",
  },
  {
    id: "14",
    name: "Selling something",
    type: "income",
    img: "trade.png",
  },
  {
    id: "15",
    name: "Pocket money",
    type: "income",
    img: "wallet.png",
  },
];

export const CategoriesContext = createContext(initialCategories);

const CategoriesProvider = ({ children }) => {
  const categories = initialCategories.map((item) => ({
    ...item,
    totalTransaction: 0,
  }));
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
