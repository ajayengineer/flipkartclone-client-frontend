import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})

const middlewar = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewar))
);

export default store;