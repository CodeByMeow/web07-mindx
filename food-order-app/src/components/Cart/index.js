import "./Cart.css";
import CartItem from "../CartItem";
import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = (props) => {
   const [isOpen, setIsOpen] = useState(false);
   const {
      cart: { items, total: totalPrice },
      updateItemCart,
   } = props;
   const totalAmount = items.reduce((sum, item) => (sum += item.amount), 0);
   const onClickHandle = () => setIsOpen(!isOpen);
   return (
      <div className="mini-cart" onClick={onClickHandle}>
         <i className="fa-solid fa-cart-shopping"></i>
         <span>Your cart</span>
         <span className="amount">{totalAmount}</span>

         {isOpen && (
            <div className="modal-popup">
               {items &&
                  items.map((item) => (
                     <CartItem
                        item={item}
                        key={item.id}
                        updateItemCart={updateItemCart}
                     />
                  ))}
               <div className="total-price">
                  <h4>Total Price</h4>
                  <span>${totalPrice}</span>
               </div>
               <div className="checkout">
                  <Link to="/checkout" className="btn btn--dark">
                     Checkout
                  </Link>
               </div>
            </div>
         )}
      </div>
   );
};

export default Cart;
