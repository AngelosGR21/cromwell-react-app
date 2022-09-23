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

export const fetchDetails = createAsyncThunk(
    "authentication/getUserDetails",
    async (payload, {getState}) => {
        const {token} = getState().auth;
        const request = await axios.get(`${url}/user`, {
            headers: {
                "Authorization": token
            }
        })

        return request.data.data;
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
            state.token = "";
            state.errCode = null;
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
        },
        [fetchDetails.fulfilled]: (state, action) => {
            state.userData = action.payload
            state.errCode = null
        },
        [fetchDetails.rejected]: (state, action) => {
            if(action.error.message.includes("401")) state.errCode = 401;
        }
    }
})

export const {authLogout} = authSlice.actions
export default authSlice.reducer