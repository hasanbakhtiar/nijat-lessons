import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: 1,
    title: "laptop"
}];


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const newCategory = {
                id: crypto.randomUUID(),
                title: action.payload.title,
            }
            state.push(newCategory);
        }
    }
})

export default categorySlice.reducer;
export const { addCategory } = categorySlice.actions;