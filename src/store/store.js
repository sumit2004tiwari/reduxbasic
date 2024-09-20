import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import { myApi } from "../slice/apiSlice";  // Import the `apiSlice`, not the hook

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [myApi.reducerPath]: myApi.reducer,  // Add the API reducer using `reducerPath`
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),  // Add the API middleware
});

console.log(store, "store");
