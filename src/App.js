import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import img1 from "./img/samsung.png";
import img2 from "./img/lg.png";
import img3 from "./img/iphonex.png";
import img4 from "./img/mate20.png";
import img5 from "./img/pixel3.png";
import img6 from "./img/iphoneXS.png";
import img7 from "./img/LG_g7.png";
import img8 from "./img/moto_g7.png";
import img9 from "./img/iphone7.png";
import img10 from "./img/razer_phone_2.png";
import img11 from "./img/htc_u12.png";
import img12 from "./img/lg_v40.png";
import img13 from "./img/galaxy_s10.png";
import "./styles/HomePage.scss";

const phones = [
  {
    name: "samsung",
    model: "Galaxy s9+",
    image: img1,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 399,
    id: 1,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "iphone",
    model: "IPhone X",
    image: img3,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 299,
    id: 2,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "xiaomi",
    model: "Xiaomi Mi 7",
    image: img2,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 999,
    id: 3,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "huawei",
    model: "Mate 20 Pro",
    image: img4,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 499,
    id: 4,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "google",
    model: "Pixel 3",
    image: img5,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 5,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "iphone",
    model: "IPhone XS",
    image: img6,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 6,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "lg",
    model: "LG G7 ThinQ",
    image: img7,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 7,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "motorola",
    model: "Moto G7",
    image: img8,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 8,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "iphone",
    model: "IPhone 7",
    image: img9,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 9,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "razer",
    model: "Razer Phone 2",
    image: img10,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 10,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "htc",
    model: "HTC U12+",
    image: img11,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 11,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "lg",
    model: "LG V40",
    image: img12,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 12,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  },
  {
    name: "samsung",
    model: "Galaxy s10",
    image: img13,
    description:
      "Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo Lorem ipsum dolo solo",
    price: 699,
    id: 13,
    amount: 1,
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit sed vel necessitatibus maiores minus consequuntur doloribus autem! Soluta nulla voluptatem sequi porro officia sit illo ullam nam aliquid atque?"
  }
];

class App extends Component {
  state = {
    infoPhone: [],
    clickPhone: []
  };

  handleClickAddingToCart = phone => {
    if (this.state.infoPhone.find(item => item.id === phone.id)) {
      this.handleClickCloseInfo();
      document.getElementById(`popup_info_${phone.id}`).style.display = "block";
      setTimeout(() => {
        if (document.getElementById(`popup_info_${phone.id}`) !== null) {
          document.getElementById(`popup_info_${phone.id}`).style.display =
            "none";
        }
      }, 1500);
    } else {
      phone.finalPrice = phone.price * phone.amount;
      let some = this.state.infoPhone;
      some.push(phone);

      this.setState({
        infoPhone: some
      });
      this.handleClickCloseInfo();

      document.getElementById(`popup_add_${phone.id}`).style.display = "block";

      setTimeout(() => {
        if (document.getElementById(`popup_add_${phone.id}`) !== null) {
          document.getElementById(`popup_add_${phone.id}`).style.display =
            "none";
        }
      }, 1500);
    }
  };

  handleClickInfoPhone = phone => {
    const arrayo = this.state.clickPhone;
    arrayo[0] = phone;
    this.setState({
      clickPhone: arrayo
    });
  };

  handleClickCloseInfo = () => {
    this.setState({
      clickPhone: []
    });
  };

  handleClickAddingAmount = (phone, e) => {
    var indexOfPhone = this.state.infoPhone.findIndex(
      item => item.id === phone.id
    );

    let phoneArray = this.state.infoPhone;

    if (e.target.className === "cart_button_amount_plus") {
      if (phone.amount <= 9) {
        phone.amount++;
        phone.finalPrice = phone.price * phone.amount;

        phoneArray.splice(indexOfPhone, 1, phone);

        this.setState({
          infoPhone: phoneArray
        });
      } else {
        phone.amount = 10;
        phone.finalPrice = phone.price * phone.amount;

        phoneArray.splice(indexOfPhone, 1, phone);

        this.setState({
          infoPhone: phoneArray
        });
      }
    } else if (e.target.className === "cart_button_amount_minus") {
      if (phone.amount > 1) {
        phone.amount--;
        phone.finalPrice = phone.price * phone.amount;

        phoneArray.splice(indexOfPhone, 1, phone);

        this.setState({
          infoPhone: phoneArray
        });
      } else {
        return null;
      }
    }
  };

  handleClickRemoveFromCart = phone => {
    var phoneArray = this.state.infoPhone;

    phone.amount = 1;

    var indexOfPhone = this.state.infoPhone.findIndex(
      item => item.id === phone.id
    );

    phoneArray.splice(indexOfPhone, 1);
    this.setState({
      infoPhone: phoneArray
    });
  };

  render() {
    const phonesUnic = phones.map(phone => (
      <HomePage
        phone={phone}
        key={phone.id}
        onClick={this.handleClickAddingToCart}
        infoPhone={() => this.handleClickInfoPhone(phone)}
        info={this.state.clickPhone}
        closeInfo={this.handleClickCloseInfo}
      />
    ));
    return (
      <Router>
        <nav>
          <Navigation />
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section className="homePage_section">
                <h3 className="homePage_header">Phones</h3>
                <div className="homePage_container">{phonesUnic}</div>
              </section>
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                phones={this.state.infoPhone}
                addAmount={this.handleClickAddingAmount}
                removePhone={this.handleClickRemoveFromCart}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
