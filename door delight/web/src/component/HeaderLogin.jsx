import React, { Component } from "react";
import { Link } from "react-router-dom";
import DDicon from "./DDicon";
import {Nav, Navbar} from 'react-bootstrap';


export default class HeaderLogin extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"black"}}>
      <Navbar.Brand href="/dashboard"><DDicon/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about" style={{color:"white"}}>About</Nav.Link>
        </Nav>
        <Nav>
      
        <div className="text-end ">
                <Link to="/register">
                  <button type="button" className="btn btn-warning me-5 fs-1">
                    Register
                  </button>
                </Link>
              </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}