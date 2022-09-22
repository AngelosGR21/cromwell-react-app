import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const DrawerItem = ({ location, ItemIcon, itemText }) => {
    return (
        <ListItem >
            <Link to={location} className="mobile-drawer-link">
                <ListItemButton>
                    <ListItemIcon className="mobile-drawer-icon">
                        <ItemIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {itemText}
                    </ListItemText>
                </ListItemButton>
            </Link>
        </ListItem>
    )
}

export default DrawerItem