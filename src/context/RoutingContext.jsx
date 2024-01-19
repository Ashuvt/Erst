import { toast } from "react-toastify";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfileData } from "../store/actions";
import { getCartAction, resetAllToggler } from "../store/actions";
import {
  baseUrl,
  saveCourse,
  emailSubscribe,
  addToCart,
  getCart,
  getProfile,
  removeFromCart,
  checkout,
} from "../utils/apidata";
import axios from "axios";
import {
  GET_CARTT_REQUEST,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
} from "../store/apiConsts";

export const redirectContext = createContext();

const domainName = () => {
  // select only two values from below
  // net
  // ae
  return "ae";
};

const RoutingContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const resetAllState = () => {
    dispatch({ type: resetAllToggler() });
  };

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
  };

  // Web Home
  const goToHome = () => {
    navigation("/home");
  };

  // blog/:id  View Blog Detail
  const goToBlogDetail = (id) => {
    navigation(`/blogs/${id}`);
  };

  // Post Login OnBoarding Stepper
  const goToOnBoarding = () => {
    navigation("/auth/onboarding");
  };

  // Post Login Home Page
  const goToAuthHome = () => {
    navigation("/auth/home");
  };

  const toastSuccess = (message) => {
    toast.success(message);
  };

  const toastError = (error) => {
    toast.error(error);
  };

  const toastInfo = (info) => {
    toast.info(info);
  };

  const toastWarning = (warn) => {
    toast.warn(warn);
  };

  const toastClear = () => {
    toast.dismiss();
  };

  // Course Save API

  const saveCourseApi = async (courseId) => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${saveCourse}`,
        { course_id: courseId },
        { headers }
      );
      console.log(response);
      if (response?.data?.success) {
      } else {
        toastWarning("This Course is already added!");
      }
    } catch (error) {
      console.log(error);
      toastError("Something went wrong");
    }
  };

  // Email Subscribe API
  const emailSubscribeApi = async (emailId) => {
    try {
      const response = await axios.post(`${baseUrl}/${emailSubscribe}`, {
        email: emailId,
      });
      console.log("RES::", response);
      if (response?.data?.success) {
        toastSuccess("Submit SuccessFully!");
      }
    } catch (error) {
      console.log("ERROR::", error);
      toastError("something went wrong!");
    }
  };

  // Add To Cart
  const addToCartApi = async (courseId) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.post(
        `${baseUrl}/${addToCart}`,
        { course_id: courseId },
        { headers }
      );
      console.log("RES::", response);
      if (response?.data?.success) {
        toastSuccess("Course Added In Cart!");
        getCartApi();
      } else {
        toastWarning("Course Already added on cart");
      }
    } catch (error) {
      console.log("ERROR::", error);
      toastError("something went wrong!");
    }
  };

    // Get Profile APi
    const getProfileApi = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await axios.get(`${baseUrl}/${getProfile}`, { headers });
        if (response?.data.success) {
          dispatch({ type: getProfileData(), payload: response?.data?.data });
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

  // Get Cart Api
  const getCartApi = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    dispatch({
      type: GET_CART_REQUEST,
    });

    try {
      const response = await axios.get(`${baseUrl}/${getCart}`, { headers });
      if (response?.data?.success) {
        dispatch({
          type: GET_CART_SUCCESS,
          payload: response?.data?.data,
        });
      } else {
        dispatch({
          type: GET_CART_FAIL,
          payload: "Something went wrong!",
        });
      }
    } catch (error) {
      dispatch({
        type: GET_CART_FAIL,
        payload: "Something went wrong!",
      });
    }
  };

  // Remove Cart API
  const removeFromCartApi = async (courseId) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.post(
        `${baseUrl}/${removeFromCart}`,
        { cartItemId: courseId },
        { headers }
      );
      if (response?.status === 200) {
        getCartApi();
        toastSuccess(
          response?.data?.message || "Cart Item Removed Successfully!"
        );
      }
    } catch (error) {
      toastError(error?.message || "Something went wrong!");
    }
  };


  // Checkout API
  const checkoutApi = async () => {

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/${checkout}`,
        {},
        { headers }
      );
      if (response.data?.success) {
        window.open(response?.data?.data?.url, "_blank", "noreferrer");
      }
    } catch (error) {
      toastError(error?.message || "Something Went Wrong!")
    }
  };


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

    domainName,

    getProfileApi,
    saveCourseApi,
    addToCartApi,
    removeFromCartApi,
    getCartApi,
    emailSubscribeApi,
    checkoutApi
  };

  return (
    <redirectContext.Provider value={{ ...allRedirectFunctions }}>
      {children}
    </redirectContext.Provider>
  );
};

export default RoutingContextProvider;
