import "./Cart.css";
const Cart = () => {
   return (
      <div className="mini-cart">
         <i className="fa-solid fa-cart-shopping"></i>
         <span>Your cart</span>
         <span className="amount">0</span>
      </div>
   );
};

export default Cart;
