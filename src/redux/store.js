import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import emailReducer from "./slices/emailSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
  },
});
