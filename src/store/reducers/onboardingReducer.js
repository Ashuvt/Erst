import { SEND_PROFESSIONS, SEND_INTERESTED_FIELD } from "../consts";

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
