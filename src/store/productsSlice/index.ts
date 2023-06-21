import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Models
import { AddProductPayload, ListItem, RemoveProductPayload } from "../../models";

import { initializeItems } from "../../utils";

// generate 5-15 random products
const min = 5;
const max = 15;
const randomNumber = Math.floor(Math.random() * (max - min)) + min;;
const initialState: ListItem[] = initializeItems(randomNumber);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<AddProductPayload>): void => {
            const { name, amount } = action.payload;
            state.push({ id: Math.random().toString(), name, amount });
        },
        updateProduct: (state, action: PayloadAction<ListItem>) => {
            const { id, name, amount } = action.payload;
            const existingProduct = state.find((product) => product.id === id);
            if (existingProduct) {
                existingProduct.name = name;
                existingProduct.amount = amount;
            }
        },
        removeProduct: (state, action: PayloadAction<RemoveProductPayload>): ListItem[] => {
            const { id } = action.payload;
            return state.filter((product) => product.id !== id);
        }
    },
});
export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
