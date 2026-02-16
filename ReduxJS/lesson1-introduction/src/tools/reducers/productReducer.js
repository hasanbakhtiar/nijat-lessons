
const initalState = [];

export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return [...state,action.product];

        default:
            return state;
    }
}