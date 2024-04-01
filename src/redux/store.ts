import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contacts'

const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
})


export type AppDispatch = typeof store.dispatch
export default store
