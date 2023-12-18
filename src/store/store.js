import { createStore, combineReducers } from "redux";
import { toggleReducer, langReducer } from "./reducers/toggleReducer";
import {onBoardingReducer} from "./reducers/onboardingReducer";

const rootReducer = combineReducers({
    toggleReducer,
    langReducer,
    onBoardingReducer,
});

const store = createStore(rootReducer);

export default store;  