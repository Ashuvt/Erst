import {
  SIDEBAR_TOGGLER,
  ADD_CART_POPUP_TOGGLER,
  NOTIFICATION_TOGGLER,
  PROFILE_TOGGLER,
  RESET_ALL,
} from "./consts";

export const resetAllToggler = () => {
  return RESET_ALL;
};

export const sidebarToggler = () => {
  return SIDEBAR_TOGGLER;
};

export const cartPopupToggler = () => {
  return ADD_CART_POPUP_TOGGLER;
};

export const notificationToggler = () => {
  return NOTIFICATION_TOGGLER;
};

export const profileToggler = () => {
  return PROFILE_TOGGLER;
};
