import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [] }

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotifications: (state, action) => {
            console.info('...')
            return { messages: [action.payload, ...state.messages] };
        }
        ,
        removeNotification: (state, action) => {
            const restNotification = state.messages.filter(message => message.chat._id !== action.payload._id)
            return { messages: restNotification };

        }
    }
})

export const { setNotifications, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;