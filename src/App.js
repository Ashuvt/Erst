import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Careers from "./pages/careers/Careers";
import Blogs from "./pages/blogs/Blogs";
import Faq from "./pages/faq/Faq";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import ContactUs from "./pages/contactus/ContactUs";

import Login from "./authPages/login/Login";
import GetStarted from "./authPages/getStarted/GetStarted";

import ErrorPage from "./pages/error/ErrorPage";
import SideBar from "./layouts/sidebar/SideBar";


import "./utils/i18n";



import Home2 from "./pages/home2/home2";

import Shop from "./pages/shop/Shop";

import AboutOurServices from "./pages/aboutourservices/AboutOurServices";
import SoftwareDeveloper from "./pages/softwaredeveloper/SoftwareDeveloper";
import NewTechnology from "./pages/newtechnology/NewTechnology";
import AddCartPopup from "./layouts/addcartpopup/AddCartPopup";


import OnBoardingSteppers from "./authPages/onboardingstepper/OnBoardingSteppers";
import Home1 from "./authPages/home1/Home1";
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
import ComingSoon from "./pages/comingsoon/ComingSoon";









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
         
          <Route path="/" element={<Home />} />          
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/*" element={<ErrorPage />} />
         
         




          {/* <Route path="/home2" element={<Home2 />} /> */}

          {/* <Route
            path="/about_our_services"
            element={<AboutOurServices />}
          ></Route> */}
          {/* <Route
            path="/software_developer"
            element={<SoftwareDeveloper />}
          ></Route> */}
          {/* <Route path="/new_technology" element={<NewTechnology />}></Route> */}
          {/* <Route path="/shop" element={<Shop />}></Route> */}
         

          {/* Auth Routes */}

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/getstarted" element={<GetStarted />} />
          {/* <Route path="/auth/onborading" element={<OnBoardingSteppers />} /> */}

          {/* <Route path="/auth/home" element={<Home1 />} /> */}
          {/* <Route path="/auth/explore" element={<Explore />} /> */}
          {/* <Route path="/auth/live" element={<Live />} /> */}
          {/* <Route path="/auth/groups" element={<Groups />} /> */}
          {/* <Route path="/auth/saved" element={<Saved />} /> */}
          {/* <Route path="/auth/profile" element={<Profile />} /> */}
          {/* <Route path="/explore/course" element={<ExploreCourses />} /> */}
          {/* <Route path="/explore/:detail" element={<ExploreDetail />} /> */}

     


        </Routes>
    </Fragment>
  );
}

export default App;
