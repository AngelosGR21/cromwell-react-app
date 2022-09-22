import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useScreenSize from "../../hooks/useScreenSize";

import biggerScreenImage from "../../assets/house.jpg"
import smallerScreenImage from "../../assets/house5.jpg";

import "./Register.css"

import Form from "./Form/Form";

const Register = () => {
    const navigate = useNavigate();
    const { token } = useSelector((store) => store.auth);

    const width = useScreenSize();

    useEffect(() => {
        if (token) navigate("/");
    })

    return (
        <main className="register-container">
            <section className="register-image-container">
                <img className="register-image" src={width >= 1250 ? biggerScreenImage : smallerScreenImage} alt="house" />
            </section>
            <Form />
        </main>

    )
}

export default Register