import Logo from "../logo/Logo"
import LogoutButton from "../logoutButton/LogoutButton"
import UserBar from "../userBar/UserBar"
import UserNav from "../userNav/UserNav"


const Header = () => {
    return (
        <div>
            <Logo />
            <UserNav />
            <UserBar />
            <LogoutButton />

        </div>
    )
}

export default Header