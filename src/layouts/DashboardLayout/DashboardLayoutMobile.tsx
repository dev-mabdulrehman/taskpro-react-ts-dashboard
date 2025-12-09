import { Outlet } from 'react-router'

const DashboardLayoutMobile = () => {
    return (
        <div className="flex flex-col">
            DashboardLayoutMobile
            <Outlet />
        </div>
    )
}

export default DashboardLayoutMobile