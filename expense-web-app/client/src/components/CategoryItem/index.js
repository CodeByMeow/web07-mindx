import { Item, Image } from "./CategoryItem.style";
import { CATEGORIES_IMG_PATH } from "../../constants/imageSrc";
const CategoryItem = ({ item, actions, isSelect, order }) => {
  return (
    <Item
      onClick={() => actions.handleItemSelected(item.id)}
      bg={isSelect ? "var(--aqua)" : ""}
      color={isSelect ? "#fff" : ""}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: order * 0.1,
        duration: 0.4,
        ease: "easeInOut",
      }}
      exit={{ opacity: 0 }}
    >
      <Image src={`${CATEGORIES_IMG_PATH}${item.img}`} alt={item.name} />
      <h5>{item.name}</h5>
    </Item>
  );
};

export default CategoryItem;
