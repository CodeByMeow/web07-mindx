import { useState } from "react";
import "./Checkout.css";
import CartItem from "../../components/CartItem";
import { useCartContext } from "../../contexts/CartContext";
const Checkout = () => {
   const {
      cart: { items },
      updateItemCart,
   } = useCartContext();
   const [customer, setCustomer] = useState({
      fullname: {
         value: "",
         error: "",
      },
      city: {
         value: "",
         error: "",
      },
      email: {
         value: "",
         error: "",
      },
   });
   const { fullname, city, email } = customer;
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setCustomer({
         ...customer,
         [name]: {
            ...customer[name],
            value: value,
         },
      });
   };
   const onSubmitHandler = (e) => {
      e.preventDefault();
      const validateCustomer = { ...customer };
      for (const key in customer) {
         const currentField = validateCustomer[key];
         switch (key) {
            case "fullname":
               currentField.value === "" || currentField.value === null
                  ? (validateCustomer[key].error = "fullname is required")
                  : (validateCustomer[key].error = null);
               break;
            case "city":
               currentField.value === "" || currentField.value === null
                  ? (validateCustomer[key].error = "city is required")
                  : (validateCustomer[key].error = null);
               break;
            case "email":
               currentField.value === "" || currentField.value === null
                  ? (validateCustomer[key].error = "email is required")
                  : (validateCustomer[key].error = null);
               break;
            default:
         }
      }

      const hasError = (validateData) =>
         Object.values(validateData).some((item) => item.error);
      if (hasError(validateCustomer)) {
         setCustomer(validateCustomer);
      } else {
         //Checkout
      }
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
                  <label htmlFor="fullname">Your name</label>
                  <input
                     className="form-input"
                     type="text"
                     id="fullname"
                     name="fullname"
                     onChange={onChangeHandler}
                  />
                  {!!fullname.error && (
                     <span className="error">{fullname.error}</span>
                  )}
               </div>
               <div className="form-field">
                  <label htmlFor="city">City</label>
                  <input
                     className="form-input"
                     type="text"
                     id="city"
                     name="city"
                     onChange={onChangeHandler}
                  />
                  {!!city.error && <span className="error">{city.error}</span>}
               </div>
               <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                     className="form-input"
                     type="text"
                     id="email"
                     name="email"
                     onChange={onChangeHandler}
                  />
                  {!!email.error && <span className="error">{email.error}</span>}
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
