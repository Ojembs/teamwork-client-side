import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export default store