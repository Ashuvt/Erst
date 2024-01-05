import { toast } from 'react-toastify';
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartCount, resetAllToggler } from "../store/actions";
import {baseUrl, saveCourse, emailSubscribe, addToCart, getCart} from "../utils/apidata";
import axios from 'axios';

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
    // comingsoon
    // signin
  };

  // For Getstarted Page (Sign Up)
  const signUpHandler = () => {
    navigation("/getstarted");
    // comingsoon
    // getstarted
  };

  // For Forgot Password
const goToForgotPassword = () => {
  navigation("/forgotpassword");
}

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
    toast.warn(warn);
  }

  const toastClear = () => {
    toast.dismiss();
  }


// Course Save API
  
  const saveCourseApi = async(courseId) => {
    const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  
   try {
    const response = await axios.post(`${baseUrl}/${saveCourse}`,{course_id:courseId},{headers})
    console.log(response);
    if(response?.data?.success){

    }else{
      toastWarning("This Course is already added!");
    }
   } catch (error) {
    console.log(error);
    toastError("Something went wrong");
   }
  }


  // Email Subscribe API
  const emailSubscribeApi = async(emailId) => {
    try { 
        const response = await axios.post(`${baseUrl}/${emailSubscribe}`, {email:emailId})
        console.log("RES::", response);
        if(response?.data?.success){
          toastSuccess("Submit SuccessFully!")
        }
    } catch (error) {
      console.log("ERROR::" ,error);
      toastError("something went wrong!")
    }
  };

  // Add To Cart
  const addToCartApi = async(courseId) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try { 
        const response = await axios.post(`${baseUrl}/${addToCart}`, {course_id:courseId}, {headers})
        console.log("RES::", response);
        if(response?.data?.success){
          toastSuccess("Course Added In Cart!");
          getCartApi();
        }else{
          toastWarning("Course Already added on cart");
        }
    } catch (error) {
      console.log("ERROR::" ,error);
      toastError("something went wrong!")
    }
  };

  const getCartApi = async () => {   
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    }; 
    try {
      const response = await axios.get(`${baseUrl}/${getCart}`, { headers });
      if (response?.data?.success) {       
        dispatch({type:addCartCount(), payload:response?.data?.data?.length})
      } else {
        dispatch({type:addCartCount(), payload:0})
      }
    } catch (error) {
      dispatch({type:addCartCount(), payload:0})
    }
  }


  const allRedirectFunctions = {
    resetAllState,
    signInHandler,
    signUpHandler,
    goToHome,
    goToBlogDetail,
    goToOnBoarding,
    goToAuthHome,
    goToForgotPassword,

    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
    toastClear,
    saveCourseApi,
    emailSubscribeApi,
    addToCartApi,
    getCartApi
  };

  return (
    <redirectContext.Provider value={{ ...allRedirectFunctions }}>
      {children}
    </redirectContext.Provider>
  );
};

export default RoutingContextProvider;
