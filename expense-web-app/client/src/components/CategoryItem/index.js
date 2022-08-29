import { Item, Image } from "./CategoryItem.style";
import { CATEGORIES_IMG_PATH } from "../../constants/imageSrc";
const CategoryItem = ({ item, actions, isSelect }) => {
  return (
    <Item
      onClick={() => actions.handleItemSelected(item.id)}
      bg={isSelect ? "var(--aqua)" : ""}
    >
      <Image src={`${CATEGORIES_IMG_PATH}${item.img}`} alt={item.title} />
      <h5>{item.title}</h5>
    </Item>
  );
};

export default CategoryItem;
