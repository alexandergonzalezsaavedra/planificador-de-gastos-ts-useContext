import { useEffect, useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hook/useBudget"
import BudgedTraker from "./components/BudgedTraker"
import ExpenseModal from "./components/ExpenseModal"
import ExpensList from "./components/ExpensList"
function App() {

  const { state } = useBudget()

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])
  return (
    <>
      <header className="bg-blue-950 py-8 max-h-72">
        <h1 className="text-center text-4xl text-white">
          Planificador de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {
          isValidBudget ? <BudgedTraker /> : <BudgetForm />
        }
      </div>
      {
        isValidBudget && (
          <main className="max-w-3xl mx-auto py-10">
            <ExpenseModal />
            <ExpensList />
          </main>
        )
      }
    </>
  )
}
export default App