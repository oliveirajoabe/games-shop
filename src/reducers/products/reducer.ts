import Stripe from "stripe";
import { ActionsProductType } from "./action";
import { ProductActionProps, ProductStateProps } from "./types";

export function productReducer(
    state: ProductStateProps,
    action: ProductActionProps
) {
    switch (action.type) {
        case ActionsProductType.LOADING_PRODUCTS: {
            return {
                ...state,
                loading: true,
            };
        }

        case ActionsProductType.FETCHED_PRODUCTS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        }

        case ActionsProductType.ERROR_PRODUCTS: {
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        }

        case ActionsProductType.ADD_PRODUCT_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        }

        case ActionsProductType.REMOVE_PRODUCT_CART: {
            const selectedItem: Stripe.Product = action.payload;

            console.log(selectedItem);

            const selectedUpdateItem = state.cart.filter(
                (item) => item.id !== selectedItem.id
            );

            return {
                ...state,
                cart: [...selectedUpdateItem],
            };
        }

        default:
            return state;
    }
}
