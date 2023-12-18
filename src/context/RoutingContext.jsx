import { toast } from 'react-toastify';
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAllToggler } from "../store/actions";

export const redirectContext = createContext();



const RoutingContextProvider = ({ children }) => {
const dispatch = useDispatch();

  const navigation = useNavigate();

  const resetAllState = () => {
    dispatch({type:resetAllToggler()})
  }

// For Login Page
  const signInHandler = () => {
    navigation("/signin");
    // /auth/signin
    // /comingsoon
  };

  // For Getstarted Page (Sign Up)
  const signUpHandler = () => {
    navigation("/getstarted");
    // /auth/getstarted
    // /comingsoon
  };

  // Web Home
  const goToHome = () => {
    navigation("/home");
  }

  // blog/:id  View Blog Detail
  const goToBlogDetail = (id) => {
    navigation(`/blogs/${id}`);
  }

  // Post Login OnBoarding Stepper
  const goToOnBoarding = () => {
    navigation("/auth/onboarding");
  }

  // Post Login Home Page
  const goToAuthHome = () => {
    navigation("/auth/home");
  }

  const toastSuccess = (message) => {
    toast.success(message);
  }

  const toastError = (error) => {
    toast.error(error);
  }

  const toastInfo = (info) => {
    toast.info(info);
  }

  const toastWarning = (warn) => {
    toast.info(warn);
  }

  const toastClear = () => {
    toast.dismiss();
  }

  const allRedirectFunctions = {
    resetAllState,
    signInHandler,
    signUpHandler,
    goToHome,
    goToBlogDetail,
    goToOnBoarding,
    goToAuthHome,


    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
    toastClear
  };

  return (
    <redirectContext.Provider value={{ ...allRedirectFunctions }}>
      {children}
    </redirectContext.Provider>
  );
};

export default RoutingContextProvider;
