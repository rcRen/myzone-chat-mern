import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    activeChat: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { activeChat } = chatSlice.actions;

export default chatSlice.reducer;
