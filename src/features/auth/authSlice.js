import axios from "axios";
import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:5000"

export const registerUser = createAsyncThunk(
    "authentication/registerUser",
    async (data) => {
            const request = await axios.post(`${url}/user/register`, data)
            return {token: request.headers.authorization, status: request.status}
    }
)

export const loginUser = createAsyncThunk(
    "authentication/loginUser",
    async (data) => {
        const request = await axios.post(`${url}/user/login`, data)
        return {token: request.headers.authorization, status: request.status}
    }
)

const initialState = {
    token: localStorage.getItem("auth"),
    errCode: null,
}

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers : {
        authLogout(state){
            localStorage.removeItem("auth");
            state = initialState
        }
    },
    extraReducers: {
        [registerUser.fulfilled] : (state, action) => {
            localStorage.setItem("auth", action.payload.token);
            state.errCode = null
            state.token = action.payload.token
        },
        [registerUser.rejected] : (state, action) => {
            if(action.error.message.includes("409")) state.errCode = 409;
        },
        [loginUser.fulfilled] : (state, action) => {
            localStorage.setItem("auth", action.payload.token)
            state.errCode = null
            state.token = action.payload.token
        },
        [loginUser.rejected] : (state, action) => {
            if(action.error.message.includes("401")) state.errCode = 401; 
        }
    }
})

export const {authLogout} = authSlice.actions
export default authSlice.reducer