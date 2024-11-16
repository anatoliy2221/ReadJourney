import { NavLink } from "react-router-dom"


const UserNav = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/library">May library</NavLink>
        </div>
    )
}

export default UserNav