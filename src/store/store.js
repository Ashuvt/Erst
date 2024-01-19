import { createStore, combineReducers } from "redux";
import { toggleReducer, langReducer} from "./reducers/toggleReducer";
import {onBoardingReducer, profileTabReducer, getProfileDataReducer} from "./reducers/onboardingReducer";

import { getCartReducer } from "./reducers/apiReducers";


const rootReducer = combineReducers({
    toggleReducer,
    langReducer,
    onBoardingReducer,
    profileTabReducer,
    getProfileDataReducer,
    getCartReducer,
});


const store = createStore(rootReducer);
export default store;  