import { useState } from "react";

import { Button } from "@mui/material";

import NameField from "./NameField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import ConfirmPasswordField from "./ConfirmPasswordField";

import { registerUser } from "../../../utils/apiRequests";

const Form = () => {
    const stateTemplate = {
        value: "",
        error: false,
        isValid: false
    }
    const [firstNameStates, setFirstNameStates] = useState({ ...stateTemplate })
    const [lastNameStates, setLastNameStates] = useState({ ...stateTemplate })
    const [emailStates, setEmailStates] = useState({ ...stateTemplate })
    const [passwordStates, setPasswordStates] = useState({ ...stateTemplate })
    const [confirmPasswordStates, setConfirmPasswordStates] = useState({ ...stateTemplate })


    const handleSubmit = (e) => {
        e.preventDefault();
        const values = [firstNameStates, lastNameStates, emailStates, passwordStates, confirmPasswordStates];
        const valuesValid = values.every((state) => state.isValid);

        if (valuesValid) {
            registerUser(firstNameStates.value, lastNameStates.value, emailStates.value, passwordStates.value)

        }

    }

    return (
        <section className="register-form-container">
            <form className="register-form" autoComplete="off" onSubmit={handleSubmit}>
                <h2>Register Account</h2>
                <NameField
                    label="First Name"
                    inputStates={firstNameStates}
                    setInputStates={setFirstNameStates}
                />
                <NameField
                    label="Last Name"
                    inputStates={lastNameStates}
                    setInputStates={setLastNameStates}
                />
                <EmailField
                    emailStates={emailStates}
                    setEmailStates={setEmailStates}
                />
                <PasswordField
                    passwordStates={passwordStates}
                    setPasswordStates={setPasswordStates}
                    confirmPasswordValue={confirmPasswordStates.value}
                    setConfirmPasswordStates={setConfirmPasswordStates}
                />
                <ConfirmPasswordField
                    confirmPasswordStates={confirmPasswordStates}
                    setConfirmPasswordStates={setConfirmPasswordStates}
                    password={passwordStates.value}
                />
                <Button className="register-submit-button" type="submit" variant="contained" size="large">Register</Button>
            </form>
        </section>
    )
}

export default Form