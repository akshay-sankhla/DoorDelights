import axios from "axios";
import React, { Component } from "react";
import Header from "./Header";
import background from "../images/background.jpg";
import { Redirect } from "react-router-dom";
import Avatar from "react-avatar";
import swal from "sweetalert";
export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      cnfpassword: "",
      city: "",
      isChanged: 0,
      data: [],
    };
    this.editprofile = this.editprofile.bind(this);
  }
  editprofile(event) {
    event.preventDefault();

    var edit = {
      password: this.state.password,
      city: this.state.city,
    };
    var em = sessionStorage.getItem("emailid");
    console.log(em);
    if (this.state.password === this.state.cnfpassword) {
      sessionStorage.setItem("city", this.state.city);
      this.setState({ isChanged: 1 });

      axios
        .put(`http://localhost:8081/api/user/edit/${em}`, edit)
        .then(swal("Successfully", "Profile Edited", "success"))
        .catch((e) => console.log(e));
    } else {
      swal("Password Mismatch!", "Please try again!", "error");
      this.setState({ isChanged: 0 });
    }
  }
  render() {
    if (this.state.isChanged === 1) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Header searchOn= {false} />
        <div className="container-fluid ">
          <form action="#" onSubmit={this.editprofile}>
            <div className="row">
              <div className=" banner col-md-5 text-center "></div>
              <div className=" col-md-4 text-center">
                <div className="form-login" style={{marginTop:"30px"}}>
                  <h1 className="loginhead">Profile</h1>
                  <hr></hr>

                  <br></br>

                  <input
                    type="password"
                    id="password"
                    className="form-control input-sm chat-input px-3"
                    placeholder="New Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    required
                  />

                  <br></br>
                  <br></br>
                  <input
                    type="password"
                    id="cnfpassword"
                    className="form-control input-sm chat-input"
                    placeholder="Confirm Password"
                    value={this.state.cnfpassword}
                    onChange={(e) => {
                      this.setState({ cnfpassword: e.target.value });
                    }}
                    required
                  />
                  <br></br>
                  <select
                    id="select_id"
                    className="form-control chat-input chat-input px-3 "
                    style={{ height: "4rem" }}
                    value={this.state.city}
                    onChange={(e) => {
                      this.setState({ city: e.target.value });
                    }}
                  >
                    <option value="0" hidden>
                      Select City
                    </option>
                    <option value="4">Bengaluru</option>
                    <option value="3">Mumbai</option>
                    <option value="1">Delhi</option>
                    <option value="6">Hyderabad</option>
                    <option value="5">Pune</option>
                    <option value="7">Chennai</option>
                    <option value="11">Ahmedabad</option>
                  </select>

                  <hr></hr>
                  <div className="wrapper">
                    <button
                      className="btn btn-success btn-md w-50 my-2 p-3 fs-2"
                      type="submit"
                      style={{ backgroundColor: "black" }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div style={{ paddingLeft: "500px", display: "flex" }}>
          <Avatar
            color={Avatar.getRandomColor("sitebase", ["red", "black", "green"])}
            name={
              sessionStorage.getItem("token") != null
                ? sessionStorage.getItem("emailid")
                : "A"
            }
            size={200}
            round="100px"
          />{" "}
          <br />
          <hr />
        </div>
        <div style={{ paddingLeft: "440px", fontSize: "40px", marginTop: "20px" }}>
          <span style={{ paddingBottom: "10px", display: "flex" }}>
            {sessionStorage.getItem("token") != null ? (
              sessionStorage.getItem("emailid")
            ) : (
              <> Anonymous </>
            )}
          </span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div
          className="footer"
          style={{
            backgroundColor: "black",
            paddingBottom: "55px",
            color: "White",
            textAlign: "center",
            paddingTop: "25px",
            fontSize: "25px",
          }}
        >
          contact us at Admin@doorDelights.com
        </div>
      </div>
    );
  }
}
