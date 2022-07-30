import "./HeroImage.css";
const HeroImage = () => {
   return (
      <div className="wrapper">
         <div
            className="hero-image"
            style={{ backgroundImage: `url(hero-image.jpg)` }}
         >
            <div className="introduce">
               <h2>Delicious Food, Delivered To You</h2>
               <p>
                  Choose your favorite meal from out board selection of available
                  meals and enjoys the delicious lunch or dinner at home
               </p>
               <p>
                  All our meals are cooked with high-quality ingredients, just-in-time
                  and of course by experienced chefs!
               </p>
            </div>
         </div>
      </div>
   );
};

export default HeroImage;
