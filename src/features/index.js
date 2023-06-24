import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { apiSlice } from "./api";
import weatherReducer from "./weather/weatherSlice";
import findLocationReducer from "./find_location/";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    weather: weatherReducer,
    findLocation: findLocationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware, thunk),
});
