import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./Slice/authSlice";

const reducers = combineReducers({
  auth: authSlice.reducer
});

export default reducers;