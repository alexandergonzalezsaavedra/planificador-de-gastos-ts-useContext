import AmountDisplay from "./AmountDisplay"

const BudgedTraker = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/img/grafico.jpg" alt="Gráfica de gastos" />
            </div>

            <div className="flex flex-col justify-center items-center gap-8 text-center">
                <button
                    type="button"
                    className="bg-rose-500 py-2 w-full text-white cursor-pointer rounded-full font-bold hover:bg-rose-600 duration-1000"
                >
                    Resetear App
                </button>

                <div className="w-full space-y-5">
                    <AmountDisplay
                        label="Presupuesto"
                        amount={300}
                    />

                    <AmountDisplay
                        label="Disponible"
                        amount={200}
                    />

                    <AmountDisplay
                        label="Gastado"
                        amount={100}
                    />
                </div>

            </div>
        </div>
    )
}

export default BudgedTraker
