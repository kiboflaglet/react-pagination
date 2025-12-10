import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./components/UserRDK/usersAPI";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefault) =>
        getDefault().concat(usersApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch