import React, {Component} from 'react'
import DDicon from './DDicon'
import Avatar from 'react-avatar';

import {Nav, Navbar,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
export default class Header extends Component {
   
  constructor(props) {
      super(props);
      this.state= {
        d: [],
        text:'',
        isfavon: false
      }
      
    }
  
       
render(){
    return (
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }}>
        <Navbar.Brand onClick={this.props.setFavOff} href="/dashboard">
          <DDicon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href=" " style={{ color: "white" }}></Nav.Link>
          </Nav>
          <Nav>
                <Form style={{display: this.state.isfavon || !this.props.searchOn ? "none" : "block"}} inline onSubmit={this.props.search}>
                  <FormControl
                    style={{ color: "white" }}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success" type="submit">
                    Search
                  </Button>
                </Form>

            <NavDropdown
              title={
                <span className="headtitle" style={{ color: "white" , fontSize:"20px" }}>
                  {" "}
                  <Avatar
                    color={Avatar.getRandomColor("sitebase", [
                      "red",
                      "black",
                      "green",
                    ])}
                    name={
                      sessionStorage.getItem("token") != null
                        ? sessionStorage.getItem("emailid").split("@")[0]
                        : "A"
                    }
                    size={40}
                    round="30px"
                  />{" "}
                  <> </>
                  {sessionStorage.getItem("token") != null ? (
                    sessionStorage
                      .getItem("emailid")
                      .split("@")[0]
                      .charAt(0)
                      .toUpperCase() +
                    sessionStorage.getItem("emailid").split("@")[0].slice(1)
                  ) : (
                    <> Anonymous</>
                  )}
                </span>
              }
              id="collasible-nav-dropdown"
            >
              {sessionStorage.getItem("token") != null ? (
                <>
                  {" "}
                  <NavDropdown.Item onClick={()=>{this.props.favhandler();
                  this.setState({isfavon: true})
                  }}href="">
                    Favorites
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/editprofile">
                    Edit-profile
                  </NavDropdown.Item>{" "}
                </>
              ) : (
                <></>
              )}
              <NavDropdown.Divider />
              {sessionStorage.getItem("token") != null ? (
                <NavDropdown.Item
                  onClick={() => {
                    sessionStorage.clear();
                  }}
                  href="/login"
                >
                  Logout
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              )}
            </NavDropdown>

            <Form> </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );    
}
}