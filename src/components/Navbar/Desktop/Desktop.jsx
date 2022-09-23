import { AppBar, Toolbar, Typography } from "@mui/material"
import DesktopLink from "./DesktopLink";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import HideOnScroll from "../HideOnScroll";

import "./Desktop.css";

const Desktop = () => {
    const { token } = useSelector((store) => store.auth)

    const link = token ?
        <DesktopLink location="/landing#profile" text="Profile" />
        :
        <DesktopLink location="/login" text="Login" />

    return (
        <>
            <HideOnScroll>
                <AppBar className="desktop-navbar" component="nav">
                    <Toolbar>
                        <Link to="/" className="desktop-logo">
                            <Typography className="desktop-logo-text" variant='h5' mr="auto">
                                BHOUSE
                            </Typography>
                        </Link>
                        <div>
                            <DesktopLink location="/#sale" text="For Sale" />
                            <DesktopLink location="/#rent" text="For Rent" />
                            <DesktopLink location="/landing#about" text="About us" />
                        </div>
                        <div>
                            <DesktopLink location="#" text="Support" />
                            {link}
                        </div>
                    </Toolbar>
                </AppBar >
            </HideOnScroll>
            <Toolbar />
        </>
    )
}

export default Desktop