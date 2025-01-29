'use client'

import { Suspense, useCallback, useEffect } from "react";
import { stripe } from "./lib/stripe";

function App() {
    const handleFetch = useCallback(async () => {
        return await stripe.products.list({
            expand: ["data.default_price"],
        });
    }, []);
   

    return (
        <>
            <h1>batata</h1>
        </>
    );
}

export default App;
