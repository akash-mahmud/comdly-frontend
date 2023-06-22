import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showTobar: true
};
export const topbarSlice = createSlice({
  name: "topbar",
  initialState,
  reducers: {
    showTopbar(state) {
      state.showTobar = true;
    },
    closeTobar(state) {
      state.showTobar = false;
    },
  },
});

export const { showTopbar, closeTobar } = topbarSlice.actions;

export default topbarSlice.reducer;