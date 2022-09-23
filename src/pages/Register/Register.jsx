import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Register.css"

import Form from "./Form/Form";

const Register = () => {
    const navigate = useNavigate();
    const { token } = useSelector((store) => store.auth);


    useEffect(() => {
        if (token) navigate("/");
    })

    return (
        <main className="register-container">
            <section className="register-image-container" />
            <Form />
        </main>

    )
}

export default Register