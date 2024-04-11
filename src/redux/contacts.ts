import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, People } from "../types";

export const init = createAsyncThunk('init', async () => {
    const response = await fetch('http://localhost:3000/contact')
    return response.json()
})

export const add = createAsyncThunk('add', async (people: People) => {
    await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(people)
    })

    return people
})

export const edit = createAsyncThunk('edit', async (people: People) => {
    await fetch(`http://localhost:3000/contact/${people.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(people)
    })

    return people
})

export const deletePerson = createAsyncThunk('deletePerson', async (id: string) => {
    await fetch(`http://localhost:3000/contact/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
})

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        people: [],
        detailView: false,
        personSelected: null,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        project: '',
        notes: '',
        toUpdate: false,
        isLoading: false,
        error: false,
    } as Contact,
    reducers: {
        update: (state, action) => {
            state = {
                ...state,
                ...action.payload
            }

            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(init.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(init.fulfilled, (state, action) => {
            state.isLoading = false
            state.people = action.payload
        })

        builder.addCase(init.rejected, (state) => {
            state.error = true
        })

        builder.addCase(add.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(add.fulfilled, (state, action) => {
            state.isLoading = false
            state.people = [...state.people, action.payload]
        })

        builder.addCase(add.rejected, (state) => {
            state.error = true
        })

        builder.addCase(edit.rejected, (state) => {
            state.error = true
        })

        builder.addCase(edit.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(edit.fulfilled, (state, _action) => {
            state.isLoading = false
        })

        builder.addCase(deletePerson.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(deletePerson.fulfilled, (state, _action) => {
            state.isLoading = false
        })

        builder.addCase(deletePerson.rejected, (state) => {
            state.error = true
        })
    }
})

export const { update } = contactsSlice.actions

export default contactsSlice.reducer
