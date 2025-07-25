import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    isDark: true,
    changeTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}