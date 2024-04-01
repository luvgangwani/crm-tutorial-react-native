import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        people: [],
        detailView: false,
        personSelected: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        project: '',
        notes: '',
        toUpdate: false,
    },
    reducers: {
        init: (state, _action) => {
            fetch('http://localhost:3000/contacts')
            .then(response => response.json())
            .then(people => {
                state.people = people
            })
            .catch(error => console.error(error))
        },
        update: (state, action) => {
            state.people = action.payload
        }
    }
})

export const { update } = contactsSlice.actions

export default contactsSlice.reducer
