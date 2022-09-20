import { TextField } from "@mui/material";

import { nameAndEmailValidator } from "./validators";

const NameField = ({ label, inputStates, setInputStates }) => {

    const className = inputStates.isValid ? "input-valid" : (inputStates.error ? "input-invalid" : "register-input-field")

    return (
        <TextField
            required
            className={className}
            label={label}
            error={inputStates.error}
            helperText={inputStates.error && `${label} should only contain letters`}
            onChange={(e) => nameAndEmailValidator("name", e.target.value, inputStates, setInputStates)}
            value={inputStates.value}
        />
    )
}

export default NameField