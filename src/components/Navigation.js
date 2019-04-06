import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation_container">
      <div className="navigation_logo">
        <NavLink to="/">
          <i className="fas fa-igloo" />
        </NavLink>
      </div>
      <div className="navigation_products">
        <NavLink to="/">Products</NavLink>
      </div>
      <div className="navigation_cart">
        <NavLink to="/cart">
          <span className="cart_icon">
            <i className="fas fa-shopping-cart" />
          </span>
          <span className="navigation_cart_text">My Cart</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
