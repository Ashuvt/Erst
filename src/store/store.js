import { createStore, combineReducers } from "redux";
import { toggleReducer, langReducer} from "./reducers/toggleReducer";
import {onBoardingReducer, profileTabReducer, getProfileDataReducer} from "./reducers/onboardingReducer";

import { getCartReducer, addCartReducer, getExploreDetailByIdApi } from "./reducers/apiReducers";


const rootReducer = combineReducers({
    toggleReducer,
    langReducer,
    onBoardingReducer,
    profileTabReducer,



    getProfileDataReducer,
    getCartReducer,
    addCartReducer,
    getExploreDetailByIdApi,
});


const store = createStore(rootReducer);
export default store;  