import useCoinsTable from "../../hooks/useCoinsTable"


function CoinsTable() {

    const coinsTable = useCoinsTable()

    return(
        <div className="w-full text-[var(--black)] dark:text-[var(--white)] py-20 px-50">
            <table className="w-full rounded-2xl">
                <thead className="bg-amber-500 rounded-2xl">
                    <tr>
                        <th className="w-[30%] p-2 text-2xl font-bold">Coin</th>
                        <th className="w-[25%] p-2 text-2xl font-bold">Current Price</th>
                        <th className="w-[20%] p-2 text-2xl font-bold">24H change</th>
                        <th className="w-[25%] p-2 text-2xl font-bold">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {coinsTable?.map((data) => {
                        return(
                            <tr key={data.id}>
                                <td className="flex items-center w-[30%] text-center p-2 gap-10">
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className="w-[150px] h-[150px] object-contain"
                                    />
                                    <div className="flex flex-col items-start justify-center">
                                        <div className="font-bold text-2xl whitespace-nowrap">{data.name}</div>
                                        <div className="text-xl">{data.symbol}</div>
                                    </div>
                                </td>
                                <td className="w-[25%] p-1 text-xl text-center">{data.current_price?.toLocaleString()}</td>
                                <td className="w-[20%] p-1 text-xl text-center">{data.price_change_24h?.toLocaleString()}</td>
                                <td className="w-[25%] p-1 text-xl text-end">{data.market_cap?.toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CoinsTable