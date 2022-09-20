import houseImage from "../../assets/house.jpg";

import "./Register.css"

import Form from "./Form/Form";

const Register = () => {

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