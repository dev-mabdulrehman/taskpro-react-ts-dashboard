import type { ContainerProps } from "../types/Container"

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="w-full mx-auto py-4 p-4 md:px-12">
            {children}
        </div>
    )
}

export default Container