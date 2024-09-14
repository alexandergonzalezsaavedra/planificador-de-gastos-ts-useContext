import { useMemo } from "react"
import { useBudget } from "../hook/useBudget"
import ExpenseDetails from "./ExpenseDetails"
const ExpensList = () => {
    const { state } = useBudget()
    const filterExpense = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => filterExpense.length === 0, [filterExpense])
    return (
        <div className="mt-10">
            {
                isEmpty ?
                    <p className="text-gray-600 text-2xl font-bold mb-5">
                        No hay gastos
                    </p>
                    :
                    <>
                        <p className="text-gray-600 text-2xl font-bold mb-5">
                            Listado de gastos
                        </p>
                        {
                            filterExpense.map(expense => (
                                <ExpenseDetails
                                    key={expense.id}
                                    expense={expense}
                                />
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default ExpensList
