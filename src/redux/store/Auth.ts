import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLogedIn: false },
    reducers: {
        login(state, actions) {
            if (actions.type === 'FOUND_USER') {
                state.isLogedIn = true;
            }
        },
        logout(state, actions) {
            if (actions.type === 'ERROR_FINDING_USER') {
                state.isLogedIn = false;
            }
        }
    }
})

export const authActions = authSlice.actions
export default authSlice