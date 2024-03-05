import { configureStore } from "@reduxjs/toolkit";

import { estateApi } from "../Features/EstateSlice";
export const store = configureStore({
  reducer: {
    [estateApi.reducerPath]: estateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(estateApi.middleware),
});
