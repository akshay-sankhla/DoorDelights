import React from 'react';
import '../css/Cardstyle.css';
import ref from '../images/ref.jpg'
import { MdSchedule } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import LikeButton from "../component/LikeButton"
import { AiFillStar } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
export default function Card(props) {
        return (
          <div className="wrapper">
            <div className="gfg">
              <div className="card">
                <div className="content">
                  <div className="card-body">
                    <img
                      src={
                        props.featured_image === "" ? ref : props.featured_image
                      }
                      className="card-img-top img-fluid "
                      style={{ height: "20rem" }}
                      alt="Not Avalible"
                    />
                    <div className="info">
                      <div>
                        <LikeButton
                          data={props.data}
                          active={props.active}
                          myfav={props.myfav}
                        />
                      </div>

                      <h1 style={{ fontWeight: "bold" }}>{props.title}</h1>
                      <br></br>
                      <p className="hover-text">
                        <span>
                          {" "}
                          <MdSchedule />
                          <span className="subhead">Timings </span>:{" "}
                          {props.timing}
                        </span>
                        <br />
                        <br></br>
                        <span>
                          <span className="subhead">Table for two</span> :{" "}
                          {props.cost}
                        </span>
                        <br />
                        <br></br>
                        <span>
                          <span className="subhead">Cuisine</span> :{" "}
                          {props.cuisine}
                        </span>
                      </p>
                    </div>
                    <div className="card-text">
                      <h2 className="card-title" style={{ display: "flex" }}>
                        {props.title}
                      </h2>

                      <span>
                        <HiLocationMarker /> {props.address}
                        <br />{" "}
                      </span>
                      {/* <span>table for two :<BiRupee/> {props.cost}</span> */}
                      <h6 className="card-phone" style={{ display: "flex" }}>
                        <AiFillPhone />
                        {props.phone_numbers}
                        <span style={{ marginLeft: "auto" }}>
                          {props.rating}
                          <AiFillStar style={{ color: "orange" }} />
                        </span>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }