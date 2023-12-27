import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const menuModalSlice = createSlice({
  name: "menuModal",
  initialState,
  reducers: {
    showMenuModal: (state) => {
      state.showModal = true;
    },
    hideMenuModal: (state) => {
      state.showModal = false;
    },
    toggleMenuModal: (state) => {
      state.showModal = !state.showModal
    }
  },
});
export const { toggleMenuModal, showMenuModal, hideMenuModal } = menuModalSlice.actions;
export default menuModalSlice.reducer;
