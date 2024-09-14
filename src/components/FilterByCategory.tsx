import { ChangeEvent } from "react"
import { categories } from "../data/categories"
import { useBudget } from "../hook/useBudget"
const FilterByCategory = () => {
    const { dispatch } = useBudget()
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        dispatch({ type: 'add-filter-category', payload: { id: e.target.value } })
    }
    return (
        <div className="bg-white shadow-lg rounded-lg p-10">

            <form >
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category">
                        Filtrar gastos
                    </label>
                    <select
                        className="border-2 border-slate-200 px-5 py-2 rounded-full shadow-lg flex-1"
                        name="category"
                        id="category"
                        onChange={handleChange}
                    >
                        <option value="">
                            -- Todas las categorías
                        </option>
                        {
                            categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

            </form>
        </div>
    )
}
export default FilterByCategory
