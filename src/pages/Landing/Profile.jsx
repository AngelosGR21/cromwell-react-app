import { Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../features/auth/authSlice";
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
                console.log(res);
                setUserData(res);
                setDisplayData(true);
            }).catch((e) => {
                console.log(e);
            });
    }

    if (displayData) {
        const { email, firstName, lastName } = userData;
        return (
            <section className="landing-profile-container show-details">
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

    return (
        <section className="landing-profile-container">
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