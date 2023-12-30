import {
  SEND_PROFESSIONS,
  SEND_INTERESTED_FIELD,
  PROFILE_TAB_CHANGER,
  GET_PROFILE_DATA,
} from "../consts";

const initialState = {
  proffession: [],
  intrest: [],
};

export const onBoardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_PROFESSIONS:
      return { ...state, proffession: [...action.payload] };

    case SEND_INTERESTED_FIELD:
      return { ...state, intrest: [...action.payload] };

    default:
      return state;
  }
};

export const profileTabReducer = (state = 1, action) => {
  switch (action.type) {
    case PROFILE_TAB_CHANGER:
      return action.payload;

    default:
      return state;
  }
};

const initialProfile = {};

export const getProfileDataReducer = (state = initialProfile, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return {...action.payload};

    default:
      return state;
  }
};
