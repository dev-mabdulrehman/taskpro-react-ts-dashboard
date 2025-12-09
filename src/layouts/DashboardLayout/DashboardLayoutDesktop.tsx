import { Outlet } from 'react-router'
import HeaderDesktop from '../../components/header/HeaderDesktop'
import Sidebar from '../../components/sidebar/Sidebar'
import Container from '../../components/Container'

const DashboardLayoutDesktop = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="relative min-h-screen w-[calc(100%-384px)] flex flex-col ml-auto">
                <HeaderDesktop />

                <main className="grow overflow-y-auto">
                    <Container>
                        <Outlet />
                    </Container>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayoutDesktop