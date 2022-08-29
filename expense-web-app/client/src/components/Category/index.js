import { useState } from "react";
import { Row, Select } from "./Category.style";
import CategoryItem from "../CategoryItem";
import useTransaction from "../../hooks/useTransaction";
import useCategories from "../../hooks/useCategories";

const Category = ({ actions }) => {
  const [state, dispatch] = useTransaction();
  const [selected, setSelected] = useState();
  const categoriesObj = useCategories();
  const handleItemSelected = (id) => {
    setSelected(id);
    actions.handleSelectCategory(id);
  };
  const CategoryList = categoriesObj.categories.reduce((list, item) => {
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
