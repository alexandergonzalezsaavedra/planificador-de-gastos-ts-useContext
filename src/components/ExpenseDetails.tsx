import { Expense } from "../types"
import { formatDate } from "../helpers"
type ExpenseDetailsProps = {
    expense: Expense
}
const ExpenseDetails = ({ expense }: ExpenseDetailsProps) => {
    return (
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200">
            <div>

            </div>
            <div>
                <p>
                    {expense.expenseName}
                </p>
                <p className="text-slate-600 text-sm">
                    {
                        formatDate(expense.date!.toString())
                    }
                </p>
            </div>
        </div>
    )
}

export default ExpenseDetails
