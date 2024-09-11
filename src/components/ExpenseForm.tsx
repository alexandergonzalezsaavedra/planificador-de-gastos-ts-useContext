import { useState, ChangeEvent, FormEvent } from "react";
import type { DraftExpens, Value } from "../types";
import { categories } from "../data/categories"
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hook/useBudget";

const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpens>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date(),
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountField ? Number(value) : value
        })
    }

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }
    const [error, setError] = useState('')

    const { dispatch } = useBudget()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(expense).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        dispatch({ type: 'add-expense', payload: { expense } })
        // reiniciar state formulario
        setExpense({
            amount: 0,
            expenseName: '',
            category: '',
            date: new Date(),
        })
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend className="text-center text-2xl border-b-2 border-blue-600 py-2 text-blue-600 font-black">
                Nuevo gasto
            </legend>
            {
                error &&
                <ErrorMessage>
                    {error}
                </ErrorMessage>
            }
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl"
                    htmlFor="expenseName"
                >
                    Nombre Gasto
                </label>
                <input
                    className="w-full py-2 px-5 border border-slate-200 rounded-full"
                    type="text"
                    id="expenseName"
                    name="expenseName"
                    placeholder="Añade el nombre del gasto"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl"
                    htmlFor="amount"
                >
                    Cantidad
                </label>
                <input
                    className="w-full py-2 px-5 border border-slate-200 rounded-full"
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Añade la cantidad del gasto ej. 300"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl"
                    htmlFor="category"
                >
                    Categoría
                </label>
                <select
                    className="w-full py-2 px-5 border border-slate-200 rounded-full"
                    id="category"
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    {
                        categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl"
                    htmlFor="amount"
                >
                    Fecha de gasto
                </label>
                <DatePicker
                    className="bg-slate-200 py-2 px-5 rounded-full first:border-0"
                    onChange={handleChangeDate}
                    value={expense.date}
                />
            </div>
            <input
                className="w-full py-2 font-bold text-white bg-blue-600 hover:bg-blue-800 duration-1000 uppercase rounded-full cursor-pointer"
                type="submit"
                value="Agregar gasto"
            />
        </form>
    )
}

export default ExpenseForm
