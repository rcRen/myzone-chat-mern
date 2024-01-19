import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [] }

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotifications: (state, action) => {
            return { messages: [action.payload, ...state.messages] };
        }
        ,
        removeNotification: (state, action) => {
            console.info('111', action.payload)
            const restNotification = state.messages.filter(message => message.chat._id !== action.payload._id)
            return { messages: restNotification };

        }
    }
})

export const { setNotifications, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;