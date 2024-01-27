import { useEffect, useState } from "react";
import "./Success.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { logoImage } from "../../utils/images/images";
import WOW from "wow.js";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { baseUrl, paymentSuccess } from "../../utils/apidata";

const Success = () => {
  
  const productList = localStorage.getItem("productIds");


  useEffect(() => {
    const wow = new WOW();
    wow.init();

  }, []);

  const navigate = useNavigate();

  const successApi = async () => {
    const token = localStorage.getItem("token");

    const productList = localStorage.getItem("productIds");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(`${baseUrl}/${paymentSuccess}`, {course_id:productList}, {headers});
      console.log("Success:::", response);
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
            Lorem, ipsum <span>Lorem, ipsum</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.50s">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            tenetur soluta error explicabo ratione consequatur!
          </p>
          {/* <NavLink to="/contact">
          <button className="primarybtn wow fadeInUp" data-wow-delay="0.75s">Know More</button>
          </NavLink> */}

          <button
            className="primarybtn wow fadeInUp"
            data-wow-delay="0.75s"
            onClick={() => navigate("/auth/home")}
          >
            Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Success;
