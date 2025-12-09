import useIsMobile from "../../hooks/useIsMobile"
import DashboardLayoutMobile from "./DashboardLayoutMobile";
import DashboardLayoutDesktop from "./DashboardLayoutDesktop";

const DashboardLayout = () => {
    const isMobile = useIsMobile();
    return (
        <>
            {!isMobile &&
                <DashboardLayoutDesktop />}
            {isMobile &&
                <DashboardLayoutMobile />}
        </>
    )
}

export default DashboardLayout