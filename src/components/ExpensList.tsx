import { useMemo } from "react"
import { useBudget } from "../hook/useBudget"
import ExpenseDetails from "./ExpenseDetails"
const ExpensList = () => {

    const { state } = useBudget()
    console.log(state.expenses)

    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
    return (
        <div className="mt-10">
            {
                isEmpty ?
                    <p className="text-gray-600 text-2xl font-bold">
                        No hay gastos
                    </p>
                    :
                    <>
                        <p className="text-gray-600 text-2xl font-bold">
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
