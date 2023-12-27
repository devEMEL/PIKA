import { configureStore } from "@reduxjs/toolkit";
import menuModalReducer from "../features/menuModal/menuModalSlice";

export const store = configureStore({
  reducer: {
    menuModal: menuModalReducer,
  },
});
