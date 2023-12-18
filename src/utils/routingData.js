// PreLogin Page
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Careers from "../pages/careers/Careers";
import Blogs from "../pages/blogs/Blogs";
import BlogDetail from "../pages/blogdetail/BlogDetail";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import ComingSoon from "../pages/comingsoon/ComingSoon";


//Auth Pages
import SignIn from "../authPages/signin/SignIn";
import GetStarted from "../authPages/getStarted/GetStarted";
import OnBoardingSteppers from "../authPages/onboardingstepper/OnBoardingSteppers";
import Home1 from "../authPages/home1/Home1";
import Explore from "../authPages/explore/Explore";
import Live from "../authPages/live/Live";
import Groups from "../authPages/groups/Groups";
import Profile from "../authPages/profile/Profile";
import Saved from "../authPages/saved/Saved";
import ExploreDetail from "../authPages/exploredetail/ExploreDetail";
import ExploreCourses from "../authPages/explorecourses/ExploreCourses";
import CourseSidebar from "../layouts/coursesidebar/CourseSidebar";


import ProtectedRoute from "../authPages/ProtectedRoute";

export const RoutoingData = [
    {
        id:0,
        component:<Home />,
        path:"/"
    },
    {
        id:2,
        component:<About />,
        path:"/about"
    },
    {
        id:3,
        component:<Careers />,
        path:"/careers"
    },
    {
        id:4,
        component:<Blogs />,
        path:"/blogs"
    },
    {
        id:5,
        component:<BlogDetail />,
        path:"/blogs/:id"
    },
    {
        id:6,
        component:<Contact />,
        path:"/contact"
    },
    {
        id:7,
        component:<SignIn />,
        path:"/signin"
    },
    {
        id:8,
        component:<GetStarted />,
        path:"/getstarted"
    },
    {
        id:9,
        component:<ProtectedRoute><OnBoardingSteppers /></ProtectedRoute>,
        path:"auth/onboarding"
    },
    {
        id:10,
        component:<ProtectedRoute><Home1 /></ProtectedRoute>,
        path:"/auth/home"
    },
    {
        id:11,
        component:<ProtectedRoute><Explore /></ProtectedRoute>,
        path:"/auth/explore"
    },
    {
        id:12,
        component:<ProtectedRoute><Live /></ProtectedRoute>,
        path:"/auth/live"
    },
    {
        id:13,
        component:<ProtectedRoute><Groups /></ProtectedRoute>,
        path:"/auth/groups"
    },
    {
        id:14,
        component:<ProtectedRoute><Saved /></ProtectedRoute>,
        path:"/auth/saved"
    },
    {
        id:15,
        component:<ProtectedRoute><Profile /></ProtectedRoute>,
        path:"/auth/profile"
    },
    {
        id:16,
        component:<ProtectedRoute><ExploreCourses /></ProtectedRoute>,
        path:"/explore/course"
    },    
    {
        id:17,
        component:<ProtectedRoute><ExploreDetail /></ProtectedRoute>,
        path:"/explore/:detail"
    },
    {
        id:18,
        component:<ComingSoon/>,
        path:"/comingsoon"
    },
    {
        id:19,
        component:<ErrorPage/>,
        path:"/*"
    },


]