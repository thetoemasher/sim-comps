import axios from 'axios';

let initialState = {
    books: []
}

const FULFILLED = "_FULFILLED";
const GET_BOOKS = "GET_BOOKS";

export function getBooks() {
    let books = axios.get('/api/books').then(res => {
        return res.data
    })
    return {
        type: GET_BOOKS,
        payload: books
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS + FULFILLED:
            return Object.assign({}, state, {books: action.payload})
        default:
            return state;
    }
}