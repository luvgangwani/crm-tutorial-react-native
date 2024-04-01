import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contacts'

export default configureStore({
    reducer: {
        contacts: contactsReducer
    }
})
