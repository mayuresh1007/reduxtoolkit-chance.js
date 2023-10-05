import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/userSlice";
import adminSlice from "./Admin/adminSlice";

const store = configureStore({
  reducer: {
    UserReducer: userSlice,
    admin:adminSlice
  },
});

export default store;


