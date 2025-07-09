import { useParams } from "react-router-dom";
import useCoinDetails from "../hooks/useCoinDetails";
import useCurrency from "../contexts/currency"
import CoinInfo from "../components/CoinInfo/CoinInfo";
import Alerts from "../components/Alerts/Alerts";
import PageLoader from "../components/PageLoader/PageLoader";


function CoinDetails() {

    const { currency } = useCurrency()

    const coin = useParams()
    const coinId = coin.coinId

    const { data: coinData, loading, error } = useCoinDetails( coinId )

    if (loading) {
        return (
            <PageLoader />
        )
    }

    if(error) {
        return(
            <div className="mt-20">
                <Alerts 
                    message={'Something Went Wrong'}
                    type={'error'}
                />
            </div>
        )
    }

    if (coinData.length === 0) {
        return(
            <div className="mt-20">
                <Alerts 
                    message={'No Data Available'}
                    type={'info'}
                />
            </div>
        )    
    }

    return(
        <div className="flex bg-[var(--white)] dark:bg-[var(--black)] text-[var(--black)] dark:text-[var(--white)] p-10">
            <div className="w-full h-full basis-2/5 border-r-2 border-[var(--black)] dark:border-[var(--white)] pr-[40px]">
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
                <div className="flex justify-between p-5">
                    <div className="text-2xl"><span className=" font-bold">Rank: </span>{coinData.market_cap_rank}</div>
                    <div className="text-2xl"><span className=" font-bold text-amber-600">Current Price: </span>{coinData.market_data.current_price[`${currency.toLowerCase()}`]}</div>
                </div>
            </div>
            <div className="w-full basis-3/5 pl-[40px]">
                <CoinInfo />
            </div>
        </div>
    )
}
export default CoinDetails;