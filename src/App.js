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
      {/* {status && <Header />}
      {status && <SideBar />} */}

<Header />
<SideBar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about_our_services" element={<AboutOurServices />}></Route>
        <Route path="/software_developer" element={<SoftwareDeveloper />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blogs/:id" element={<BlogDetail />}></Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      {/* {status && <Footer />} */}
    </Fragment>
  );
};

export default App;
