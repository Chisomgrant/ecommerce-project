import React from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
