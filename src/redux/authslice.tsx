import { createSlice } from '@reduxjs/toolkit'

type stateType = {
  loggedIn: boolean;
  currentUser: string;
  token: string,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    currentUser: '',
    token: localStorage.getItem('token'),
  } as stateType,
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token
      state.loggedIn = true
      localStorage.setItem('token', payload.token)

    },
    logout: (state) => {
      state.loggedIn = false
      state.currentUser = ''
      localStorage.removeItem('token')
      console.log('state.loggedon',state.loggedIn)

    },
    forceLogin: (state) => {
      state.loggedIn = true;
    }
  },
})

export const { login, logout, forceLogin } = authSlice.actions

export default authSlice.reducer
