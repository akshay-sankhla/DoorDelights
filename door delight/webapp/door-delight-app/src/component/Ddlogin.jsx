import React, { Component } from "react";
import background from "../images/ref.jpg";
import '../css/DemoCss.css';
import Header from "./HeaderLogin";
import DLogin from "./DLogin";
import HomeBanner from "./HomeBanner";

export default class Ddlogin extends Component {

  
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <DLogin />
        <div className="midfav">Food From Your Favourite Restaurant</div>
        <HomeBanner />
      </div>
    );
  }
}
