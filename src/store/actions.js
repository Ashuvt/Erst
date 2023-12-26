import {
  SIDEBAR_TOGGLER,
  COURSE_SIDEBAR_TOGGLER,
  ADD_CART_POPUP_TOGGLER,
  NOTIFICATION_TOGGLER,
  PROFILE_TOGGLER,
  HELP_FORM_DD_TOGGLER,
  RESET_ALL,
  MULTILANG_TOGGLER,
  COUNTRY_DD_TOGGLER,
  LANG,
  GET_PROFILE_DATA,

  PROFILE_TAB_CHANGER,

  SEND_PROFESSIONS,
  SEND_INTERESTED_FIELD
  
} from "./consts";

export const resetAllToggler = () => {
  return RESET_ALL;
};

export const sidebarToggler = () => {
  return SIDEBAR_TOGGLER;
};

export const courseSidebarToggler = () => {
  return COURSE_SIDEBAR_TOGGLER;
};

export const cartPopupToggler = () => {
  return ADD_CART_POPUP_TOGGLER;
};

export const notificationToggler = () => {
  return NOTIFICATION_TOGGLER;
};

export const helpDdToggler = () => {
  return HELP_FORM_DD_TOGGLER;
}

export const profileToggler = () => {
  return PROFILE_TOGGLER;
};

export const multilangToggler = () => {
  return MULTILANG_TOGGLER;
}

export const contryDdToggler = () => {
  return COUNTRY_DD_TOGGLER;
}

export const languageChanges = () => {
  return LANG;
}


export const sendProfession = () => {
  return SEND_PROFESSIONS;
}

export const sendInterestedField = () => {
  return SEND_INTERESTED_FIELD;
}


export const profileTabChanger = () => {
  return PROFILE_TAB_CHANGER;
}

export const getProfileData = () => {
  return GET_PROFILE_DATA;
}