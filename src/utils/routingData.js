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
        path:"/auth/signin"
    },
    {
        id:8,
        component:<GetStarted />,
        path:"/auth/getstarted"
    },
    {
        id:9,
        component:<OnBoardingSteppers />,
        path:"auth/onboarding"
    },
    {
        id:10,
        component:<Home1 />,
        path:"/auth/home"
    },
    {
        id:11,
        component:<Explore />,
        path:"/auth/explore"
    },
    {
        id:12,
        component:<Live />,
        path:"/auth/live"
    },
    {
        id:13,
        component:<Groups />,
        path:"/auth/groups"
    },
    {
        id:14,
        component:<Saved />,
        path:"/auth/saved"
    },
    {
        id:15,
        component:<Profile />,
        path:"/auth/profile"
    },
    {
        id:16,
        component:<ExploreCourses />,
        path:"/explore/course"
    },
    {
        id:17,
        component:<ExploreDetail />,
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