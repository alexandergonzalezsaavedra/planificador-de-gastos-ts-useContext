import { useMemo } from "react"
import { useBudget } from "../hook/useBudget"
import ExpenseDetails from "./ExpenseDetails"
const ExpensList = () => {
    const { state } = useBudget()
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
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
                            state.expenses.map(expense => (
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
