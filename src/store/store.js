import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/userSlice";

const store = configureStore({
  reducer: {
    UserReducer: userSlice,
  },
});

export default store;


