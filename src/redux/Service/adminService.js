import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

// personal details post
export const personalDetailsApi = createAsyncThunk("personalDetailsApi", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.postForm(`/employee/save`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// personal details List

export const personalDetailList = createAsyncThunk("personalDetailList", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.get(`/employee/view`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// personal details update
export const personalDetailsUpdateApi = createAsyncThunk("personalDetailsUpdateApi", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.postForm(`/employee/update`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
