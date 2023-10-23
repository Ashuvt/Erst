import { createStore, combineReducers } from "redux";
import { toggleReducer } from "./reducers/toggleReducer";

const rootReducer = combineReducers({
    toggleReducer
});

const store = createStore(rootReducer);

export default store;  