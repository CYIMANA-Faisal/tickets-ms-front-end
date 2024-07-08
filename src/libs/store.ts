import { configureStore } from "@reduxjs/toolkit";
import ticketsSliceReducer from "./features/tickets/ticketsSlice";
import { apiSlice } from "./features/api/apiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      tickets: ticketsSliceReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];