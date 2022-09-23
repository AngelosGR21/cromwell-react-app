import { useState } from 'react';
import { IconButton, AppBar, Toolbar, Typography } from '@mui/material';

import MobileDrawer from './MobileDrawer';
import MenuIcon from '@mui/icons-material/Menu';

import HideOnScroll from '../HideOnScroll';

import "./Mobile.css";
import { Link } from 'react-router-dom';

const Mobile = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
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
                        <Link to="/" className='mobile-logo-link'>
                            <Typography className='mobile-logo' variant='h5'>
                                BHOUSE
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    )
}




export default Mobile