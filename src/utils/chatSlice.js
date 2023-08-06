import { createSlice } from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./constant"

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT,1)   //this will remove one message from the top after every 10 message, this helps us to avoid blotting up our page                     
            state.messages.unshift(action.payload)
        }
    }

})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;