import { createSlice } from '@reduxjs/toolkit'
import { userType } from '../components/user/usertype'
export type formType = {
  formOpen: boolean;
  currentUser: userType;
  formType:string;
}

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formOpen: false,
    currentUser: {},
    formType: '',
  } as formType,
  reducers: {
   openForm: (state,action) => {
state.currentUser = action.payload.user
state.formOpen = true;
state.formType = action.payload.formType

   },
   closeForm: (state,action) => {
    state.formOpen = false;
    state.formType = action.payload.formType
  },}
})

export const { openForm, closeForm } = formSlice.actions

export default formSlice.reducer
