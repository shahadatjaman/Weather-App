import { apiSlice } from "../api";

export const weatherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (data) => ({
        url: `/current.json?key=${process.env.REACT_APP_API_KEY} &q=${data.q}&aqi=no`,
        method: "GET",
      }),
      providesTags: ["GetWeather"],
    }),
    getForecast: builder.query({
      query: (data) => ({
        url: `/forecast.json?key=${process.env.REACT_APP_API_KEY} &q=${data.q}&days=${data.days}&aqi=no&alerts=no`,
        method: "GET",
      }),
      providesTags: ["GetForecast"],
    }),
  }),
});

export const { useGetWeatherQuery, useGetForecastQuery } = weatherApi;
