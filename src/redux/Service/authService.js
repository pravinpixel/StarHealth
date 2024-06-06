import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

// auth email verify
export const authLogin = createAsyncThunk("login", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.post(`/emailverfiy`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// auth otp verify
export const authOtpVerify = createAsyncThunk("otp-verify", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.post(`/otp-verfiy`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// auth otp verify
export const resendOtp = createAsyncThunk("resend-otp", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.post(`/resend-otp`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});