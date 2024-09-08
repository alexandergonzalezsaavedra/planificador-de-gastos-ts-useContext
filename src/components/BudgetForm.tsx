import { useState, ChangeEvent, useMemo, FormEvent } from "react"
import { useBudget } from "../hook/useBudget"
const BudgetForm = () => {
    const [budget, setBudget] = useState(0)

    const { dispatch } = useBudget()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }
    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("definir presupuesto")
        dispatch({ type: 'add-budget', payload: { budget } })
    }
    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="" className="text-3xl text-blue-700 font-bold text-center">
                    Definir presupuesto
                </label>
                <input
                    className="w-full bg-white border border-gray-400 py-2 px-5 rounded-full"
                    type="number"
                    placeholder="Define tu presupuesto"
                    id="budget"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>
            <input
                className="w-full bg-indigo-600 text-white text-center uppercase font-bold rounded-full py-2 cursor-pointer hover:bg-indigo-800 duration-1000 disabled:opacity-40"
                type="submit"
                value="Definir presupuesto"
                disabled={isValid}
            />
        </form>
    )
}
export default BudgetForm
