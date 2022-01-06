import { createStore } from "redux";
import { applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "../reducers/CartReducer";
import { productReducer,productDetailReducer } from "../reducers/ProductReducer";

const reducers=combineReducers({
   cart:cartReducer,
   products:productReducer,
   productDetail:productDetailReducer
})

const middleware=[thunk]

const store= createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;