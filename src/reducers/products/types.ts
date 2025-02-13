import Stripe from "stripe";

export interface ProductActionProps {
    type:
        | "LOADING_PRODUCTS"
        | "FETCHED_PRODUCTS"
        | "ERROR_PRODUCTS"
        | "ADD_PRODUCT_CART"
        | "REMOVE_PRODUCT_CART";
    payload?: any;
}

export interface ProductStateProps {
    data: Stripe.Product[];
    error: object;
    loading: boolean;
    cart: Stripe.Product[];
}
