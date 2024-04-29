import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
    logout: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSucess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    resgisterSucess: (state, action) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    logoutStart: (state) => {
      state.logout.isFetching = true;
    },
    logoutSucess: (state, action) => {
      state.logout.isFetching = false;
      state.logout.error = false;
      state.logout.success = true;
      state.login.currentUser = null;
    },
    logoutFailed: (state) => {
      state.logout.isFetching = false;
      state.logout.error = true;
      state.logout.success = false;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSucess,
  registerStart,
  resgisterSucess,
  registerFailed,
  logoutStart,
  logoutFailed,
  logoutSucess
} = authSlice.actions;

export default authSlice.reducer;
