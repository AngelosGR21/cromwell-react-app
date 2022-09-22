import { useEffect } from "react"
import useScreenSize from "../../hooks/useScreenSize"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import biggerScreenImage from "../../assets/house4.jpg"
import smallerScreenImage from "../../assets/house3.jpg";

import "./Login.css"

import Form from "./Form/Form"

const Login = () => {
    const width = useScreenSize();
    const navigate = useNavigate();

    const { token } = useSelector((store) => store.auth);

    useEffect(() => {
        if (token) navigate("/landing");
    })

    return (
        <main className="login-container">
            <Form />
            <section className="login-image-container">
                <img
                    src={width >= 1120 ? biggerScreenImage : smallerScreenImage}
                    className="login-image"
                    alt="house"
                />
            </section>
        </main>
    )
}

export default Login