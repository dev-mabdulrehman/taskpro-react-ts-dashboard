import { useLocation } from "react-router"

const UnderConstruction = () => {
    const location = useLocation();
    return (
        <div>UnderConstruction {location.pathname}</div>
    )
}

export default UnderConstruction