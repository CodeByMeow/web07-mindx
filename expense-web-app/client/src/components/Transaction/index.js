import { Item, ItemImg, ItemDesc, ItemAmount } from "./Transaction.style";
import useCategories from "../../hooks/useCategories";
import { CATEGORIES_IMG_PATH } from "../../constants/imageSrc";

const Transaction = ({ item }) => {
  const categoriesObj = useCategories();
  const { title: catTitle, img } = categoriesObj.getCategory(item.category);
  return (
    <Item>
      <ItemImg>
        <img src={`${CATEGORIES_IMG_PATH}${img}`} alt="{catTitle}" />
      </ItemImg>
      <ItemDesc>
        <h4>{catTitle}</h4>
        <span>{`${item.date}`}</span>
      </ItemDesc>
      <ItemAmount>
        <h4>{`$${item.amount}`}</h4>
        <span>$383.00</span>
      </ItemAmount>
    </Item>
  );
};

export default Transaction;
