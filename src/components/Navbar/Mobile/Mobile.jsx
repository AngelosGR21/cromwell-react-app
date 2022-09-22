import { useState } from 'react';
import { IconButton, AppBar, Toolbar, Typography, } from '@mui/material';

import MobileDrawer from './MobileDrawer';
import MenuIcon from '@mui/icons-material/Menu';

import HideOnScroll from '../HideOnScroll';

import "./Mobile.css";

const Mobile = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <HideOnScroll>
            <AppBar className="mobile-navbar" component="nav">
                <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen} />
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className='mobile-logo' variant='h5' ml="auto">
                        LOGO
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}




export default Mobile