import { createStore, combineReducers } from "redux";
import ReducerCount from "./modules/counter/reducer.js";
const reducers = combineReducers({ handleCount: ReducerCount });
const store = createStore(reducers);
export default store;
