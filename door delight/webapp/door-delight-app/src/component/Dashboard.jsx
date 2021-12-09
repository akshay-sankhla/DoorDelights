import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import { HiLocationMarker } from "react-icons/hi";
import background from "../images/background.jpg";
import "../css/DashBoard.css";
import axios from "axios";
import PaginationNav from "./PaginationNav";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      token: "",
      d: [],
      fav: [],
      isFavOn: false,
      isSearch: false,
      pageIndex: 0,
      city: "",
    };

    this.search = this.search.bind(this);
    this.changePageIndex = this.changePageIndex.bind(this);
  }

  search = (e) => {
    e.preventDefault();
    let query = e.target[0].value;
    axios
      .get(
        `http://localhost:8012/api/search/${sessionStorage.getItem(
          "city"
        )}/${query}`
      )
      .then((res) => {
        console.log(
          `http://localhost:8012/api/search/${sessionStorage.getItem(
            "city"
          )}/${query}`
        );
        this.setState({ d: res.data.restaurants });
        this.setState({ isSearch: true });
      });
  };
  setFavOn = () => {
    this.setState({
      isFavOn: true,
    });
  };
  setFavOff = () => {
    this.setState({
      isFavOn: false,
    });
  };
  myfav = () => {
    axios
      .get(
        `http://localhost:8088/api/fav/restaurant?emailid=${sessionStorage.getItem(
          "emailid"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        this.setState({
          isFavOn: true,
          fav: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
        // swal(error.response.data, "You haven't Added any Restaurant Yet!", "warning");
      });
  };
  getPageRest(pageIndex) {
    return this.state.d.slice(pageIndex * 6, pageIndex * 6 + 6);
  }
  changePageIndex(newPageIndex) {
    console.log(this.state.d.length / 6);
    if (newPageIndex > -1 && newPageIndex < Math.floor(this.state.d.length / 6))
      this.setState({ pageIndex: newPageIndex });
  }
  componentDidMount() {
    if (sessionStorage.getItem("city")) {
      axios
        .get(
          `http://localhost:8012/api/search/city/${sessionStorage.getItem(
            "city"
          )}`
        )
        .then((res) => {
          this.setState({
            d: res.data.restaurants,
          });
        });
    } else {
      axios.get(`http://localhost:8012/api/search/city/1`).then((res) => {
        this.setState({
          d: res.data.restaurants,
        });
      });
    }

    if(sessionStorage.getItem("token") != null){ 
      axios
      .get(
        `https://developers.zomato.com/api/v2.1/cities?city_ids=${sessionStorage.getItem(
          "city"
        )}`,
        { headers: { "user-key": "5ffb698e3d9a8ea8d51fb8847c216058" } }
      )
      .then((c) => {
       this.setState({ city: c.data.location_suggestions[0].name});
        console.log(c.data.location_suggestions[0].name);
      });
    } else {
      this.setState({city : "Delhi"});
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "1000px",
          width: "auto",
          height: "auto",
          backgroundAttachment: "fixed",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Header
          search={this.search}
          favhandler={this.myfav}
          setFavOn={this.setFavOn}
          setFavOff={this.setFavOff}
          searchOn={true}
        />

        <div className="d-flex justify-content-between align-items-center">
          <div>
            {this.state.isSearch ? (
              <p className="heading1">Search Results:</p>
            ) : this.state.isFavOn ? (
              <p className="heading1">Your Favorites:</p>
            ) : (
              <p className="heading1">Recommended for you:</p>
            )}
          </div>
          <div style={{fontSize: "30px", marginRight: "20px", fontWeight: "bold", marginBottom: "-10px"}}>
            <HiLocationMarker />
            <span> {this.state.city} </span>{" "}
          </div>
        </div>
        <hr
          style={{ color: "black", backgroundColor: "black", height: "5px" }}
        />
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {this.state.isFavOn
            ? this.state.fav?.map((home) => (
                <div key={home.id}>
                  <div className="col">
                    <Card
                      title={home.name}
                      cost={home.average_cost_for_two}
                      rating={home.aggregate_rating}
                      address={home.address}
                      cuisine={home.cuisines}
                      timing={home.timings}
                      featured_image={home.featured_image}
                      phone_numbers={home.phone_numbers}
                      data={home}
                      active={true}
                      myfav={this.myfav}
                    ></Card>
                  </div>
                </div>
              ))
            : this.getPageRest(this.state.pageIndex)?.map((home, index) => (
                <div>
                  <div key={this.state.pageIndex * 6 + index / 6}>
                    <div className="col">
                      <Card
                        title={home.restaurant.name}
                        cost={home.restaurant.average_cost_for_two}
                        rating={home.restaurant.user_rating.aggregate_rating}
                        address={home.restaurant.location.address}
                        cuisine={home.restaurant.cuisines}
                        timing={home.restaurant.timings}
                        featured_image={home.restaurant.featured_image}
                        phone_numbers={home.restaurant.phone_numbers}
                        data={home.restaurant}
                        active={false}
                      ></Card>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <br></br>
        <br></br>
        {this.state.isFavOn ? (
          <></>
        ) : (
          <PaginationNav
            pageIndex={this.state.pageIndex}
            numOfPages={Math.floor(this.state.d.length / 6)}
            changePageIndex={this.changePageIndex}
          />
        )}

        <footer className="dbfooter" style={{ marginTop: "auto" }}>
          <p>Contact Us : doorDelights@gmail.com </p>
        </footer>
      </div>
    );
  }
}
