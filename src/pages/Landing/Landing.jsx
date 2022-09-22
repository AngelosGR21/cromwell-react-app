import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import About from "./About";
import Profile from "./Profile";

import "./Landing.css";



const Landing = () => {
    return (
        <>
            <div className="landing-image-container">
                <h1 className="landing-main-header">Let's find a home that's perfect for you</h1>
                <Link to="/" className="landing-link-home">
                    <Button className="landing-main-button" variant="contained">View Houses</Button>
                </Link>
            </div>
            <About />
            <Profile />
        </>
    )
}

export default Landing