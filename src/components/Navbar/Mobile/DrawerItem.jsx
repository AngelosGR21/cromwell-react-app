import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { HashLink } from "react-router-hash-link"

const DrawerItem = ({ location, ItemIcon, itemText, setOpen }) => {

    return (
        <ListItem >
            <HashLink to={location} className="mobile-drawer-link" onClick={() => setOpen(false)}>
                <ListItemButton>
                    <ListItemIcon className="mobile-drawer-icon">
                        <ItemIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {itemText}
                    </ListItemText>
                </ListItemButton>
            </HashLink>
        </ListItem>
    )
}

export default DrawerItem