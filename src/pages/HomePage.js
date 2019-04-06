import React from "react";
import "../styles/HomePage.scss";

const HomePage = props => {
  const phon = props.info.map(item => (
    <div key={item.id}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "0.1",
          zIndex: "12",
          background: "black",
          cursor: "default"
        }}
      />
      <div className="about_phone_container">
        <div onClick={props.closeInfo} className="about_phone_closeButton">
          <i className="fas fa-window-close" />
        </div>
        <div className="about_phone_image">
          <img className="about_phone_image_img" src={item.image} alt="phone" />
          <h3>{item.price} $</h3>
        </div>
        <div className="about_phone_info">
          <div className="about_info_container">
            <h3>{item.model}</h3>
            <p>{item.longDescription}</p>
          </div>
        </div>
        <button onClick={() => props.onClick(props.info[0])}>
          Add to cart
        </button>
      </div>
    </div>
  ));
  return (
    <div className="homePage_phone">
      {phon}
      <img className="homePage_img" src={props.phone.image} alt="teleofon" />

      <div className="homePage_info_container">
        <p className="homePage_model">{props.phone.model}</p>
        <p className="homePage_price">{props.phone.price} $</p>
      </div>

      <div className="homePage_button_info" onClick={props.infoPhone}>
        <i className="fas fa-info" />
      </div>

      <div
        className="homePage_button_addToCart"
        onClick={() => props.onClick(props.phone)}
      >
        <i className="fas fa-cart-plus" />
      </div>
      <div className="homePage_popups">
        <p id={`popup_add_${props.phone.id}`} className="homePage_popup_add">
          Added to cart
        </p>
        <p
          id={`popup_info_${props.phone.id}`}
          className="homePage_popup_already"
        >
          Product is already in cart
        </p>
      </div>
    </div>
  );
};

export default HomePage;
