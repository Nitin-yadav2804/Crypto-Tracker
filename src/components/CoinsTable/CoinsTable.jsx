import { useState } from "react"
import useCoinsTable from "../../hooks/useCoinsTable"
import useCurrency from "../../contexts/currency"
import { Link } from "react-router-dom"


function CoinsTable() {
    
    const { currency } = useCurrency()
    const [page, setPage] = useState(1)

    const {data: coinsTable, loading} = useCoinsTable(page, currency)

    if (loading) {
        return <div>Loading...</div>
    }

    if (coinsTable.length === 0) {
        return <div>No data available</div>
    }
    return(
        <div className="w-full text-[var(--black)] dark:text-[var(--white)] py-20 px-30">
            <table className="w-full rounded-2xl">
                <thead className="bg-amber-500 rounded-2xl text-[var(--black)]">
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
                                <Link to={`/details/${data.id}`}>
                                    <td className="flex items-center w-[30%] text-center p-2 gap-10">
                                        <img
                                            src={data.image}
                                            alt={data.name}
                                            className="w-[150px] h-[150px] object-contain"
                                        />
                                        <div className="flex flex-col items-start justify-center">
                                            <div className="font-bold text-2xl">{data.name}</div>
                                            <div className="text-xl">{data.symbol}</div>
                                        </div>
                                    </td>
                                </Link>
                                <td className="w-[25%] p-1 text-xl text-center">{data.current_price?.toLocaleString()}</td>
                                <td className="w-[20%] p-1 text-xl text-center">{data.price_change_24h?.toLocaleString()}</td>
                                <td className="w-[25%] p-1 text-xl text-end">{data.market_cap?.toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br />
            <div className="flex justify-between items-center w-[100%]">
                <button 
                    className="w-[150px] h-[50px] text-[var(--black)] bg-amber-500 text-2xl rounded-2xl font-bold cursor-pointer"
                    onClick={() => {
                        setPage(page-1)
                        window.scrollTo({
                            top: 100,
                            left: 100,
                            behavior: "smooth",
                        });
                    }}
                    disabled={page===1}
                >
                    Previous
                </button>
                <button 
                    className="w-[150px] h-[50px] text-[var(--black)] bg-amber-500 text-2xl rounded-2xl font-bold cursor-pointer"
                    onClick={() => {
                        setPage(page+1)
                        window.scrollTo({
                            top: 100,
                            left: 100,
                            behavior: "smooth",
                        });
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default CoinsTable