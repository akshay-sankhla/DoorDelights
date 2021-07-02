import axios from "axios";
import React, { useState } from "react";
import Heart from "react-heart";
import { useHistory } from "react-router";
import swal from "sweetalert";

export default function App(props) {
  const [active, setActive] = useState(props.active);
  const history = useHistory();
  const header = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  };
  const deleteFav = (restaurant) => {
    axios
      .delete(
        `http://localhost:8088/api/fav/restaurant?emailid=${sessionStorage.getItem(
          "emailid"
        )}&id=${restaurant.id}`,
        header
      )
      .then((res) => {
        props.myfav();
      })
      .catch((e) => {
        swal(e.response.data);
      });
  };
  const addToFav = (restaurant) => {
    const addrest = {
      emailid: sessionStorage.getItem("emailid"),
      restaurant: [
        {
          id: restaurant.id,
          name: restaurant.name,
          address: restaurant.location.address,
          cuisines: restaurant.cuisines,
          timings: restaurant.timings,
          aggregate_rating: restaurant.user_rating.aggregate_rating,
          average_cost_for_two: restaurant.average_cost_for_two,
          featured_image: restaurant.featured_image,
          phone_numbers: restaurant.phone_numbers,
        },
      ],
    };

    axios
      .post("http://localhost:8088/api/fav/restaurant", addrest, header)

      .catch((e) => {
        swal(e.response.data);
      });
  };

  return (
    <div style={{ width: "2rem", display: "flex" }}>
      <Heart
        isActive={active} //props.active tha
        onClick={() => {
          if (sessionStorage.getItem("token") != null) {
            setActive(!props.active);
            if (props.active) {
              deleteFav(props.data);
            } else {
              addToFav(props.data);
            }
          } else {
            swal("Oops", "Please Login First", "warning");
            history.push("/login");
          }
        }}
        inactiveColor="white"
        animationScale={1.25}
        style={{ marginBottom: "1rem" }}
      />
    </div>
  );
}
