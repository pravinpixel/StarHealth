import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

// createRandomToken
export const createRandomToken = createAsyncThunk("createRandomToken", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.get(`/createRandomToken`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


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

// logout api
export const logoutApi = createAsyncThunk("logoutApi", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.post(`/employee/logout`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});