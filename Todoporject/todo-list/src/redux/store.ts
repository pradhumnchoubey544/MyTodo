import { configureStore } from "@reduxjs/toolkit";
import listenerMiddleware from "./middleware";
import Reducer from "./reducer";


export const store = configureStore({
  reducer: {
    app: Reducer,
  },
  middleware: (
    getDefaultMiddleware
  ) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
