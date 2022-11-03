import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice";
import profileSlice from "../features/profileSlice";

export const store = configureStore({
  reducer: {
    user: profileSlice,
    post: postSlice,
  },
});
