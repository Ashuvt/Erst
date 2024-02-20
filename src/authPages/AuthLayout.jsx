import { Fragment, useContext } from "react";
import CoursesHeader from "./components/coursesheader/CoursesHeader";
import { redirectContext } from "../context/RoutingContext";
import { useEffect } from "react";


const AuthLayout = ({ children }) => {
  const { getProfileApi, getCartApi, getCouponApi } =
    useContext(redirectContext);

  useEffect(() => {
    getProfileApi();
    getCartApi();
    getCouponApi();
  }, []);

  return (
    <Fragment>
      <CoursesHeader />
      
      <div className="header_filler"></div>
      {children}
    </Fragment>
  );
};

export default AuthLayout;
