import Stripe from "stripe";

export enum ActionsProductType {
    LOADING_PRODUCTS = "LOADING_PRODUCTS",
    FETCHED_PRODUCTS = "FETCHED_PRODUCTS",
    ERROR_PRODUCTS = "ERROR_PRODUCTS",
    ADD_PRODUCT_CART = "ADD_PRODUCT_CART",
    REMOVE_PRODUCT_CART = "REMOVE_PRODUCT_CART",
}

export const handleLoadingProducts = () => {
    return {
        type: ActionsProductType.LOADING_PRODUCTS,
    };
};

export const handleFetchedProducts = (response: Stripe.Product[]) => {
    return {
        type: ActionsProductType.FETCHED_PRODUCTS,
        payload: response,
    };
};

export const handleErrorProducts = (error: any) => {
    return {
        type: ActionsProductType.ERROR_PRODUCTS,
        payload: error,
    };
};

export const handleAddProductToCart = (item: Stripe.Product) => {
    return {
        type: ActionsProductType.ADD_PRODUCT_CART,
        payload: item,
    };
};

export const handleRemoveProductToCart = (item: Stripe.Product) => {
    return {
        type: ActionsProductType.REMOVE_PRODUCT_CART,
        payload: item,
    };
};
