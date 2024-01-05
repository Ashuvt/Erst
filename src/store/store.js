import { createStore, combineReducers } from "redux";
import { toggleReducer, langReducer, countReducer} from "./reducers/toggleReducer";
import {onBoardingReducer, profileTabReducer, getProfileDataReducer} from "./reducers/onboardingReducer";

const rootReducer = combineReducers({
    toggleReducer,
    langReducer,
    onBoardingReducer,
    profileTabReducer,
    getProfileDataReducer,
    countReducer,
});

const store = createStore(rootReducer);

export default store;  