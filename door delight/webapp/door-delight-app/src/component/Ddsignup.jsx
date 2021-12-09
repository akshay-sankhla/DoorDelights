import React, { Component } from 'react'
import background from "../images/ref.jpg";
import "../css/DemoCss.css";
import Header from "./HeaderSignup";
import Dsignup from "./Dsignup";
import HomeBanner from "./HomeBanner";

export default class Ddsignup extends Component {
    render() {
        return (
          <div>
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
              <Dsignup />
              <div className="midfav">Food From Your Favourite Restaurant</div>
              <HomeBanner />
            </div>
          </div>
        );
    }
}
