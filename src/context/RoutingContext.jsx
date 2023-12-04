import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const redirectContext = createContext();

const RoutingContextProvider = ({ children }) => {

  const navigation = useNavigate();

// For Login Page
  const signInHandler = () => {
    navigation("/comingsoon");
    // /auth/signin
    // /comingsoon
  };

  // For Getstarted Page (Sign Up)
  const signUpHandler = () => {
    navigation("/comingsoon");
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

  const allRedirectFunctions = {
    signInHandler,
    signUpHandler,
    goToHome,
    goToBlogDetail,
    goToOnBoarding,
    goToAuthHome
  };

  return (
    <redirectContext.Provider value={{ ...allRedirectFunctions }}>
      {children}
    </redirectContext.Provider>
  );
};

export default RoutingContextProvider;
