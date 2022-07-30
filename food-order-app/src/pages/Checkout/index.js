import { useState } from "react";
import "./Checkout.css";
import CartItem from "../../components/CartItem";
const Checkout = (props) => {
   const {
      cart: { items },
      updateItemCart,
   } = props;
   const [customer, setCustomer] = useState(() => {
      return {
         customerName: "",
         street: "",
         posCode: "",
         city: "",
      };
   });
   const onChangeHandler = (e) => {
      const field = { [e.target.name]: e.target.value };
      setCustomer({ ...customer, ...field });
   };
   const onSubmitHandler = (e) => {
      e.preventDefault();
   };
   if (!items.length)
      return (
         <div className="container">
            <div className="checkout-inner">Your cart is empty</div>
         </div>
      );
   return (
      <div className="container">
         <div className="checkout-inner">
            <div className="meal-order">
               {items &&
                  items.map((item) => (
                     <CartItem
                        item={item}
                        updateItemCart={updateItemCart}
                        key={item.id}
                     />
                  ))}
            </div>
            <form onSubmit={onSubmitHandler}>
               <div className="form-field">
                  <label htmlFor="customer-name">Your name</label>
                  <input
                     className="form-input"
                     type="text"
                     id="customer-name"
                     name="customerName"
                     onChange={onChangeHandler}
                  />
               </div>
               <div className="form-field">
                  <label htmlFor="customer-street">Street</label>
                  <input
                     className="form-input"
                     type="text"
                     id="customer-street"
                     name="street"
                     onChange={onChangeHandler}
                  />
               </div>
               <div className="form-field">
                  <label htmlFor="customer-poscode">PosCode</label>
                  <input
                     className="form-input"
                     type="text"
                     id="customer-poscode"
                     name="posCode"
                     onChange={onChangeHandler}
                  />
               </div>
               <div className="form-field">
                  <label htmlFor="customer-city">City</label>
                  <input
                     className="form-input"
                     type="text"
                     id="customer-city"
                     name="city"
                     onChange={onChangeHandler}
                  />
               </div>
               <div className="submition">
                  <button className="btn btn--dark">Checkout</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Checkout;
