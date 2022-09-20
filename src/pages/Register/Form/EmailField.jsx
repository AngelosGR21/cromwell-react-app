import { TextField } from "@mui/material"

import { nameAndEmailValidator } from "./validators"

const EmailField = ({ emailStates, setEmailStates }) => {
    const className = emailStates.isValid ? "input-valid" : (emailStates.error ? "input-invalid" : "register-input-field")
    return (
        <TextField
            required
            className={className}
            label="Email"
            name="email"
            error={emailStates.error}
            helperText={emailStates.error && "Invalid email"}
            onChange={(e) => nameAndEmailValidator("email", e.target.value, emailStates, setEmailStates)}
            value={emailStates.value} />
    )
}

export default EmailField