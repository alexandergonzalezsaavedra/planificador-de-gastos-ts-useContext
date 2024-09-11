import { ReactNode } from "react"
type ErrorMessageProps = {
    children: ReactNode
}
// tambien se pude usar: PropsWithChildren para no crear un tipado
const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return (
        <p className="bg-red-100 p-2 text-red-600  font-bold text-sm text-center rounded-full">
            {children}
        </p>
    )
}
export default ErrorMessage
