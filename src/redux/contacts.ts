import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        all: []
    },
    reducers: {
        update: (state, action) => {
            state.all = action.payload
        }
    }
})

export const { update } = contactsSlice.actions

export default contactsSlice.reducer
