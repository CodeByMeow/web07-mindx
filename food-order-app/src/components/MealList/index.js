import "./MealList.css";
import { MealItem } from "../../components";
const MealList = (props) => {
   const { meals, addToCart } = props;
   const list =
      meals &&
      meals.map((value) => (
         <MealItem meal={value} key={value.id} addToCart={addToCart} />
      ));
   return <div className="meal-list">{list}</div>;
};

export default MealList;
