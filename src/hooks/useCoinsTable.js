import axios from "axios"
import useCurrency from "../contexts/currency"
import { useEffect, useState } from "react"

function useCoinsTable() {
    const { currency } = useCurrency()
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchCoinsTable() {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=10`
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                setData([]) // or handle error as needed
            }
        }
        fetchCoinsTable()
    }, [currency])

    return data
}

export default useCoinsTable