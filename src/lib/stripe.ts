import Stripe from "stripe";

const key = import.meta.env.VITE_STRIPE_SECRET_KEY

export const stripe = new Stripe(key, {
    appInfo: {
        name: 'JODEVTECH'
    },
})
