import { MAIN_NAV_LINKS, UTILITY_NAV_LINKS } from "../../data/navigation"
import Logo from "../Logo"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
    return (
        <aside className="bg-[#222427] flex flex-col w-96 fixed top-0 left-0 bottom-0">
            <div className="flex py-4 items-center justify-center">
                <Logo size="lg" />
            </div>
            {MAIN_NAV_LINKS.map(mainNavLink => <SidebarItem key={mainNavLink.name} {...mainNavLink} />)}
            <div className="mt-auto pb-4">
                {UTILITY_NAV_LINKS.map(utilityNavLink => <SidebarItem key={utilityNavLink.name} {...utilityNavLink} />)}
            </div>
        </aside>
    )
}

export default Sidebar