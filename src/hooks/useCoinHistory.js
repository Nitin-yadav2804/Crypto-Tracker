import axios from "axios"
import { useEffect, useState } from "react"
import useCurrency from "../contexts/currency"

function useCoinHistory( coinId , days = 1 ) {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { currency } = useCurrency()

    const[interval, setInterval] = useState('daily')

    useEffect(() => {
        if(days == 1) setInterval('')
        async function fetchCoinHistory() {
            const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`
                // eslint-disable-next-line no-unused-vars
                const response = await axios.get(url)
                    .then(response => {
                        setData(response.data)
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(error => {
                        setData([])
                        setError(true)
                    })
                    .finally(() => setLoading(false));
        }
        fetchCoinHistory()
    }, [coinId, currency, days,interval])

    return { data, loading, error }
}

export default useCoinHistory