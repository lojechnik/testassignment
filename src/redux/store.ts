import authReducer from "./authslice"
import { configureStore } from "@reduxjs/toolkit"
import formReducer from "./formslice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>