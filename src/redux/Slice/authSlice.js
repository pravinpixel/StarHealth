import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authOtpVerify, resendOtp } from "../Service/authService";

const authCases = [
  { api: authLogin, name: "authLogin" },
  { api: authOtpVerify, name: "authOtpVerify" },
  { api: resendOtp, name: "resendOtp" }
];

const initialState = {};

authCases.forEach((api) => {
  initialState[api.name] = {
    loading: false,
    data: null,
    error: null,
  };
});

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    authCases.forEach((cases) => {
      builder
        .addCase(cases.api.fulfilled, (state, { payload }) => {
          state[cases.name].loading = false;
          state[cases.name].data = payload?.data ?? null;
          state[cases.name].error = null;
        })
        .addCase(cases.api.pending, (state) => {
          state[cases.name].loading = true;
          state[cases.name].error = null;
          state[cases.name].data = null;
        })
        .addCase(cases.api.rejected, (state, { payload }) => {
          state[cases.name].loading = false;
          state[cases.name].error = payload;
          state[cases.name].data = null;
        });
    });
  },
});

export const { authDispatch } = authSlice.actions;
