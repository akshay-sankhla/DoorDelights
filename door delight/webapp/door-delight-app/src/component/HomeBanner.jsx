import React from "react";
import Restaurent from "../images/Hrestaurent.jpg";
import Cuisine from "../images/Hcuisine.jpg";
import Chef from "../images/Himage.jpg"
export default function HomeBanner() {
  return (
    <div className="homebanner bg-dark">
      <section className=" pt-3 pb-3 ">
        <div className="wrapperH">
          <div className="cardH">
            <img src={Restaurent} alt="Restauant" />
            <div className="infoH">
              <h1>Restaurant's Search</h1>
              <p> Choose your favorite Restaurant from your favourite hotel</p>
            </div>
          </div>
          <div className="cardH">
            <img src={Cuisine} alt="Cuisine"/>
            <div className="infoH">
              <h1>Cuisines</h1>
              <p>Variety of food to choose from </p>
            </div>
          </div>
          <div className="cardH">
            <img src={Chef} alt="Chef"/>
            <div className="infoH">
              <h1>Fast and safe </h1>
              <p>Tasty food whenever you want wherever you want</p>
            </div>
          </div>
        </div>

        <div className="aboutus my-10">
          Door Delights has online menus from the staggering selection of
          restaurants around you. Simply select your city and search for cuisine
          type, restaurants. The restaurant index also includes address and
          opening hours. No online restaurents is too difficult for Door
          Delights ! searching service has never been made easier!
        </div>
        <footer
          className="bg-dark text-center text-lg-start"
          style={{ fontSize: "30px" }}
        >
          <div className="text-white p-3 fs-1">
            © 2020 Copyright:
            <a className="text-white" href="/dashboard">
              Door Delights
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
