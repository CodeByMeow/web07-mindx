import { Link } from "react-router-dom";
import "./Header.css";
import Cart from "../Cart";
import { useEffect, useState } from "react";
const Header = () => {
   const [sticky, setSticky] = useState(false);
   useEffect(() => {
      window.onscroll = () => {
         setSticky(window.pageYOffset === 0 ? false : true);
         return () => (window.onscroll = null);
      };
   }, []);
   return (
      <div className={`wrapper ${sticky ? "fixed" : ""}`}>
         <div className="header">
            <div className="logo">
               <Link to="/">
                  <h1>ReactMeals</h1>
               </Link>
            </div>
            <Cart />
         </div>
      </div>
   );
};

export default Header;
