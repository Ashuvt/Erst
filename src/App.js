import { Fragment, useEffect} from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import "./utils/i18n";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {resetAllToggler } from "./store/actions";
import SideBar from "./layouts/sidebar/SideBar";
import CourseSidebar from "./layouts/coursesidebar/CourseSidebar";
import { RoutoingData } from "./utils/routingData";
import CartPopup from "./layouts/cartpopup/CartPopup";

function App() {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: resetAllToggler() });
  }, [location.pathname]);

  return (
    <Fragment>
      <CartPopup />
      <SideBar />
      <CourseSidebar />
      <Routes>
        {RoutoingData.map((data) => {
          return (
            <Fragment key={data.id}>
              <Route path={data.path} element={data.component} />
            </Fragment>
          );
        })}
      </Routes>
    </Fragment>
  );
}

export default App;
