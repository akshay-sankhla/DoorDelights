import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import swal from "sweetalert";


export default class Dsignup extends Component {
  constructor() {
    super();
    this.state = {
      emaild: "",
      password: "",
      city:"",
      data: [],
      signin:'',
    };
    this.signup = this.signup.bind(this);
  }
  signup(event) {
    event.preventDefault();
    var new_signup = {
      emailid: this.state.emailid,
      password: this.state.password,
      city: this.state.city
    }; axios
      .post("http://localhost:8081/api/user/register", new_signup)
      .then(swal("Succesfully Registered", "Welcome To Door Delights", "success"),
      this.setState({ isSignin: 1 })
      )
      .catch((e) => {
        swal(e.response.data, "Please login", "error");}
      );
  }
  render() {
    if(this.state.isSignin === 1){
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div className="container-fluid">
          <form action="#" onSubmit={this.signup}>
            <div className="row">
              <div className=" banner col-md-5 text-center ">
                Welcome to Door Delights
              </div>
              <div className=" col-md-4 text-center">
                <div className="form-login">
                  <h1 className="loginhead">Register</h1>
                  <hr style={{ backgroundColor: "black" }}></hr>
                  <br></br>

                  <input
                    type="email"
                    id="emailid"
                    className="form-control input-sm chat-input px-3"
                    placeholder="Email"
                    value={this.state.emailid}
                    onChange={(e) => {
                      this.setState({ emailid: e.target.value });
                    }}
                    required
                  />

                  <br></br>
                  <br></br>
                  <input
                    type="password"
                    id="userPassword"
                    className="form-control input-sm chat-input"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    required
                  />
                  <br></br>
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
                    <option value="23">Kanpur</option>
                  </select>
                  <br></br>
                  <div className="wrapper">
                    <button
                      className="btn btn-success btn-md w-50 my-2 p-3 fs-2"
                      type="submit"
                      color="black"
                      style={{ backgroundColor: "black" }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
