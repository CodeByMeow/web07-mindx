import "./MealList.css";
import MealItem from "../MealItem";
const MealList = (props) => {
   const { meals } = props;
   const list =
      meals && meals.map((value) => <MealItem meal={value} key={value.id} />);
   return <div className="meal-list">{list}</div>;
};

export default MealList;
