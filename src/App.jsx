import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/CheckoutPages/CheckoutPage";
import "./App.css";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import NotFound from "./pages/NotFound";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
