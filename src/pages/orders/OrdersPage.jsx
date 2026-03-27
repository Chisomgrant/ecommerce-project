import React from "react";
import "./OrdersPage.css";
import Header from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import OrdersGrid from "./OrdersGrid";

const OrdersPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    fetchOrderData();
  }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="" href="orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders}/>
      </div>
    </>
  );
};

export default OrdersPage;
