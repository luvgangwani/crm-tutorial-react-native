import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const init = createAsyncThunk('init', async () => {
    const response = await fetch('http://localhost:3000/contact')
    return response.json()
})

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
        isLoading: false,
        error: false,
    },
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
    }
})

export const { update } = contactsSlice.actions

export default contactsSlice.reducer
