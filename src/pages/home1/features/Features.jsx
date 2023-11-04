import { useEffect } from "react";
import "./Features.scss";
import WOW from "wow.js";

const Features = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="features p_top p_bottom">
      <div className="content_wrap">
        <div className="card active a wow fadeInUp">
          <h5>Lorem, ipsum dolor.</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eligendi magnam facere inventore cumque doloribus aliquam magni nesciunt, necessitatibus fuga recusandae quod ut. Pariatur nostrum eveniet ratione veniam dignissimos amet? Harum, impedit!</p>
        </div>
        <div className="card b wow fadeInUp">
          <h5>Lorem, ipsum dolor.</h5>
          <p>Lorem ipsum dolor sit, sciunt, necessitatibus fuga recusandae quod ut. Pariatur nostrum eveniet ratione veniam dignissimos amet? Harum, impedit!</p>
        </div>

        <div className="card c wow fadeInUp">
          <h5>Lorem, ipsum dolor.</h5>
          <p>Lorem ipsum dolor sit, e cumque doloribus aliquam magni nesciunt, necessitatibus fuga recusandae quod ut. Pariatur nostrum eveniet ratione veniam dignissimos amet? Harum, impedit!</p>
        </div>
        <div className="card d wow fadeInUp">
          <h5>Lorem, ipsum dolor.</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eligendi magnam facere inventore cumque doloribus aliquam magni nesciunt, necessitatibus fuga recusandae quod ut. Pariatur nostrum eveniet ratione veniam dignissimos amet? Harum, impedit!</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
