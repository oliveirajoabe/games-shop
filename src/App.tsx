import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ProductContextProvider } from "./context/ProductContext";

function App() {
    return (
        <BrowserRouter>
            <ProductContextProvider>
                <Router />
            </ProductContextProvider>
        </BrowserRouter>
    );
}

export default App;
