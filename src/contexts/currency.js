import { createContext, useContext } from "react";

export const CurrencyContext = createContext({
    currency: 'USD',
    changeCurrency: () => {}
})

export const CurrencyProvider = CurrencyContext.Provider

export default function useCurrency(){
    return useContext(CurrencyContext)
}