import { Link } from "react-router"
import type { INavLink } from "../../types/navigation"

const SidebarItem = ({ path, icon, name }: INavLink) => {
    return (
        <Link to={path} className="flex gap-3 items-center w-full cursor-pointer text-white hover:bg-[#2d2c31] p-4 px-8">
            <i className={`${icon} text-2xl`} aria-hidden="true"></i>
            <span className="text-xl font-medium">{name}</span>
        </Link>
    )
}

export default SidebarItem