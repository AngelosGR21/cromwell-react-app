import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../features/auth/authSlice";
import { openSnack } from "../../features/snackbar/snackbarSlice";
import "./Profile.css"


const Profile = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({});
    const [displayData, setDisplayData] = useState(false);
    const { token } = useSelector((store) => store.auth);

    const handleFetch = () => {
        dispatch(fetchDetails())
            .unwrap()
            .then((res) => {
                setUserData(res);
                setDisplayData(true);
            }).catch((e) => {
                if (e.message.includes("401")) {
                    dispatch(openSnack({ message: "Unauthorized request", severity: "error" }));
                }
            });
    }

    // if user is not logged in
    if (!token) {
        return (
            <section id="profile" className="landing-profile-container">
                <div className="landing-profile-unknown">
                    <h3 className="landing-profile-header">Not registered yet?</h3>
                    <Link to="/register" className="landing-profile-register-link">
                        <Button className="landing-profile-register-button" variant="contained">Register</Button>
                    </Link>
                </div>
            </section>
        )
    }

    // after details have been fetched
    if (displayData) {
        const { email, firstName, lastName } = userData;
        return (
            <section id="profile" className="landing-profile-container show-details">
                <div className="landing-profile-details-container">
                    <h3 className="landing-profile-details">First Name : {firstName}</h3>
                    <h3 className="landing-profile-details">Last Name : {lastName}</h3>
                    <h3 className="landing-profile-details">Email : {email}</h3>
                    <Button
                        className="landing-hide-details-button"
                        variant="contained"
                        onClick={() => setDisplayData(false)}
                    >
                        Hide details
                    </Button>
                </div>
            </section>
        )
    }

    //if user is logged in
    return (
        <section id="profile" className="landing-profile-container">
            <h4 className="landing-profile-header">Want to view your account details?</h4>
            <h4 className="landing-profile-header">Click the button below</h4>
            <Button
                variant="contained"
                className="landing-fetch-button"
                onClick={handleFetch}
            >
                View Details
            </Button>
        </section>
    )
}

export default Profile