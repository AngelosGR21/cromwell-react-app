import { Snackbar, Alert } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { closeSnack } from "../../features/snackbar/snackbarSlice"

import "./Snackbar.css"

const CustomSnackbar = () => {
    const dispatch = useDispatch();
    const { vertical, horizontal, open, message, severity } = useSelector((store) => store.snackbar);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(closeSnack());
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
        >
            <Alert variant="filled" severity={severity} onClose={handleClose} className="snackbar-alert">
                {message}
            </Alert>
        </Snackbar >
    )
}

export default CustomSnackbar