import { TextField } from "@mui/material"

const ConfirmPasswordField = ({ password, confirmPasswordStates, setConfirmPasswordStates }) => {

    const className = confirmPasswordStates.isValid ? "input-valid" : (confirmPasswordStates.error ? "input-invalid" : "register-input-field")

    return (
        <TextField
            required
            className={className}
            label="Confirm Password"
            type="password"
            error={confirmPasswordStates.error}
            helperText={confirmPasswordStates.error && "Passwords do not match"}
            onChange={(e) => setConfirmPasswordStates({
                value: e.target.value,
                error: password !== e.target.value ? true : false,
                isValid: password === e.target.value ? true : false
            })}
            value={confirmPasswordStates.value} />
    )
}

export default ConfirmPasswordField