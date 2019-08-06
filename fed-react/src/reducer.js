import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    SET_FILTER
} from "./constants";
import {fromJS} from "immutable";

const initState =  fromJS({
    products: [],
    categories: [],
    loading: false,
    filter: ''
});

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return state.set('filter', action.filter);
        case GET_PRODUCTS:
            return state.set('loading', true);
        case GET_PRODUCTS_SUCCESS:
            return state
                .set('products', action.data.products)
                .set('categories', action.data.categories)
                .set('loading', false);
        case GET_PRODUCTS_FAIL:
            return state.set('products', action.data).set('loading', false);
        default:
            return state
    }
}

export default rootReducer;
