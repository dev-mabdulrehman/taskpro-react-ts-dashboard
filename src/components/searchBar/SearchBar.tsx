import useIsMobile from "../../hooks/useIsMobile"
import SearchBarDesktop from "./SearchBarDesktop";
import SearchBarMobile from "./SearchBarMobile";

const SearchBar = () => {
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile && <SearchBarMobile />}
            {!isMobile && <SearchBarDesktop />}
        </>
    )
}

export default SearchBar