import { Drawer, List, Divider } from "@mui/material";

import SellIcon from '@mui/icons-material/Sell';
import InfoIcon from '@mui/icons-material/Info';
import HouseIcon from '@mui/icons-material/House';
import LoginIcon from '@mui/icons-material/Login';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import DrawerItem from "./DrawerItem";

import { useSelector } from "react-redux";

const MobileDrawer = ({ open, setOpen }) => {
    const { token } = useSelector((store) => store.auth);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
        >
            <List className="mobile-drawer">
                <DrawerItem location="/#sale" ItemIcon={SellIcon} itemText="For Sale" setOpen={setOpen} />
                <DrawerItem location="/#rent" ItemIcon={HouseIcon} itemText="For Rent" setOpen={setOpen} />
                <Divider />
                <DrawerItem location="/landing#about" ItemIcon={InfoIcon} itemText="About Us" setOpen={setOpen} />
                <DrawerItem location="#" ItemIcon={SupportAgentIcon} itemText="Contact Support" setOpen={setOpen} />
                {!token && <DrawerItem location="/login" ItemIcon={LoginIcon} itemText="Login" setOpen={setOpen} />}
                {token && <DrawerItem ItemIcon={AccountCircleIcon} itemText="Profile" setOpen={setOpen} />}
            </List>
        </Drawer>
    )
}

export default MobileDrawer