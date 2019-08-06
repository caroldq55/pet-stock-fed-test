import {GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_FILTER} from './constants';

export const getProducts = () => {
    return (
        {
            type: GET_PRODUCTS,
        }
    )
}

export const getProductsSuccess = (data) => {
    return (
        {
            type: GET_PRODUCTS_SUCCESS,
            data
        }
    )
}

export const getProductsFail = (err) => {
    return (
        {
            type: GET_PRODUCTS_FAIL,
            err
        }
    )
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter
    }
}
