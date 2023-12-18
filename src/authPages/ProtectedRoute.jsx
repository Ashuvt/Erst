import { useContext, useEffect } from "react";
import { redirectContext } from "../context/RoutingContext";

const ProtectedRoute = ({children}) => {
  const { signInHandler } = useContext(redirectContext);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token){      
        signInHandler();
    }
  });

  return  children ;
};

export default ProtectedRoute;
