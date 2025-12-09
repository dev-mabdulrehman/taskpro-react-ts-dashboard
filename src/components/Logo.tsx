import type { LogoProps } from "../types/Logo"

const Logo = ({ size }: LogoProps) => {
    return (
        <div className={`${size == "lg" ? 'text-4xl' : 'text-xl'} text-white font-bold`}>TaskPro <i className="fa-solid text-primary fa-chart-simple"></i></div>
    )
}

export default Logo