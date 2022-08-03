import { createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => {
   const cartCtx = useContext(CartContext);
   return cartCtx;
};
export default CartContext;
