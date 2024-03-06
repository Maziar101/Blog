import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    login: (state)=>{
        state.token = true;
    },
    logout: (state)=>{
        state.token = null;
    }
  }
});
export  const {login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;
