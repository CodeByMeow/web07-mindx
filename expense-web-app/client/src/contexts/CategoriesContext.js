import { createContext } from "react";
import { INCOME, EXPENSES } from "../constants/transactionTypes";
const initialCategories = [
  {
    id: "1",
    title: "Housing",
    type: EXPENSES,
    img: "housing.png",
  },
  {
    id: "2",
    title: "Transportation",
    type: EXPENSES,
    img: "transportation.png",
  },
  {
    id: "3",
    title: "Food",
    type: EXPENSES,
    img: "food.png",
  },
  {
    id: "5",
    title: "Insurance",
    type: EXPENSES,
    img: "insurance.png",
  },
  {
    id: "7",
    title: "Saving",
    type: EXPENSES,
    img: "saving.png",
  },
  {
    id: "8",
    title: "Personal Spending",
    type: EXPENSES,
    img: "personal.png",
  },
  {
    id: "9",
    title: "Entertainment",
    type: EXPENSES,
    img: "popcorn.png",
  },
  {
    id: "10",
    title: "Miscellaneous",
    type: EXPENSES,
    img: "duck.png",
  },
  {
    id: "11",
    title: "Wages",
    type: INCOME,
    img: "wage.png",
  },
  {
    id: "12",
    title: "Salary",
    type: INCOME,
    img: "salary.png",
  },
  {
    id: "13",
    title: "Gift",
    type: INCOME,
    img: "giftbox.png",
  },
  {
    id: "14",
    title: "Selling something",
    type: INCOME,
    img: "trade.png",
  },
  {
    id: "15",
    title: "Pocket money",
    type: INCOME,
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
