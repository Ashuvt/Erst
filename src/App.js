import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import { menuList } from "./utils/data/data";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
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
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./authPages/login/Login";

function App() {
  var menu;
  const location = useLocation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    menu = menuList
      .map((menuItem) =>
        menuItem.submenu.map((submenuItem) => submenuItem.link)
      )
      .flat();
    menu.push("/");
    if (menu.includes(location.pathname)) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Provider store={store}>
        {/*{status && <SideBar />} */}




        <AddCartPopup />
        {/* <Header /> */}
        <SideBar />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/about_our_services"
            element={<AboutOurServices />}
          ></Route>
          <Route
            path="/software_developer"
            element={<SoftwareDeveloper />}
          ></Route>
          <Route path="/new_technology" element={<NewTechnology />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blogs/:id" element={<BlogDetail />}></Route>
          <Route path="/*" element={<ErrorPage />} />




          {/* Auth Routes */}



          <Route path="/login" element={<Login />} />





        </Routes>
        {/* <Footer /> */}







      </Provider>
    </Fragment>
  );
}

export default App;
