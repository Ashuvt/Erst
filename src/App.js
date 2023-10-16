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




function App() {
  var menu;
  const location = useLocation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    menu = menuList.map(menuItem => menuItem.submenu.map(submenuItem => submenuItem.link)).flat();
    menu.push("/");    
    if(menu.includes(location.pathname)){
      setStatus(true);
    }else{
      setStatus(false);
    }
  }, [location.pathname]);



  return (
    <Fragment>
      
      { status && <Header /> }

      {status && <SideBar />}

      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      {status && <Footer /> }

    </Fragment>
  );
}

export default App;
