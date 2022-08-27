import { Row, Select } from "./Category.style";
import CategoryItem from "../CategoryItem";
import { EXPENSES, INCOME } from "../../constants/transactionTypes";
import useTransaction from "../../hooks/useTransaction";
import { useRef, useState } from "react";

const categories = [
  {
    id: "1",
    title: "Housing",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "2",
    title: "Transportation",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "3",
    title: "Food",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "4",
    title: "Utilties",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "5",
    title: "Insurance",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "6",
    title: "Medical and Healthcare",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "7",
    title: "Saving",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "8",
    title: "Personal Spending",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "9",
    title: "Entertainment",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "10",
    title: "Miscellaneous",
    type: EXPENSES,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "11",
    title: "Wages",
    type: INCOME,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "12",
    title: "Salary",
    type: INCOME,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "13",
    title: "Gift",
    type: INCOME,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "14",
    title: "Selling something",
    type: INCOME,
    img: "https://source.unsplash.com/random",
  },
  {
    id: "15",
    title: "Pocket money",
    type: INCOME,
    img: "https://source.unsplash.com/random",
  },
];

const Category = ({ actions }) => {
  const [state, dispatch] = useTransaction();
  const [selected, setSelected] = useState();
  const handleItemSelected = (id) => {
    setSelected(id);
    actions.handleSelectCategory(id);
  };
  const CategoryList = categories.reduce((list, item) => {
    if (item.type === state.currentTransactionType)
      return [
        ...list,
        <CategoryItem
          key={item.id}
          item={item}
          actions={{ handleItemSelected }}
          isSelect={selected === item.id}
        />,
      ];
    return list;
  }, []);

  return (
    <Row>
      <Select>{CategoryList}</Select>
    </Row>
  );
};

export default Category;
