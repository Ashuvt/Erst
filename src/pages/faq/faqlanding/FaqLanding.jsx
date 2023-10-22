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
        <h1 className="wow slideInUp">Frequently Asked Questions</h1>
        <p className="wow slideInUp" data-wow-delay="0.3s">
          The Smart Sales Assistant can also provide insights into customer
          behavior and preferences, allowing you to optimize your marketing and
          sales strategies.
        </p>
        <div className="border_line wow zoomIn"></div>
      </div>
    </section>
  );
};

export default FaqLanding;
