import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useState } from "react";
import { CurrencyProvider } from "../contexts/currency";


function MainLayout(){

  const [currency, setCurrency] = useState("USD");

  const changeCurrency = (curr) => {
    console.log("Currency changed to: ", curr);
    
    setCurrency(curr)
  };
    return(
        <CurrencyProvider value={{ currency, changeCurrency }}>
            <NavBar />
            <Outlet />
        </CurrencyProvider>
    )
}

export default MainLayout;