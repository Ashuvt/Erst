import { useState, useEffect } from "react";
import "./Home2Landing.scss";
import WOW from "wow.js";

const Home2Landing = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const wow = new WOW();
    wow.init();

    const values = [0, 50, 0];
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
          <div className="dynamic wow fadeInUp">
            <h1>True Cyber Security Is Preparing For</h1>
            <div className="text_box">
              <div
                className="gradient_wrap"
                style={{ transform: `translateY(${-count}%)` }}
              >
                <h1>What's Next.</h1>
                <h1>Not What Was Last.</h1>
              </div>
            </div>
          </div>
          <p className="wow fadeInUp">
          Enter "Platform Name," your gateway to the cutting-edge realm of cybersecurity training. Immerse in our diverse range of hands-on training labs and rich learning resources, designed to empower tech enthusiasts from all backgrounds to master the art of cybersecurity and stay one step ahead in this ever-evolving landscape.
          </p>
        </div>
        <div className="btn_line wow fadeInUp">
          <div className="left">
            <div className="left_beam"></div>
            <h6>
              15 DAYS FREE TRIAL NO <br /> CREDIT CARD REQUIRED
            </h6>
          </div>
          <button className="primarybtn">signup</button>
        </div>
      </div>
      <div className="primary_glass first"></div>
      <div className="primary_glass second"></div>
      {/* <div className="secondary_glass first"></div> */}
      {/* <div className="secondary_glass second"></div> */}
    </section>
  );
};

export default Home2Landing;
