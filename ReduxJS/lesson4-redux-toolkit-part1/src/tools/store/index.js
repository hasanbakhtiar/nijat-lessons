import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/productSlice';
import categorySlice from '../features/categorySlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice
    }
})

export default store;