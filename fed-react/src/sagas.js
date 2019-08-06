/*
    sagas file handle all async logic in the app such as http request
 */

import { put, all, takeEvery } from 'redux-saga/effects';
import {GET_PRODUCTS} from './constants';
import products from './products.json';
import {getProductsFail, getProductsSuccess} from './actions';

function* getProductsHandler() {
    try {
        // get data from json.file, in real scenario should be async call from server
        const data = yield products;
        yield put(getProductsSuccess(data));
    } catch (err) {
        yield put(getProductsFail(err));
        alert('something went wrong, please try again later');
    }
}

function* actionWatcher() {
    yield takeEvery(GET_PRODUCTS, getProductsHandler);
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
