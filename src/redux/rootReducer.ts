import { combineReducers } from "@reduxjs/toolkit";
import toastReducer from "./slices/toastSlice";
import userReducer from "./slices/userSlice";



const rootReducer = combineReducers({
  toast: toastReducer,
  user: userReducer
});

export default rootReducer;
