import { useLocation } from "react-router-dom";
import useCoinDetails from "../hooks/useCoinDetails";


function CoinDetails() {

    const { state } = useLocation()
    const coinId = state?.coinId

    const { data: coinData, loading } = useCoinDetails( coinId )

    if (loading) {
        return (
            <div className="flex gap-2 items-center justify-center mt-20 text-[var(--black)] dark:text-[var(--white)]">
                <span className="loading loading-spinner loading-xl"></span>
                <div>Loading</div>
            </div>
        )
    }

    if (coinData.length === 0) {
        return <div className="text-[var(--black)] dark:text-[var(--white)]">No data available</div>
    }

    return(
        <div className="flex bg-[var(--white)] dark:bg-[var(--black)] text-[var(--black)] dark:text-[var(--white)] p-10">
            <div className="w-full h-full basis-2/5 border-r-4 border-[var(--black)] dark:border-[var(--white)] pr-[40px]">
                <div className="w-full flex justify-center">
                    <img src={coinData.image.large} alt={coinData.name} className="w-[300px] h-[300px] "/>
                </div>
                <div className="flex flex-col justify-center w-full p-5 gap-1">
                    <h1 className="text-center font-bold text-4xl">{coinData.name}</h1>
                    <h2 className="text-center font-bold text-xl">( {coinData.symbol} )</h2>
                </div>
                <div className="w-full p-5">
                    <p className="">{coinData.description.en}</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default CoinDetails;