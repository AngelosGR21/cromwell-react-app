import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import houseImage from "../../assets/house.jpg";

import "./Register.css"

import Form from "./Form/Form";

const Register = () => {
    const navigate = useNavigate();
    const { token } = useSelector((store) => store.auth);

    useEffect(() => {
        if (token) navigate("/");
    }, [])

    return (
        <main>
            <section className="register-image-container">
                <img src={houseImage} alt="house" />
            </section>
            <Form />
        </main>

    )
}

export default Register