import { useParams } from "react-router-dom";
import useCoinDetails from "../hooks/useCoinDetails";
import { Facebook } from 'react-content-loader'
import useTheme from "../contexts/theme";
import useCurrency from "../contexts/currency"


function CoinDetails() {

    const { isDark } = useTheme()
    const { currency } = useCurrency()

    const coin = useParams()
    const coinId = coin.coinId
    

    const { data: coinData, loading } = useCoinDetails( coinId )

    const MyFacebookLoader = () => <Facebook />
    const MyFacebookLoaderDarkMode = () => <Facebook 
                                        backgroundColor="#000000"
                                    />

    if (loading) {
        return (
            <div className="flex gap-2 items-center justify-center mt-20 text-[var(--black)] dark:text-[var(--white)]">
                {isDark?    MyFacebookLoader()
                        :
                            MyFacebookLoaderDarkMode()
                }
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
                <div className="flex justify-between p-5">
                    <div className="text-2xl"><span className=" font-bold">Rank: </span>{coinData.market_cap_rank}</div>
                    <div className="text-2xl"><span className=" font-bold text-amber-600">Current Price: </span>{coinData.market_data.current_price[`${currency.toLowerCase()}`]}</div>
                </div>
            </div>
            <div>CoinInformation</div>
        </div>
    )
}
export default CoinDetails;