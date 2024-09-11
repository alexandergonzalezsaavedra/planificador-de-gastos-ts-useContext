import { formatCurrency } from "../helpers"
type AmountDisplayProps = {
    label: string
    amount: number
}
const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
    return (
        <p className="flex flex-col font-bold text-left">
            {label}
            <span className="text-2xl text-indigo-600 font-bold">
                {formatCurrency(amount)}
            </span>
        </p>
    )
}
export default AmountDisplay