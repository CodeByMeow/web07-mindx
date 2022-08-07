import { createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => {
   return useContext(CartContext);
};
export default CartContext;
