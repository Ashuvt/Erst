import { createStore, combineReducers } from "redux";
import { toggleReducer, langReducer } from "./reducers/toggleReducer";

const rootReducer = combineReducers({
    toggleReducer,
    langReducer
});

const store = createStore(rootReducer);

export default store;  