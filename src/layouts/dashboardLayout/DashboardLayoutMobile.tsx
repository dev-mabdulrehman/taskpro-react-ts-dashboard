import { Outlet } from 'react-router'
import HeaderMobile from '../../components/header/HeaderMobile'
import BottomNavMobile from '../../components/bottomNavMobile/BottomNavMobile'
import Container from '../../components/Container'

const DashboardLayoutMobile = () => {
    return (
        <div className="flex flex-col">
            <HeaderMobile />
            <Container>
                <Outlet />
            </Container>
            <BottomNavMobile />
        </div>
    )
}

export default DashboardLayoutMobile