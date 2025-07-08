import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayout from "../../pages/Layout";
import CoinDetails from "../../pages/CoinDetails";


function Routing() {
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/coin/:coinId" element={<CoinDetails />} />
            </Route>
        </Routes>
    )
}

export default Routing;