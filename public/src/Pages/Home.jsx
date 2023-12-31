import React from "react";
import backgroundImage from "../assets/noodles.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row align-items-center  pt-5 justify-content-center">
        <div className="col-12 col-md-6 pt-5">
          <p className="p-0 m-0 g-0 text-muted">Eliminating Hunger</p>
          <p className="display-3 pb-4" style={{ fontWeight: "400" }}>
           Your Donation may make thousands of street children smile.{" "}
            <span className="text-primary">Option</span> for it
          </p>
          <p>Based on UNESCO's Goal 2: Zero Hunger</p>
          <div className="d-flex gap-sm-4 mt-5 gap-2">
            <button
              className="btn btn-primary py-3 px-5"
              onClick={() => navigate("/send")}
            >
              Donate item
            </button>
            <button
              className="btn shadow-sm border border-muted py-3 px-5"
              onClick={() => navigate("/request")}
            >
              Request item
            </button>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 mx-auto text-center d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "40rem",
            height: "40rem",
          }}
        ></div>
      </div>
    </div>
      )
  }
  
   

export default Home;
