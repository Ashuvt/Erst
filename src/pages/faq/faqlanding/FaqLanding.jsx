import "./FaqLanding.scss";
import { useEffect, useState } from "react";

const FaqLanding = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 500);
  }, []);

  return (
    <section className="faq_landing">
      <div className="pink_blur wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="smallpink wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="blue_blur wow zoomIn" data-wow-delay="0.5s" data-wow-duration="1.5s"></div>
      <div className="content_wrap p_bottom">
        <h1 className="wow fadeInUp">Lorem ipsum dolor consectetur.</h1>
        <p className="wow fadeInUp" data-wow-delay="0.3s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga distinctio voluptatem adipisci assumenda. Assumenda iure aperiam corporis, odit reiciendis fuga. Cupiditate, nostrum placeat.
        </p>
        <div className="border_line wow zoomIn" data-wow-delay="0.4s"></div>
      </div>
    </section>
  );
};

export default FaqLanding;
