import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/view";
import DefaultLayout from "./components/DefaultLayout";
import { Cart } from "./pages/Cart/view";
import Success from "./pages/Success/view";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/success" element={<Success />} />
        </Routes>
    );
}
