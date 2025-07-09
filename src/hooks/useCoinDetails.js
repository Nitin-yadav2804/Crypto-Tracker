import axios from "axios"
import { useEffect, useState } from "react"

function useCoinDetails( coinId ) {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchCoinDetails() {
            const url = `https://api.coingecko.com/api/v3/coins/${coinId}`
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
        fetchCoinDetails()
    }, [coinId])

    return { data, loading, error }
}

export default useCoinDetails