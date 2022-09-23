import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom";

import { loginUser } from "../../../features/auth/authSlice";
import { openSnack } from "../../../features/snackbar/snackbarSlice";
import { useDispatch } from "react-redux";

import "./Form.css"

const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser({ email, password }))
            .unwrap()
            .then(() => {
                dispatch(openSnack({ message: "Logged in!", severity: "success" }));
                return navigate("/landing");
            })
            .catch((e) => {
                if (e.message.includes("401")) setError(true);
            })
    }
    const className = error ? "login-invalid-field" : "login-input-field";
    return (
        <section className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-header">Login</h2>
                <TextField
                    required
                    className={className}
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                />
                <TextField
                    required
                    className={className}
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={error}
                    helperText={error ? "Invalid email or password" : ""}
                />
                <p className="login-form-paragraph">
                    Don't have an account?
                    <Link
                        to="/register"
                        className="login-register-link">
                        Register here
                    </Link>
                </p>

                <Button
                    className="login-submit-button"
                    variant="contained"
                    type="submit"
                    size="large"
                >
                    Login
                </Button>
            </form>
        </section>
    )
}

export default Form