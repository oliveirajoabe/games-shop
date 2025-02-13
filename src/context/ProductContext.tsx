import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useReducer,
} from "react";
import Stripe from "stripe";
import { productInitialState } from "../reducers/products/initialState";
import { productReducer } from "../reducers/products/reducer";
import {
    handleAddProductToCart,
    handleErrorProducts,
    handleFetchedProducts,
    handleLoadingProducts,
    handleRemoveProductToCart,
} from "../reducers/products/action";
import { stripe } from "../lib/stripe";

interface ProductContextProviderProps {
    children: ReactNode;
}

interface ProductContextType {
    loading: boolean;
    data: Stripe.Product[];
    cart: Stripe.Product[];
    error: any;
    handleFetchGetProducts: () => void;
    handleAddProductCart: (item: Stripe.Product) => void;
    handleRemoveProductCart: (item: Stripe.Product) => void;
}

export const ProductContext = createContext({} as ProductContextType);

export function ProductContextProvider({
    children,
}: ProductContextProviderProps) {
    const [state, dispatch] = useReducer(productReducer, productInitialState);

    const handleFetchGetProducts = useCallback(async () => {
        dispatch(handleLoadingProducts());

        try {
            const response = await stripe.products.list({
                expand: ["data.default_price"],
            });

            dispatch(handleFetchedProducts(response.data));
        } catch (error) {
            dispatch(handleErrorProducts(error));
        }
    }, []);

    const handleAddProductCart = useCallback((item: Stripe.Product) => {
        dispatch(handleAddProductToCart(item));
    }, []);

    const handleRemoveProductCart = useCallback((item: Stripe.Product) => {
        dispatch(handleRemoveProductToCart(item));
    }, []);

    return (
        <ProductContext.Provider
            value={{
                handleFetchGetProducts,
                loading: state.loading,
                data: state.data as Stripe.Product[],
                error: state.error,
                cart: state.cart,
                handleAddProductCart,
                handleRemoveProductCart,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export const useProduct = () => {
    return useContext(ProductContext);
};
