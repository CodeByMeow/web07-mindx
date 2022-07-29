import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });
  const isProductExist = (id) => {
    return cart.items.findIndex((item) => id === item.id);
  };
  const addToCart = (product, amount = 1) => {
    const { items } = cart;
    const item = { ...product, amount: amount };
    const index = isProductExist(product.id);
    if (index != -1) {
      items[index].amount += 1;
    } else {
      items.push(item);
    }
    setCart({ ...cart, items });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
