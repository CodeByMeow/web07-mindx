import { Row, Select } from "./Category.style";
import CategoryItem from "../CategoryItem";
import useTransaction from "../../hooks/useTransaction";
import useCategories from "../../hooks/useCategories";

const Category = ({ actions, selectedCat }) => {
  const [state] = useTransaction();
  const categories = useCategories();
  function handleItemSelected(id) {
    actions.handleSelectCategory(id);
  }

  const CategoryList = categories.filter(
    (item) => item.type === state.currentTransactionType
  );

  return (
    <Row>
      <Select>
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
