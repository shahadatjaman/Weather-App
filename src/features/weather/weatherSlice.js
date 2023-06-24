import { createSlice } from "@reduxjs/toolkit";
import removeThreeAfterIndex from "../../Utils/removeThreeAfterIndex";

const initialState = {
  weather: null,
  forecast: null,
  location: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeather: (state, { payload }) => {
      state.weather = payload;
    },
    addForecast: (state, { payload }) => {
      if (payload) {
        var newArray = removeThreeAfterIndex(payload.hour);

        state.forecast = newArray;
      }
    },
  },
});

export const { addWeather, addForecast } = weatherSlice.actions;
export default weatherSlice.reducer;
