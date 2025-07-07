import { useState } from "react";
import { CurrencyProvider } from "../contexts/currency";
import NavBar from "../components/NavBar/NavBar";
import crypto from "../assets/crypto.jpg"
import invertedCrypto from "../assets/invertedCrypto.jpg"
import useTheme from "../contexts/theme";


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
                <div className="w-full h-[200px] object-cover">
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
                
            </div>
        </CurrencyProvider>
  );
}

export default Home;
