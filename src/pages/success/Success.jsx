import { useContext, useEffect, useState } from "react";
import "./Success.scss";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { logoImage } from "../../utils/images/images";
import WOW from "wow.js";
import axios from "axios";
import { baseUrl, paymentSuccess } from "../../utils/apidata";
import { redirectContext } from "../../context/RoutingContext";

const Success = () => {
  
  const productList = localStorage.getItem("productIds");
const {toastSuccess} = useContext(redirectContext)

  useEffect(() => {
    const wow = new WOW();
    wow.init();

  }, []);

  const navigate = useNavigate();

  const successApi = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(`${baseUrl}/${paymentSuccess}`, {headers});
     if(response?.data?.success){
      toastSuccess(response?.data?.message);
     }
    } catch (error) {}
  };

  useEffect(() => {
    successApi()
  },[]);

  return (
    <section className="success">
      <div
        className="blur blue left wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div
        className="blur blue right wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div
        className="blur pink wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div className="content_wrap">
        <NavLink to="/">
          <img src={logoImage.logo} alt="logo" />
        </NavLink>
        <div className="content">
          <h1 className="wow fadeInUp">Payment Success</h1>
          <h2 className="wow fadeInUp" data-wow-delay="0.25s">
            Welcome to <span>Cybergain academy</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.50s">
          You're now enrolled in our cutting-edge cybersecurity courses. Get ready to elevate your skills and fortify your digital defenses. Welcome to a world of secure possibilities!
          </p> 

          <button
            className="primarybtn wow fadeInUp"
            data-wow-delay="0.75s"
            onClick={() => navigate("/auth/home")}
          >
           Start learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default Success;
