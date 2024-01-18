import CoursesHeader from "../components/coursesheader/CoursesHeader";
import WelComeStrip from "../components/welcomestrip/WelComeStrip";
import "./Home1.scss";
import { Fragment, useContext, useEffect, useState } from "react";
import RecommendedModules from "./recommendedmodules/RecommendedModules";
import LiveSec from "./livesec/LiveSec";
import PopularSkillPath from "./popularskillpath/PopularSkillPath";
import BottomLive from "./bottomlive/BottomLive";
import SavedList from "./savedlist/SavedList";
import ExploreCard from "./explorecard/ExploreCard";
import OfferCard from "./offercard/OfferCard";
import FourBoxInfo from "../components/fourboxinfo/FourBoxInfo";
import { icon } from "../../utils/images/icons";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, authHomeApi, saveCourse } from "../../utils/apidata";
import { redirectContext } from "../../context/RoutingContext";
import AuthLayout from "../AuthLayout";

const Home1 = () => {
  const fourInfoData = [
    {
      id: 0,
      icon: icon.module,
      title: "36 Modules",
      text: "Get a certificate on completing the course. You can share it on your LinkedIn.",
    },
    {
      id: 1,
      icon: icon.courses,
      title: "09 Courses",
      text: "Across courses, you’ll get to test yourself within 10 quizzes and 5 projects.",
    },
    {
      id: 2,
      icon: icon.clock,
      title: "26h Learning Time",
      text: "Get in groups with other students and exchange ideas.",
    },
    {
      id: 3,
      icon: icon.quizandproject,
      title: "24 Quizzes",
      text: "Across courses, you’ll get to test yourself within 10 quizzes and 5 projects.",
    },
  ];

  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");

  const [recommaned, setRecommaned] = useState([]);
  const [cta, setCta] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetToggler = () => {
    dispatch({ type: resetAllToggler() });
  };

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const homeApi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${authHomeApi}`, {
        headers,
      });
      if (response.data.success) {
        setCta(response?.data?.data?.cta);
        setRecommaned(response?.data?.data?.recommaned_bundles);
      } else {
        setCta([]);
        setRecommaned([]);
      }
    } catch (error) {
      console.log("Error:::", error);
      setCta([]);
      setRecommaned([]);
    }
  };

  useEffect(() => {
    homeApi();
  }, []);

  return (
    <AuthLayout>
      <div className="header_filler"></div>
      <WelComeStrip
        title={`Welcome ${name}`}
        text="This is a short copy nudging user to explore app and courses"
      />
      <section className="home_content_screen" onClick={resetToggler}>
        <div className="screen_container">
          <div className="content_grid">
            <div className="left">
              <RecommendedModules recommaned={recommaned} />
              <FourBoxInfo title="Your Roadmap" data={fourInfoData} />
              {/* <LiveSec /> */}
              <PopularSkillPath />
            </div>
            <div className="right">
              <div className="in_progress">
                <h5 className="title_class wow fadeInRight">In progress</h5>
                <p className="dark wow fadeInRight" data-wow-delay="0.2s">
                  Pick a course and start learning
                </p>
                <p className="wow fadeInRight" data-wow-delay="0.3s">
                  You've got limited access Cybergain courses, Choose a course
                  and start your journey.
                </p>
                <button
                  type="button"
                  className="authbtn auth_primary wow fadeInRight"
                  data-wow-delay="0.4s"
                  onClick={() => navigate("/explore/course")}
                >
                  Cources
                </button>
              </div>
              <SavedList />
              <ExploreCard />
              <OfferCard />
            </div>
          </div>
          <BottomLive dataList={cta} />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Home1;
