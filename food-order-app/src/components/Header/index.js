import "./Header.css";
import Cart from "../Cart";
const Header = () => {
   return (
      <div className="wrapper">
         <div className="container">
            <div className="header">
               <div className="logo">
                  <h1>ReactMeals</h1>
               </div>
               <Cart />
            </div>
         </div>
      </div>
   );
};

export default Header;
