import { createStore } from "redux";

export const counter = () => {

    const counterReducer = (state = 0, action) => {
        switch (action.type) {
            case "INCREMENT":
                return state + action.payload;
            case "DECREMENT":
                return state - action.payload;
            default:
                return state;
        }
    };



    const store = createStore(counterReducer);

    store.subscribe(() => {
        console.log(store.getState());
    })



    const counetrAction = (a) => ({
        type: "INCREMENT",
        payload: a
    })



    store.dispatch(counetrAction(4))
    store.dispatch(counetrAction(124))
    store.dispatch(counetrAction(34))
    store.dispatch(counetrAction(44))
    store.dispatch(counetrAction(4))
    // store.dispatch({
    //     type: "INCREMENT",
    //     payload: 10
    // })
    // store.dispatch({
    //     type: "INCREMENT",
    //     payload: 10
    // })
    // store.dispatch({
    //     type: "INCREMENT",
    //     payload: 10
    // })
    store.dispatch({
        type: "DECREMENT",
        payload: 10
    })


}