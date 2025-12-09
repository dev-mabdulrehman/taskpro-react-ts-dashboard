import { Outlet } from "react-router"

const DashboardLayout = () => {
    return (
        <div className="flex flex-col">
            DashboardLayout
            <Outlet />
        </div>
    )
}

export default DashboardLayout