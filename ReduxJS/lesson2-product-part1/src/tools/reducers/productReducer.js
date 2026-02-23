
const initalState = [];

export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return [...state, action.product];

        case "DELETE_PRODUCT":
            return state.filter(p => p.id !== action.id)

        case "EDIT_PRODUCT":
            return state.map(item => {
                if (item.id == action.id) {
                    return { ...item, ...action.update }
                } else {
                    return item;
                }
            })
        default:
            return state;
    }
}