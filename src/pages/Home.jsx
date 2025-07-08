import { useState } from "react";
import { CurrencyProvider } from "../contexts/currency";
import NavBar from "../components/NavBar/NavBar";
import crypto from "../assets/crypto.jpg"
import invertedCrypto from "../assets/invertedCrypto.jpg"
import useTheme from "../contexts/theme";
import CoinsTable from "../components/CoinsTable/CoinsTable";


function Home() {

  const [currency, setCurrency] = useState("USD");

  const {isDark} = useTheme()

  const changeCurrency = () => {
    if (currency === "USD") {
      setCurrency("INR");
    } else {
      setCurrency("USD");
    }
  };

  return (
        <CurrencyProvider value={{ currency, changeCurrency }}>
            <div className="flex flex-col w-full h-[100vh] overflow-auto bg-[var(--white)] dark:bg-[var(--black)]">
                <NavBar />
                <div className="w-full h-[250px] object-cover">
                    {isDark?
                            <img 
                                src={crypto}
                                alt="background-image" 
                                className="h-[250px] w-full brightness-70"
                            />
                        :
                            <img 
                                src={invertedCrypto}
                                alt="background-image" 
                                className="h-[250px] w-full brightness-70"
                            />}
                </div>
                <CoinsTable />
                <div className="flex justify-between items-center w-[100%] pb-10 px-50">
                  <button className="w-[150px] h-[50px] text-[var(--black)] bg-amber-500 text-2xl rounded-2xl font-bold">
                    Previous
                  </button>
                  <button className="w-[150px] h-[50px] text-[var(--black)] bg-amber-500 text-2xl rounded-2xl font-bold">
                    Next
                  </button>
                </div>
            </div>
        </CurrencyProvider>
  );
}

export default Home;
