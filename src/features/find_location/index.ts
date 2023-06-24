import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryText: null,
  cities: null,
};

const findLocationSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addQueryText: (state, { payload }) => {
      if (payload) {
        state.queryText = payload;
      } else {
        state.cities = null;
      }
    },
    addLocations: (state, { payload }) => {
      if (payload) {
        state.cities = payload;
      }
    },
  },
});

export const { addQueryText, addLocations } = findLocationSlice.actions;
export default findLocationSlice.reducer;
