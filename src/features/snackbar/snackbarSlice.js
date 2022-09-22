import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    open: false,
    message: "",
    vertical: "top",
    horizontal: "right",
    severity: "success"
}

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers:{
        openSnack(state, action){
            state.message = action.payload.message;
            state.severity = action.payload.severity;
            state.open = true;
        },
        closeSnack(state){
            state.open = false;
        }
    }
})

export const { openSnack, closeSnack} = snackbarSlice.actions;
export default snackbarSlice.reducer