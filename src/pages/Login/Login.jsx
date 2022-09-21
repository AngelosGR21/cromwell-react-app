import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Form from "./Form/Form"

import "./Login.css"

const Login = () => {
    const navigate = useNavigate();

    const { token } = useSelector((store) => store.auth);

    useEffect(() => {
        if (token) navigate("/");
    })

    return (
        <>
            <section>
            </section>
            <Form />
        </>
    )
}

export default Login