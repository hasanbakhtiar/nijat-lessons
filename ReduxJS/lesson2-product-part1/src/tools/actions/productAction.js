export const createProductAction = ({ id, title, price, category }) => ({
    type: "CREATE_PRODUCT",
    product: {
        id: crypto.randomUUID(),
        title,
        price,
        category
    }
})


export const editProductAction = ({id, update}) => ({
    type: "EDIT_PRODUCT",
    id,
    update
})


export const deleteProductAction = (id) => ({
    type: "DELETE_PRODUCT",
    id
})