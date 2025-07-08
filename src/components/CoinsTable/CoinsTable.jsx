import useCoinsTable from "../../hooks/useCoinsTable"


function CoinsTable() {

    const coinsTable = useCoinsTable()

    return(
        <div className="w-full text-[var(--black)] dark:text-[var(--white)]">
            <table className="w-full border-collapse border-2 border-[var(--black)] dark:border-[var(--white)]">
                <thead>
                    <tr className="border-1">
                        <th className="w-[20%] p-2 text-2xl font-bold">Image</th>
                        <th className="w-[20%] p-2 text-2xl font-bold">Name</th>
                        <th className="w-[20%] p-2 text-2xl font-bold">Current Price</th>
                        <th className="w-[20%] p-2 text-2xl font-bold">Market Cap</th>
                        <th className="w-[20%] p-2 text-2xl font-bold">Total Supply</th>
                    </tr>
                </thead>
                <tbody className="border-1">
                    {coinsTable?.map((data) => {
                        return(
                            <tr className="border-1" key={data.id}>
                                <td className="w-[20%] text-center p-2">
                                    <img src={data.image} alt={data.name} className="h-[70%] w-[70%] inline-block" />
                                </td>
                                <td className="w-[20%] p-1 text-xl text-center">{data.name}</td>
                                <td className="w-[20%] p-1 text-xl text-center">{data.current_price?.toLocaleString()}</td>
                                <td className="w-[20%] p-1 text-xl text-center">{data.market_cap?.toLocaleString()}</td>
                                <td className="w-[20%] p-1 text-xl text-center">{data.total_supply?.toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CoinsTable