import { createSlice } from "@reduxjs/toolkit";

const initialState = "contacts";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    activeSidebar: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { activeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
