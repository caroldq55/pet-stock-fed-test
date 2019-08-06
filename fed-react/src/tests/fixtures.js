import {fromJS} from "immutable";

const productList = [
    {
        index: 0,
        isSale: false,
        price: "$1",
        productImage: "1.jpeg",
        productName: "Beer1",
        type: "Beer"
    },
    {
        index: 1,
        isSale: true,
        price: "$2",
        productImage: "2.jpeg",
        productName: "Beer2",
        type: "Beer"
    },
    {
        index: 2,
        isSale: true,
        price: "$3",
        productImage: "3.jpeg",
        productName: "Wine1",
        type: "Wine"
    },
];

const filter = 'Beer';

const filteredList = [
    {
        index: 0,
        isSale: false,
        price: "$1",
        productImage: "1.jpeg",
        productName: "Beer1",
        type: "Beer"
    },
    {
        index: 1,
        isSale: true,
        price: "$2",
        productImage: "2.jpeg",
        productName: "Beer2",
        type: "Beer"
    }
];

const initialValue =  fromJS({
    productList: [],
    loading: false,
    filter: ''
});

export {productList, filter, filteredList, initialValue};
