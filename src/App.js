import { Fragment, useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import "./utils/i18n";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { languageChanges, resetAllToggler } from "./store/actions";
import SideBar from "./layouts/sidebar/SideBar";
import AddCartPopup from "./layouts/addcartpopup/AddCartPopup";
import CourseSidebar from "./layouts/coursesidebar/CourseSidebar";
import { RoutoingData } from "./utils/routingData";

function App() {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: resetAllToggler() });
  }, [location.pathname]);

  useEffect(() => {
    const defaultLanguage = localStorage.getItem("lang");
    if (defaultLanguage) {
      dispatch({ type: languageChanges(), payload: defaultLanguage });
      i18n.changeLanguage(defaultLanguage);
    } else {
      localStorage.setItem("lang", "en");
      dispatch({ type: languageChanges(), payload: "en" });
      i18n.changeLanguage("en");
    }
  }, []);

  return (
    <Fragment>
      <AddCartPopup />
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
