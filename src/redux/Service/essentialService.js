import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

//essential list api
export const essentialList = createAsyncThunk("essentialList", async (bodyParams, thunkAPI) => {
  try {
    const response = await API.get(`/essiential`, bodyParams);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//city list api
export const cityListByID = createAsyncThunk("cityListByID", async (stateID, thunkAPI) => {
  try {
    const response = await API.get(`/essiential/${stateID}`);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});