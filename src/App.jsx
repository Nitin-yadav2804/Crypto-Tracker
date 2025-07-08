import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from './contexts/theme';
import Routing from './components/Routing/Routing';

function App() {

  const [isDark, setIsDark] = useState(true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    isDark
      ? (document.querySelector("html").classList.remove("light"),
        document.querySelector("html").classList.add("dark"))
      : (document.querySelector("html").classList.remove("dark"),
        document.querySelector("html").classList.add("light"));
  }, [isDark]);

  return (
    <ThemeProvider value={{isDark, changeTheme}}>
      <Routing />
    </ThemeProvider>
  )
}

export default App
