import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home1 from "./pages/home1/Home1";
import Faq from "./pages/faq/Faq";
import ErrorPage from "./pages/error/ErrorPage";
import ContactUs from "./pages/contactus/ContactUs";
import SideBar from "./layouts/sidebar/SideBar";
import Home2 from "./pages/home2/home2";
import Careers from "./pages/careers/Careers";
import Shop from "./pages/shop/Shop";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import AboutOurServices from "./pages/aboutourservices/AboutOurServices";
import SoftwareDeveloper from "./pages/softwaredeveloper/SoftwareDeveloper";
import NewTechnology from "./pages/newtechnology/NewTechnology";
import AddCartPopup from "./layouts/addcartpopup/AddCartPopup";
import Login from "./authPages/login/Login";
import GetStarted from "./authPages/getStarted/GetStarted";
import OnBoardingSteppers from "./authPages/onboardingstepper/OnBoardingSteppers";
import Home from "./authPages/home/Home";
import Explore from "./authPages/explore/Explore";
import Live from "./authPages/live/Live";
import Groups from "./authPages/groups/Groups";
import Profile from "./authPages/profile/Profile";
import Saved from "./authPages/saved/Saved";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "./store/actions";
import ExploreDetail from "./authPages/exploredetail/ExploreDetail";
import CourseSidebar from "./layouts/coursesidebar/CourseSidebar";
import ExploreCourses from "./authPages/explorecourses/ExploreCourses";
import RoadMap from "./pages/roadmap/RoadMap";
import About from "./pages/about/About";








function App() {






  var menu;
  const dispatch = useDispatch();
  const location = useLocation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({type:resetAllToggler()});
  }, [location.pathname]);

  return (
    <Fragment>       



        <AddCartPopup />
        <SideBar />
        <CourseSidebar />
        <Routes>
         
          <Route path="/" element={<Home1 />} />          
          <Route path="/home1" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/roadmap" element={<RoadMap />} />

          <Route
            path="/about_our_services"
            element={<AboutOurServices />}
          ></Route>
          <Route
            path="/software_developer"
            element={<SoftwareDeveloper />}
          ></Route>
          <Route path="/new_technology" element={<NewTechnology />}></Route>
          {/* <Route path="/shop" element={<Shop />}></Route> */}
          <Route path="/blogs/:id" element={<BlogDetail />}></Route>
          <Route path="/*" element={<ErrorPage />} />

          {/* Auth Routes */}

          <Route path="/login" element={<Login />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/onborading" element={<OnBoardingSteppers />} />

          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/live" element={<Live />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore/course" element={<ExploreCourses />} />
          <Route path="/explore/:detail" element={<ExploreDetail />} />

     


        </Routes>
    </Fragment>
  );
}

export default App;
