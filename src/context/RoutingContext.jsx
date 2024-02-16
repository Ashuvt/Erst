import { toast } from "react-toastify";
import { createContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  coursedetailById,
  userLogOut,
  couponlist,
  applyCoupon,
} from "../utils/apidata";
import axios from "axios";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  EXPLORE_DETAIL_REQUEST,
  EXPLORE_DETAIL_SUCCESS,
  EXPLORE_DETAIL_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  GET_COUPONS_REQUEST,
  GET_COUPONS_FAIL,
  GET_COUPONS_SUCCESS,
  APPLY_COUPONS_REQUEST,
  APPLY_COUPONS_SUCCESS,
  APPLY_COUPONS_FAIL,
} from "../store/apiConsts";

export const redirectContext = createContext();

const domainName = () => {
  // select only two values from below
  // net
  // ae
  return "ae";
};

const RoutingContextProvider = ({ children }) => {
  const path = useLocation();

  const dispatch = useDispatch();

  const navigation = useNavigate();

  const resetAllToggles = () => {
    dispatch({ type: resetAllToggler() });
  };

  // For Login Page
  const signInHandler = () => {
    navigation("/comingsoon");
    // comingsoon
    // signin
  };

  // For Getstarted Page (Sign Up)
  const signUpHandler = () => {
    navigation("/comingsoon");
    // comingsoon
    // getstarted
  };

  // For Forgot Password
  const goToForgotPassword = () => {
    navigation("/comingsoon");
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

      if (response?.data?.success) {
        toastSuccess(response?.data?.message);
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
        // console.log("Profile::", response?.data.data);
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
    dispatch({
      type: REMOVE_CART_REQUEST,
    });
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
        if (path?.pathname.startsWith("/explore/")) {
          const id = path?.pathname.split("/").pop();
          if (id) {
            getCourseDetailApi(id);
          }
        }

        toastSuccess(
          response?.data?.message || "Cart Item Removed Successfully!"
        );
        dispatch({
          type: REMOVE_CART_SUCCESS,
        });
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
        `${baseUrl}/${checkout}`,{}, { headers });
      if (response.data?.success) {
        window.open(response?.data?.data?.url, "_blank", "noreferrer");
      }else{
        toastError("Something went wrong!");
      }
    } catch (error) {
      toastError(error?.message || "Something went wrong!");
      
    }
  };

  // Explore detail (view by courseId);
  const getCourseDetailApi = async (courseId) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    dispatch({
      type: EXPLORE_DETAIL_REQUEST,
    });

    try {
      const response = await axios.post(
        `${baseUrl}/${coursedetailById}`,
        { course_id: courseId },
        { headers }
      );

      if (response?.data?.success) {
        dispatch({
          type: EXPLORE_DETAIL_SUCCESS,
          payload: response?.data?.data,
        });
      } else {
        toastError("Something Went Wrong!");
        dispatch({
          type: EXPLORE_DETAIL_FAIL,
          payload: "Something went wrong!",
        });
      }
    } catch (error) {
      toastError(error?.message || "Something Went Wrong!");
      dispatch({
        type: EXPLORE_DETAIL_FAIL,
        payload: error?.message || "Something Went Wrong!",
      });
    }
  };

  // GetCoupon

  const getCouponApi = async () => {
    dispatch({
      type: GET_COUPONS_REQUEST,
    });

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.get(`${baseUrl}/${couponlist}`, { headers });
      if (response?.data?.success) {
        dispatch({
          type: GET_COUPONS_SUCCESS,
          payload: response?.data?.data,
        });
      } else {
        dispatch({
          type: GET_COUPONS_SUCCESS,
          payload: [],
        });
      }
    } catch (error) {
      console.log("Coupon:Error:::", error);
      dispatch({
        type: GET_COUPONS_FAIL,
        payload: error?.message || "Something Went Wrong!",
      });
    }
  };

  // Add To Cart
  const addToCartApi = async (courseId) => {
    dispatch({
      type: ADD_TO_CART_REQUEST,
    });

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
      if (response?.data?.success) {
        toastSuccess(response?.data?.data || "Course Added In Cart!");
        getCartApi();
        dispatch({
          type: ADD_TO_CART_SUCCESS,
        });

        if (path?.pathname == `/explore/${courseId}`) {
          getCourseDetailApi(courseId);
        }
      } else {
        toastWarning("Course Already added on cart");
      }
    } catch (error) {
      toastError("something went wrong!");
      dispatch({
        type: ADD_TO_CART_FAIL,
      });
    }
  };

  const logOutApi = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(`${baseUrl}/${userLogOut}`, { headers });
      console.log("LogOut::", response);

      if (response?.data?.success) {
        localStorage.clear();
        navigation("/signin");
        toastSuccess(response?.data?.message || "LogOut Success!");
      }
    } catch (error) {
      console.log(error);
    }
    localStorage.clear();
    navigation("/signin");
  };

  // Apply Coupon API
const applyCouponApi = async(code) => {
  dispatch({
    type: APPLY_COUPONS_REQUEST,
  });
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
      const response = await axios.post(`${baseUrl}/${applyCoupon}`, {coupon:`${code}`}, {headers});
      console.log("Apply:::", response);
      if(response?.data?.success){
        toastSuccess(response?.data?.message);
        dispatch({
          type: APPLY_COUPONS_SUCCESS,
        });
        getCartApi();
        getCouponApi();
      }

  } catch (error) {
    console.log(error);
    toastError(error?.message || "Something Went Wrog!");
    dispatch({
      type: APPLY_COUPONS_FAIL,
    });
  }
}
  

  const allRedirectFunctions = {
    resetAllToggles,
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
    checkoutApi,
    getCourseDetailApi,
    logOutApi,
    applyCouponApi,
    getCouponApi,
  };

  return (
    <redirectContext.Provider value={{ ...allRedirectFunctions }}>
      {children}
    </redirectContext.Provider>
  );
};

export default RoutingContextProvider;
