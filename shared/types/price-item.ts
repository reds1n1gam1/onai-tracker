import type { SubscriptionTypes } from "./subscriptions";

export interface PriceItem {
    type: SubscriptionTypes,
    title: string,
    price: number,
    description: string,
    buttonText: string,
    hintText?: string,
    features: string[]
}