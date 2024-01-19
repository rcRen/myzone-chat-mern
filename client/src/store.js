import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sidebarReducer from "./slices/sidebarSlice";
import messageReducer from "./slices/messageSlice";
import chatReducer from "./slices/chatSlice";
import notificationReducer from "./slices/notificationSlice";

const activeReducer = combineReducers({
  sidebar: sidebarReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: {
    auth: authReducer,
    active: activeReducer,
    message: messageReducer,
    notification: notificationReducer
  },
  devTools: true,
});

export default store;
