import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

import NameField from "./NameField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import ConfirmPasswordField from "./ConfirmPasswordField";

import { openSnack } from "../../../features/snackbar/snackbarSlice";
import { registerUser } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

import "./Form.css"

const stateTemplate = {
    value: "",
    error: false,
    isValid: false
}

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            const data = {
                firstName: firstNameStates.value,
                lastName: lastNameStates.value,
                email: emailStates.value,
                password: passwordStates.value
            }
            dispatch(registerUser(data))
                .unwrap()
                .then(() => {
                    dispatch(openSnack({ message: "Registration successful!", severity: "success" }))
                    return navigate("/landing");
                })
                .catch((e) => {
                    if (e.message.includes("409")) {
                        setEmailStates({
                            ...emailStates,
                            error: true,
                            isValid: false,
                            errorMessage: "Email is already in use"
                        })
                    }
                })

        }

    }

    return (
        <section className="register-form-container">
            <form className="register-form" autoComplete="off" onSubmit={handleSubmit}>
                <h2 className="register-form-header">Register Account</h2>
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
                <p className="login-form-paragraph">
                    Already have an account?
                    <Link
                        to="/login"
                        className="login-register-link">
                        Log in here
                    </Link>
                </p>
                <Button className="register-submit-button" type="submit" variant="contained" size="large">Register</Button>
            </form>
        </section>
    )
}

export default Form