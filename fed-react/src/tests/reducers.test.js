import rootReducer from '../reducer';
import {initialValue, filter, productList} from './fixtures';
import {SET_FILTER, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL} from '../constants';

it('should setup default initialValue', () => {
    const state = rootReducer( undefined, { type: '@@INIT'});
    expect(state).toEqual(initialValue);
});

it('should set filter', () => {
    const state = rootReducer( undefined, {type: SET_FILTER, filter});
    expect(state.get('filter')).toBe(filter);
});

it('should get products', () => {
    const state = rootReducer( undefined, {type: GET_PRODUCTS});
    expect(state.get('loading')).toBe(true);
});

it('should get products success', () => {
    const data = productList;
    const state = rootReducer( undefined, {type: GET_PRODUCTS_SUCCESS, data});
    expect(state.get('loading')).toBe(false);
    expect(state.get('productList')).toBe(data);
});

it('should get products success', () => {
    const err = {};
    const state = rootReducer( undefined, {type: GET_PRODUCTS_FAIL, err});
    expect(state.get('loading')).toBe(false);
});