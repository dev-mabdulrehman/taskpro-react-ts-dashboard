import { useLocation } from "react-router"

const UnderConstruction = () => {
    const location = useLocation();
    return (
        <div className="h-[300vh]">UnderConstruction {location.pathname}</div>
    )
}

export default UnderConstruction