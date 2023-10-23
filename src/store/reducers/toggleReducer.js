import { SIDEBAR_TOGGLER, ADD_CART_POPUP_TOGGLER } from "../consts";

const initialToggleState = {
  sidebarStatus: false,
  cartPopupStatus: false,
};

export const toggleReducer = (state = initialToggleState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLER:
      return { ...state, sidebarStatus: action.payload };

    case ADD_CART_POPUP_TOGGLER:
      return { ...state, cartPopupStatus: action.payload };

    default:
      return state;
  }
};
