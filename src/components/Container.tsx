import type { ContainerProps } from "../types/Container"

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="w-full mx-auto py-4 px-12">
            {children}
        </div>
    )
}

export default Container