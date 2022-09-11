import { Row, Select } from "./Category.style";
import CategoryItem from "../CategoryItem";
import useTransaction from "../../hooks/useTransaction";
import useCategories from "../../hooks/useCategories";
import { useEffect, useState } from "react";

const Category = ({ actions, selectedCat }) => {
  const [state] = useTransaction();
  const categories = useCategories();
  function handleItemSelected(id) {
    actions.handleSelectCategory(id);
  }
  const [height, setHeight] = useState();
  const handleResize = () => {
    const pageHeight = window.innerHeight;
    setHeight(() => Math.floor(pageHeight * 0.3));
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CategoryList = categories.filter(
    (item) => item.type === state.currentTransactionType
  );

  return (
    <Row>
      <Select height={height}>
        {CategoryList.map((item, index) => (
          <CategoryItem
            key={item.id}
            item={item}
            actions={{ handleItemSelected }}
            isSelect={selectedCat === item.id}
            order={index}
          />
        ))}
      </Select>
    </Row>
  );
};

export default Category;
