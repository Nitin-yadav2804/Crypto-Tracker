import axios from "axios"
import { useEffect, useState } from "react"

function useCoinsTable( page = 1, currency = 'usd') {
    const [data, setData] = useState([])

    const perPage = 20

    useEffect(() => {
        async function fetchCoinsTable() {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`
            try {
                const response = await axios.get(url)
                setData(response.data)
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setData([]) // or handle error as needed
            }
        }
        fetchCoinsTable()
    }, [currency,page])

    return data
}

export default useCoinsTable