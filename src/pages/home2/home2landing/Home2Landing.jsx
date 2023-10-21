import { useState, useEffect } from "react";
import "./Home2Landing.scss";
import WOW from "wow.js";

const Home2Landing = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const wow = new WOW();
    wow.init();

    const values = [0, 25, 50, 75, 50, 25];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCount(values[currentIndex]);
      currentIndex = (currentIndex + 1) % values.length;
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="home2_landing p_bottom p_top">
      <div className="content_wrap">
        <div className="text_content">
          <div className="dynamic wow slideInUp">
            <h1>Your</h1>
            <div className="text_box">
              <div
                className="gradient_wrap"
                style={{ transform: `translateY(${-count}%)` }}
              >
                <h1>Successful</h1>
                <h1>Analytical</h1>
                <h1>Thoughtful</h1>
                <h1>Successful</h1>
              </div>
            </div>
          </div>

          <h1 className="wow slideInUp">Business Strategy!</h1>
          <p className="wow slideInUp">
            This AI-powered tool can help businesses make data-driven decisions
            by providing deep insights into their operations, customers, and
            market trends. The Intelligent Analytics Suite can analyze large
            volumes of data in real-time and provide actionable recommendations
            that can help businesses optimize their processes and increase their
            revenue.
          </p>
        </div>
        <div className="btn_line wow slideInUp">
          <div className="left">
            <div className="left_beam"></div>
            <h6>
              15 DAYS FREE TRIAL NO <br /> CREDIT CARD REQUIRED
            </h6>
          </div>
          <button className="primarybtn">start free trial</button>
        </div>
      </div>
      <div className="primary_glass first"></div>
      <div className="primary_glass second"></div>
      <div className="secondary_glass first"></div>
      <div className="secondary_glass second"></div>
    </section>
  );
};

export default Home2Landing;
