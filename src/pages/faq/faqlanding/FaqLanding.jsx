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
      <div className={`pink_blur ${status ? 'active' : ''}`}></div>
      <div className={`smallpink ${status ? 'active' : ''}`}></div>
      <div className={`blue_blur ${status ? 'active' : ''}`}></div>
      <div className="content_wrap">
        <h1>Frequently Asked Questions</h1>
        <p>
          The Smart Sales Assistant can also provide insights into customer
          behavior and preferences, allowing you to optimize your marketing and
          sales strategies.
        </p>
        <div className="border_line"></div>
      </div>
    </section>
  );
};

export default FaqLanding;
