import React from "react";
import myImage from '../assets/images/home/img2.jpg';
import Products from "./Products";

const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="card text-white">
      <img src={myImage} className="d-block w-100" alt="IPhone" height="550px"/>
        <div className="container card-img-overlay d-flex  flex-column justify-content-center">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
        
        </div>
      </div>
    </div>
    <Products />
    </>
  );
};

export default Home;
