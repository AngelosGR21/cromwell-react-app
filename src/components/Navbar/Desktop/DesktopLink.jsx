import { HashLink } from "react-router-hash-link";

const DesktopLink = ({ location, text }) => {
    return (
        <HashLink className="desktop-link" to={location}>
            {text}
        </HashLink>
    )
}

export default DesktopLink