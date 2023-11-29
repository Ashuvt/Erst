import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const redirectContext = createContext();

const RoutingContextProvider = ({ children }) => {
    
  const navigation = useNavigate();

  const signInHandler = () => {
    navigation("/comingsoon");
  };

  const signUpHandler = () => {
    navigation("/comingsoon");
  };

  const goToHome = () => {
    navigation("/home");
  }

  const allRedirectFunctions = {
    signInHandler,
    signUpHandler,
    goToHome
  };

  return (
    <redirectContext.Provider value={{ ...allRedirectFunctions }}>
      {children}
    </redirectContext.Provider>
  );
};

export default RoutingContextProvider;
