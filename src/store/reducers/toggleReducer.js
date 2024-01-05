import {
  SIDEBAR_TOGGLER,
  COURSE_SIDEBAR_TOGGLER,
  ADD_CART_POPUP_TOGGLER,
  NOTIFICATION_TOGGLER,
  PROFILE_TOGGLER,
  RESET_ALL,
  HELP_FORM_DD_TOGGLER,
  MULTILANG_TOGGLER,
  COUNTRY_DD_TOGGLER,
  LANG,
  ADD_CART_COUNT,
} from "../consts";

const initialToggleState = {
  sidebarStatus: false,
  courseSidebarStatus: false,
  cartPopupStatus: false,
  notificationStatus: false,
  profileStatus: false,
  helpFormDdStatus: false,
  multilangDdStatus: false,
  countryDdStatus:false,
};

export const toggleReducer = (state = initialToggleState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLER:
      return { ...initialToggleState, sidebarStatus: action.payload };

    case COURSE_SIDEBAR_TOGGLER:
      return { ...initialToggleState, courseSidebarStatus: action.payload };

    case ADD_CART_POPUP_TOGGLER:
      return { ...initialToggleState, cartPopupStatus: action.payload };

    case NOTIFICATION_TOGGLER:
      return { ...initialToggleState, notificationStatus: action.payload };

    case PROFILE_TOGGLER:
      return { ...initialToggleState, profileStatus: action.payload };

    case HELP_FORM_DD_TOGGLER:
      return { ...initialToggleState, helpFormDdStatus: action.payload };

    case MULTILANG_TOGGLER:
      return { ...initialToggleState, multilangDdStatus: action.payload };

      case COUNTRY_DD_TOGGLER:
      return { ...initialToggleState, countryDdStatus: action.payload };

    case RESET_ALL:
      return initialToggleState;

    default:
      return state;
  }
};

const langState = {
  lang: "en",
};

export const langReducer = (state = langState, action) => {
  switch (action.type) {
    case LANG:
      return { ...state, lang: action.payload };

    default:
      return state;
  }
};


const countState = {
  totalItem:0
}
export const countReducer = (state=countState, action) => {
    switch(action.type){
      case ADD_CART_COUNT : return {...state, totalItem:action.payload};

      default:
        return state;
    }
}
