import { configureStore } from "@reduxjs/toolkit";
import { apis } from "../apis/apis";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: { [apis.reducerPath]: apis.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(apis.middleware),
});
setupListeners(store.dispatch);
