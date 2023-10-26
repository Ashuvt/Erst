import {
  SIDEBAR_TOGGLER,
  ADD_CART_POPUP_TOGGLER,
  NOTIFICATION_TOGGLER,
  PROFILE_TOGGLER,
} from "../consts";

const initialToggleState = {
  sidebarStatus: false,
  cartPopupStatus: false,
  notificationStatus: false,
  profileStatus: false,
};

export const toggleReducer = (state = initialToggleState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLER:
      return { ...initialToggleState, sidebarStatus: action.payload };

    case ADD_CART_POPUP_TOGGLER:
      return { ...initialToggleState, cartPopupStatus: action.payload };

    case NOTIFICATION_TOGGLER:
      return { ...initialToggleState, notificationStatus: action.payload };

    case PROFILE_TOGGLER:
      return { ...initialToggleState, profileStatus: action.payload };

    default:
      return state;
  }
};
