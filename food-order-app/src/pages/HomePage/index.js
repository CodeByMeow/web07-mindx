import { useEffect, useState } from "react";
import foodService from "../../services/foodServices";
import MealList from "../../components/MealList";
import HeroImage from "../../components/HeroImage";
const URL = "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals";
const HomePage = (props) => {
   const { addToCart } = props;
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
      <>
         <HeroImage />
         <div className="container">
            <MealList meals={meals} addToCart={addToCart} />
         </div>
      </>
   );
};

export default HomePage;
