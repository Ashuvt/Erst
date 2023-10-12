import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import { menuList } from "./utils/data/data";
import { useLocation } from "react-router-dom";

import Header from "./layouts/header/Header";
import Home1 from "./pages/home1/Home1";
import Footer from "./layouts/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  var menu;
  const location = useLocation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    menu = menuList.map(menuItem => menuItem.submenu.map(submenuItem => submenuItem.link)).flat();
    menu.push("/");    
    if(menu.includes(location.pathname)){
      setStatus(true);
    }else{
      setStatus(false);
    }
  }, []);



  return (
    <Fragment>
      { status && <Header /> }

      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {status && <Footer /> }




    </Fragment>
  );
}

export default App;
