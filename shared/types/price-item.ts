export const enum SubscriptionTypes {
    FREE = 'free',
    PRO = 'pro',
    TEAM = 'team',
}

export interface PriceItem {
    type: SubscriptionTypes,
    title: string,
    price: number,
    description: string,
    buttonText: string,
    hintText?: string,
    features: string[]
}