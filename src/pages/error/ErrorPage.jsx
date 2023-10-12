import { useEffect, useState } from "react";
import "./ErrorPage.scss";
import { NavLink } from "react-router-dom";
import { logoImage } from "../../utils/images/images";


const ErrorPage = () => {
    const [flash, setFlash] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFlash(true);
        },500);
    }, []);

  return (
    <section className="error_page">
        <div className={`blur blue left ${flash ? 'flash' : ''}`}></div>
        <div className={`blur blue right ${flash ? 'flash' : ''}`}></div>
        <div className={`blur pink ${flash ? 'flash' : ''}`}></div>
      <div className="content_wrap">
        <NavLink to="/">
          <img src={logoImage.logo} alt="logo" />
        </NavLink>
        <div className="content">
          <h1>404</h1>
          <h2>
            Something’s <span>Not Right.</span>
          </h2>
          <p>We can’t find the page your are looking for.</p>
          <NavLink to="/">
          <button className="primarybtn">back to homepage</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
