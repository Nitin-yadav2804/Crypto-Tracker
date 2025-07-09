import axios from "axios"
import { useEffect, useState } from "react"

function useCoinsTable( page = 1, currency = 'usd') {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const perPage = 20

    useEffect(() => {
        async function fetchCoinsTable() {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`
                // eslint-disable-next-line no-unused-vars
                const response = await axios.get(url)
                    .then(response => {
                        setData(response.data)
                    })
                    .catch(error => {
                        setData([])
                        console.error("Error fetching coins data:", error);
                    })
                    .finally(() => setLoading(false));
        }
        fetchCoinsTable()
    }, [currency,page])

    return { data, loading }
}

export default useCoinsTable