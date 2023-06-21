import { PRODUCT_NAMES } from "../constants";
import { ListItem } from "../models";

export function initializeItems(totalNumber: number): ListItem[] {
    const items = [];
    const names = PRODUCT_NAMES;

    for (let i = 0; i < totalNumber; i++) {
        const amount = (Math.floor(Math.random() * 5) + 1).toString();

        items.push({
            id: Math.random().toString(), 
            name: names[i], 
            amount
        });
    }

    return items;
};