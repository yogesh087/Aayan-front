import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        isFetching: false,
        error: null,
        success: false, // New success state
        contactUsers: [],
    },
    reducers: {
        start: (state) => { state.isFetching = true; state.error = null; state.success = false; },
        end: (state) => { state.isFetching = false; },
        error: (state, action) => { state.isFetching = false; state.error = action.payload; },
        getContactUsersReducer: (state, action) => { state.contactUsers = action.payload; },
        formSubmitReducer: (state, action) => { 
            state.success = true; // Set success to true on successful submission
        },
        resetSuccess: (state) => { state.success = false; }, // Optional: Reset success state
    }
});

export const { start, end, error, getContactUsersReducer, formSubmitReducer, resetSuccess} = contactSlice.actions
export default contactSlice.reducer

