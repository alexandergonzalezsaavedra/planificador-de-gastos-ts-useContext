import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hook/useBudget"
const BudgedTraker = () => {
    const { state, totalExpenses, remainingBudget, dispatch } = useBudget()
    const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#dc2626' : '#3b82f6',
                        trailColor: '#f5f5f5',
                        textSize: 8,
                        textColor: percentage === 100 ? '#dc2626' : '#3b82f6',
                    })}
                    text={`${percentage}% gastado`}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 text-center">
                <button
                    type="button"
                    className="bg-rose-500 py-2 w-full text-white cursor-pointer rounded-full font-bold hover:bg-rose-600 duration-1000"
                    onClick={() => dispatch({ type: 'reset-app' })}
                >
                    Resetear App
                </button>
                <div className="w-full space-y-5">
                    <AmountDisplay
                        label="Presupuesto"
                        amount={state.budget}
                    />

                    <AmountDisplay
                        label="Disponible"
                        amount={remainingBudget}
                    />

                    <AmountDisplay
                        label="Gastado"
                        amount={totalExpenses}
                    />
                </div>
            </div>
        </div>
    )
}
export default BudgedTraker
