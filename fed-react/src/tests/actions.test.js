import {getProducts, getProductsSuccess, getProductsFail, setFilter} from '../actions';
import {GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_FILTER} from '../constants';
import {productList, filter} from './fixtures';

describe('actions test', () => {
   describe('getProducts', () => {
       it('should generate getProducts action object', () => {
           const expected = {
               type: GET_PRODUCTS,
           };
           expect(getProducts()).toEqual(expected);
       })
   });

    describe('getProductsSuccess', () => {
        it('should generate getProductsSuccess action object', () => {
            const data = productList;
            const expected = {
                type: GET_PRODUCTS_SUCCESS,
                data,
            };
            expect(getProductsSuccess(data)).toEqual(expected);
        })
    });

    describe('getProductsFail', () => {
        it('should generate getProductsFail action object', () => {
            const err = {};
            const expected = {
                type: GET_PRODUCTS_FAIL,
                err,
            };
            expect(getProductsFail(err)).toEqual(expected);
        })
    });

    describe('setFilter', () => {
        it('should generate setFilter action object', () => {
            const expected = {
                type: SET_FILTER,
                filter,
            };
            expect(setFilter(filter)).toEqual(expected);
        })
    });
});
