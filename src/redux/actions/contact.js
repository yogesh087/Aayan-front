import * as api from '../api'
import { start, end, error, getContactUsersReducer, formSubmitReducer, } from '../reducers/contact'
 
export const getContactUsers = () => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.getContactUsers()
        dispatch(getContactUsersReducer(data.result))
        dispatch(end())
    } catch (err) {
        dispatch(error(err.message))
    }
}

// export const formSubmit = (contactData) => async (dispatch) => {
//     try {
//         dispatch(start())
//         const { data } = await api.formSubmit(contactData)
//         dispatch(formSubmitReducer(data.result))
//         console.log("from",data.result)
//         dispatch(end())
//         return data; // Return the data for potential use in the component
//     } catch (err) {
//         dispatch(error(err.message))
//         throw err; // Re-throw the error to handle it in the component
//     }
// }

export const formSubmit = (contactData) => async (dispatch) => {
    try {
        dispatch(start());
        const { data } = await api.formSubmit(contactData);
        dispatch(formSubmitReducer(data.result)); // Triggers success state
        dispatch(end());
        return data;
    } catch (err) {
        dispatch(error(err.message));
        throw err;
    }
};
