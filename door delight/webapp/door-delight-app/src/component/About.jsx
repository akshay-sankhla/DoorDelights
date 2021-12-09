import React from "react";
import Restaurent from "../images/Hrestaurent.jpg";
import Cuisine from "../images/Hcuisine.jpg";
import Chef from "../images/Himage.jpg";
import HeaderLogin from "../component/HeaderLogin";
export const About = () => {
  return (
    <div
      className="bg-dark"
      style={{ backgroundColor: "rgba(17, 16, 16, 0.33)" ,display:"flex",
      flexDirection:"column"}}
    >
      <HeaderLogin />
      <div className="wrapperH" style={{}}>
        <div className="cardH">
          <img src={Restaurent} alt="Restaurant" />
          <div className="infoH">
            <h1>Restaurants Search</h1>
            <p> Choose your favorite Restaurent from your favourite hotel</p>
          </div>
        </div>
        <div className="cardH">
          <img src={Cuisine} alt="Cusine" />
          <div className="infoH">
            <h1>Cuisines</h1>
            <p>Variety of food to choose from </p>
          </div>
        </div>
        <div className="cardH">
          <img src={Chef} alt="Chef"/>
          <div className="infoH">
            <h1>Fast and safe Delievery</h1>
            <p>Tasty food whenever you want wherever you want</p>
          </div>
        </div>
      </div>
      <div className="aboutus my-5">
        Door Delights has online menus from the staggering selection of
        restaurants around you. Simply select your city and search for cuisine
        type, restaurants. The restaurant index also includes address and
        opening hours. No online restaurents is too difficult for Door Delights
        ! searching service has never been made easier!
      </div>
      <footer className="bg-dark text-center text-lg-start" style={{ marginTop:"auto"}}>
        <div className="text-center p-3 fs-1">
          © 2020 Copyright:
          <a href="/about">Admin@DoorDelights.com</a>
        </div>
      </footer>
    </div>
  );
};

export default About;
