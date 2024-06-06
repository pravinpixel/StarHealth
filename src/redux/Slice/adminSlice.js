import { createSlice } from "@reduxjs/toolkit";
import { personalDetailList, personalDetailsApi, personalDetailsUpdateApi } from "../../redux/Service/adminService";

const adminCases = [
  { api: personalDetailsApi, name: "personalDetailsApi" },
  { api: personalDetailList, name: "personalDetailList" },
  { api: personalDetailsUpdateApi, name: "personalDetailsUpdateApi" }
];

const initialState = {};

adminCases.forEach((api) => {
  initialState[api.name] = {
    loading: false,
    data: null,
    error: null,
  };
});

export const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  extraReducers: (builder) => {
    adminCases.forEach((cases) => {
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

export const { adminDispatch } = adminSlice.actions;