import { Link } from "react-router"
import Container from "../Container"
import Logo from "../Logo"
import Notifications from "../notifications/Notifications"
import SearchBar from "../searchBar/SearchBar"

const HeaderMobile = () => {
    return (
        <div className="sticky top-0 bg-[#222427]">
            <Container>
                <div className="flex items-center">
                    <Logo size="md" />
                    <div className="flex items-center ml-auto">
                        <SearchBar />
                        <Notifications/>
                        <Link to="/settings" className="text-xl text-white p-2">
                            <i className="fa-solid fa-gear"></i>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderMobile