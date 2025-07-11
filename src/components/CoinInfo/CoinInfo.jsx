import { useParams } from "react-router-dom"
import useCoinHistory from "../../hooks/useCoinHistory"
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import Alerts from "../Alerts/Alerts";
import PageLoader from "../PageLoader/PageLoader";
import { useState } from "react";
import useCurrency from "../../contexts/currency";
import useTheme from "../../contexts/theme";


function CoinInfo() {

    Chart.register(CategoryScale)

    const coin = useParams()
    const coinId = coin.coinId

    const { currency } = useCurrency()
    const { isDark } = useTheme()

    const color =  isDark ? '#F2EFE9' : '#110726'
    const gridColor = isDark ? 'rgba(242, 239, 233,0.1)' : 'rgba(17, 7, 38,0.1)'

    const[days, setDays] = useState(1)
    const[interval, setInterval] = useState('')

    const { data: coinInfo, loading,error } = useCoinHistory( coinId, days, interval )

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
        <div className="flex flex-col p-5 mt-6 justify-center items-center gap-10">
            <Line 
                className="text-[var(--black)] dark:text-[var(--white)]"
                options={{
                    responsive: true,
                    datasets: {
                        line: {
                            fill: true,
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: `${gridColor}`,
                            },
                            ticks: {
                                color: `${color}`,
                            }
                        },
                        y: {
                            grid: {
                                color: `${gridColor}`,
                            },  
                            ticks: {
                                color: `${color}`,
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: `${color}`,
                                font: {
                                    size: 15,
                                }
                            }
                        }
                    }
                }}
                data={{
                    labels: coinInfo.prices.map((price) => {
                        let date = new Date(price[0])
                        let time = (date.getHours() > 12) ? 
                                                        `${date.getHours() - 12} : ${date.getMinutes()} PM`
                                                    :
                                                        `${date.getHours()} : ${date.getMinutes()} AM`
                        return (days === 1 || days === 7) ? time : date.toLocaleDateString()
                    }),
                    datasets: [
                        {
                            label: `Price past ${days} days in ${currency}`,
                            data: coinInfo.prices.map((price) => price[1]),
                            pointRadius: 0,
                        },
                    ],
                }}
            />
            <Line 
                className="text-[var(--black)] dark:text-[var(--white)] mt-10"
                options={{
                    responsive: true,
                    datasets: {
                        line: {
                            fill: true,
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: `${gridColor}`,
                            },
                            ticks: {
                                color: `${color}`,
                            }
                        },
                        y: {
                            grid: {
                                color: `${gridColor}`,
                            },  
                            ticks: {
                                color: `${color}`,
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: `${color}`,
                                font: {
                                    size: 15,
                                }
                            }
                        }
                    }
                }}
                data={{
                    labels: coinInfo.market_caps.map((cap) => {
                        let date = new Date(cap[0])
                        let time = (date.getHours() > 12) ? 
                                                        `${date.getHours() - 12} : ${date.getMinutes()} PM`
                                                    :
                                                        `${date.getHours()} : ${date.getMinutes()} AM`
                        return (days === 1 || days === 7) ? time : date.toLocaleDateString()
                    }),
                    datasets: [
                        {
                            label: `Market Cap past ${days} days in ${currency}`,
                            data: coinInfo.market_caps.map((cap) => cap[1]),
                            pointRadius: 0,
                            borderColor: 'rgb(235, 69, 104)',
                            backgroundColor: 'rgba(235, 69, 104, 0.3)',
                        },
                    ],
                }}
            />
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1 border-none rounded-2xl w-[10rem] bg-[var(--black)] dark:bg-[var(--white)] text-[var(--white)] dark:text-[var(--black)] font-bold text-[17px]">Select Interval</div>
                <ul tabIndex={0} className="dropdown-content menu rounded-box w-52 shadow-sm bg-[var(--black)] dark:bg-[var(--white)] text-[var(--white)] dark:text-[var(--black)] rounded-xl">
                    <li 
                        className="bg-[var(--black)] dark:bg-[var(--white)] text-[var(--white)] dark:text-[var(--black)] font-bold"
                        onClick={() => {
                            setDays(1)
                            setInterval('')
                            document.activeElement.blur()
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}
                    ><a>24 Hours</a></li>
                    <li 
                        className="bg-[var(--black)] dark:bg-[var(--white)] text-[var(--white)] dark:text-[var(--black)] font-bold"
                        onClick={() => {
                            setDays(7)
                            setInterval('')
                            document.activeElement.blur()
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}
                    ><a>7 Days</a></li>
                    <li 
                        className="bg-[var(--black)] dark:bg-[var(--white)] text-[var(--white)] dark:text-[var(--black)] font-bold"
                        onClick={() => {
                            setDays(30)
                            setInterval('daily')
                            document.activeElement.blur()
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}
                    ><a>30 Days</a></li>
                    <li 
                        className="bg-[var(--black)] dark:bg-[var(--white)] text-[var(--white)] dark:text-[var(--black)] font-bold"
                        onClick={() => {
                            setDays(90)
                            setInterval('daily')
                            document.activeElement.blur()
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}
                    ><a>90 Days</a></li>
                    <li 
                        className="bg-[var(--black)] dark:bg-[var(--white)] text-[var(--white)] dark:text-[var(--black)] font-bold"
                        onClick={() => {
                            setDays(365)
                            setInterval('daily')
                            document.activeElement.blur()
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}
                    ><a>365 Days</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CoinInfo