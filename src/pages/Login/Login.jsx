import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import "./Login.css"

import Form from "./Form/Form"

const Login = () => {
    const navigate = useNavigate();

    const { token } = useSelector((store) => store.auth);

    useEffect(() => {
        if (token) navigate("/");
    })

    return (
        <main className="login-container">
            <Form />
            <section className="login-image-container" />
        </main>
    )
}

export default Login