import { useState } from 'react';
import { IconButton, AppBar, Toolbar, Typography } from '@mui/material';

import MobileDrawer from './MobileDrawer';
import MenuIcon from '@mui/icons-material/Menu';

import "./Mobile.css";

const Mobile = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <AppBar className="mobile-navbar" position="static" component="nav">
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
    )
}

export default Mobile