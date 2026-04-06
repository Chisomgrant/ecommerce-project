import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";

const HomePage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="" href="home-favicon.png" />

      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};

export default HomePage;
