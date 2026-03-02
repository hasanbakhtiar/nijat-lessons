import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: 1,
    title: "test"
}];


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: crypto.randomUUID(),
                title: action.payload.title,
                price: action.payload.price
            }
            state.push(newProduct);
        }
    }
})

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;