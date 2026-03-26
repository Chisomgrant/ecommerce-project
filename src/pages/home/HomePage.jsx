import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";

const HomePage = ({cart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="" href="home-favicon.png" />

      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>
  );
};

export default HomePage;
