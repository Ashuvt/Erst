import "./HomeLanding.scss";
import { useContext } from "react";
import { redirectContext } from "../../../context/RoutingContext";

const HomeLanding = ({ t }) => {
  const { signUpHandler, domainName } = useContext(redirectContext);

  return (
    <section className="home1landing p_bottom">
      <div
        className="purple_blur a wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div
        className="purple_blur b wow zoomIn"
        data-wow-delay="0.5s"
        data-wow-duration="1.5s"
      ></div>
      <div className="content_wrap">
        <h1 className="wow fadeInUp">{t("homeLandingTitle")}</h1>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          {t("homeLandingPara")}
        </p>
        <br />

        {domainName() === "ae" && <button
          type="button"
          className="primarybtn wow fadeInUp"
          data-wow-delay="0.4s"
          onClick={signUpHandler}
        >
          {t("homeLandingBtn")}
        </button> }
      </div>
    </section>
  );
};
export default HomeLanding;
