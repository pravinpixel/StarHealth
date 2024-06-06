import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./Slice/authSlice";
import { essentialSlice } from "./Slice/essentialSlice";
import { adminSlice } from "./Slice/adminSlice";

const reducers = combineReducers({
  auth: authSlice.reducer,
  essential: essentialSlice.reducer,
  admin: adminSlice.reducer,
});

export default reducers;