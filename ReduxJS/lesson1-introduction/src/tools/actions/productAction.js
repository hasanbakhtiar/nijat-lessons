export const createProductAction = ({title,price}) => ({
    type: "CREATE_PRODUCT",
    product: {
        id: crypto.randomUUID(),
        title,
        price
    }
})