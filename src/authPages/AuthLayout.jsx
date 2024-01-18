import { Fragment, useContext } from "react";
import CoursesHeader from "./components/coursesheader/CoursesHeader";
import { redirectContext } from "../context/RoutingContext";
import { useEffect } from "react";

const AuthLayout = ({children}) => {

  const {getProfileApi} = useContext(redirectContext);

  useEffect(() => {
    getProfileApi();
  },[]);

    return(
        <Fragment>
              <CoursesHeader /> 
             
              {
                children
              }
        </Fragment>
    )
}

export default AuthLayout;