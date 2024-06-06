import { createSlice } from "@reduxjs/toolkit";
import { essentialList, cityListByID } from "../../redux/Service/essentialService";

const essentialCases = [
  { api: essentialList, name: "essentialList" },
  { api: cityListByID, name: "cityListByID" }
];

const initialState = {};

essentialCases.forEach((api) => {
  initialState[api.name] = {
    loading: false,
    data: null,
    error: null,
  };
});


export const essentialSlice = createSlice({
  name: "essentialSlice",
  initialState,
  extraReducers: (builder) => {
    essentialCases.forEach((cases) => {
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

export const { essentialDispatch } = essentialSlice.actions;