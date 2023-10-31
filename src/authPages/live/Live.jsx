import { Fragment, useEffect } from "react";
import "./Live.scss";
import CoursesHeader from "../components/coursesheader/CoursesHeader";
import LiveSecTitle from "./livesectitle/LiveSecTitle";
import { images } from "../../utils/images/images";
import LiveVideoGrid from "./livevideogrid/LiveVideoGrid";
import { resetAllToggler } from "../../store/actions";
import { useDispatch } from "react-redux";
import WOW from "wow.js";

const Live = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const liveData = [
    {
      id:0,
      img:images.teacher,
      title:"Webinar name",
      text:"A short description about the webinar, it can be in two lines."
    },
    {
      id:1,
      img:images.teacher,
      title:"Webinar name",
      text:"A short description about the webinar, it can be in two lines."
    },
    {
      id:2,
      img:images.teacher,
      title:"Webinar name",
      text:"A short description about the webinar, it can be in two lines."
    },
    {
      id:3,
      img:images.teacher,
      title:"Webinar name",
      text:"A short description about the webinar, it can be in two lines."
    },
  ];

  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({type:resetAllToggler()});
  }

  return (
    <Fragment>
      <div className="header_filler"></div>
      <CoursesHeader />
      <section className="live_page" onClick={resetToggler}>
        <div className="screen_container">

          <LiveSecTitle 
            title="Recommended"
            text="There are some live webinars happening right now, Tune in to learn and exchange ideas with professional."
          />
          <LiveVideoGrid videoData={liveData} />


          <LiveSecTitle 
            title="RedTeam"
            text="There are some live webinars happening right now, Tune in to learn and exchange ideas with professional."
          />
          <LiveVideoGrid videoData={liveData} />
          <LiveVideoGrid videoData={liveData} />




        </div>
      </section>
    </Fragment>
  );
};

export default Live;
