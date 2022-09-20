import { useState } from "react"
import PasswordConditions from "./PasswordConditions"
import { TextField } from "@mui/material"

import { passwordValidator } from "./validators"

const PasswordField = ({ passwordStates, setPasswordStates, confirmPasswordValue, setConfirmPasswordStates }) => {
    const [showConditions, setShowConditions] = useState(false);
    const [passwordConditions, setPasswordConditions] = useState({
        tenCharacters: false,
        oneUpperCase: false,
        oneLowerCase: false,
        oneNumeric: false,
        oneSpecialCharacter: false
    })

    const className = passwordStates.isValid ? "input-valid" : (passwordStates.error ? "input-invalid" : "register-input-field")

    return (
        <>
            <TextField
                required
                className={className}
                label="Password"
                type="password"
                onFocus={() => setShowConditions(true)}
                onChange={(e) => {
                    setPasswordStates({ ...passwordStates, value: e.target.value })
                    passwordValidator(e.target.value, setPasswordConditions, setPasswordStates, confirmPasswordValue, setConfirmPasswordStates)
                }}
                value={passwordStates.password}
            />
            {showConditions ? <PasswordConditions passwordConditions={passwordConditions} /> : ""}
        </>

    )
}

export default PasswordField