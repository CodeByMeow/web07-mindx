import { useEffect, useState } from "react";
import foodService from "../../services/foodServices";
import MealList from "../../components/MealList";
const URL = "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals";
const HomePage = () => {
   const [meals, setMeals] = useState();
   const getMeals = async () => {
      const data = await foodService.get(URL);
      const rs = data.data.splice(0, 4);
      setMeals(rs);
   };

   useEffect(() => {
      getMeals();
   }, []);
   return (
      <div className="container">
         <MealList meals={meals} />
      </div>
   );
};

export default HomePage;
