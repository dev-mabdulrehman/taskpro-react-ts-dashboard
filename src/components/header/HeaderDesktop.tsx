import Container from "../Container"
import SearchBar from "../SearchBar"
import UserProfile from "../UserProfile"

const HeaderDesktop = () => {
    return (
        <div className='bg-white sticky top-0 shadow-md'>
            <Container>
                <div className="flex">
                    <SearchBar />
                    <div className="ml-auto">
                        <UserProfile name="Alex Rodriguez" email="alexrd@gmail.com" avatarSrc="https://avatar.iran.liara.run/public/28" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderDesktop