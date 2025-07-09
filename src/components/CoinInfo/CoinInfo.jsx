import { useParams } from "react-router-dom"
import useCoinHistory from "../../hooks/useCoinHistory"
import { Line } from 'react-chartjs-2';
import Alerts from "../Alerts/Alerts";
import PageLoader from "../PageLoader/PageLoader";



function CoinInfo() {

    const coin = useParams()
    const coinId = coin.coinId

    const { data: coinInfo, loading,error } = useCoinHistory( coinId )

    if (loading) {
        return (
            <PageLoader />
        )
    }

    if(error) {
        return(
            <div>
                <Alerts 
                    message={'Something Went Wrong'}
                    type={'error'}
                />
            </div>
        )
    }

    if (coinInfo.length === 0) {
        return (
            <div>
                <Alerts 
                    message={'No Data Available'}
                    type={'info'}
                />
            </div>
        )
    }

    return(
        <div>
            
        </div>
    )
}

export default CoinInfo