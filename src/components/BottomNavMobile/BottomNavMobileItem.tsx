import { Link, useLocation } from "react-router"
import type { INavLink } from "../../types/navigation"

const BottomNavMobileItem = ({ path, icon, name }: INavLink) => {
  const location = useLocation();
  return (
    <Link className={`flex flex-col gap-y-1 hover:text-primary items-center ${location.pathname == path ? 'text-primary' : 'text-gray-500'}`} to={path} >
          <i className={`${icon} text-2xl`}></i>
          <span className="text-xs">{name}</span>
      </Link>
  )
}

export default BottomNavMobileItem