import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";



export default class DLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emaild: "",
      password: "",
      data: [],
      isLogin: 0,
    };
    this.authjwt = this.authjwt.bind(this);
  }
cancel=()=>{
  
}

  
  authjwt(event) {
    event.preventDefault();
    var new_token = {
      emailid: this.state.emailid,
      password: this.state.password,
    };
    axios
      .post("http://localhost:8081/api/user/login", new_token)
      .then((res) => {
        this.setState({ data: res.data });
        if (res.data) {
          console.log(res.data);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("emailid", res.data.emailid);
          sessionStorage.setItem("city", res.data.city);
          this.setState({ isLogin: 1 });
          swal("Login Successful", "Now you can add to Favourites", "success");
        }
      })
      .catch((e) => {
        swal(e.response.data, "Try Again", "error");
      });
      document.getElementById("formlogin").value="";
  }
  render() {
    if(this.state.isLogin === 1){
      return <Redirect to="/dashboard" />;
    }
      return (
        <div>
          <div className="container-fluid">
            <form action="#" id ="formlogin" onSubmit={this.authjwt}>
              <div className="row">
                <div className=" banner col-md-5 text-center ">
                  Welcome to Door Delights
                </div>
                <div className=" col-md-4 text-center">
                  <div className="form-login">
                    <h1 className="loginhead">Login</h1>
                    <hr style={{backgroundColor:"black"}}></hr>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input
                      type="email"
                      id="emailid"
                      className="form-control input-sm chat-input" style={{color: "black !important"}}
                      placeholder="Email"
                      value={this.state.emailid}
                      onChange={(e) => {
                        this.setState({ emailid: e.target.value });
                      }}
                      required
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <input
                      type="password"
                      id="password"
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
                    
                
                  
                    <div className="wrapper">
                      <button 
                        className="btn btn-success btn-md w-50 my-2 p-3 fs-2"
                        type="submit" style={{backgroundColor:"black"}}
                      >
                        Login
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
