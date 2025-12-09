import { MAIN_NAV_LINKS } from "../../data/navigation"
import BottomNavMobileItem from "./BottomNavMobileItem"

const BottomNavMobile = () => {
  return (
    <div className='sticky bottom-0 flex justify-evenly bg-white shadow-top p-4'>
      {MAIN_NAV_LINKS.map(mainNavLink => <BottomNavMobileItem key={mainNavLink.name} {...mainNavLink}/>)}
    </div>
  )
}

export default BottomNavMobile