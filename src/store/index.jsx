import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cart-slice"
// import dummyReducer from "./slices/dummy-slice"

const store = configureStore({
    reducer:{
        cart:CartReducer,
    },
});

export default store ;