import { Link } from "react-router"
import type { INavLink } from "../../types/navigation"

const BottomNavMobileItem = ({ path, icon, name }: INavLink) => {
  return (
      <Link className="flex flex-col gap-y-1 hover:text-primary items-center text-gray-600" to={path} >
          <i className={`${icon} text-2xl`}></i>
          <span className="text-xs">{name}</span>
      </Link>
  )
}

export default BottomNavMobileItem