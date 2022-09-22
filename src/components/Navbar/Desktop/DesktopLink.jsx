import { Link } from "react-router-dom"


const DesktopLink = ({ location, text }) => {
    return (
        <Link className="desktop-link" to={location}>
            {text}
        </Link>
    )
}

export default DesktopLink