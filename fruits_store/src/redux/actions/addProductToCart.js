import { LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_ERROR } from "./actionTypes";


const loadPostRequest = product => {
    return {
        type: LOAD_POST_REQUEST,

    }
}

const loadPostSuccess = product => {
    return {
        type: LOAD_POST_SUCCESS,
        payload: {
            product
        }
    }
}

const loadPostError = error => {
    return {
        type: LOAD_POST_ERROR,
        payload: {
            error
        }
    }
}

const baseUrl = 'http://127.0.0.1:3001/cart';
const optionsForPOSTRequest = product =>  {
    return {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(product)
    }
}

const addProductToCart = product => dispatch => {
    dispatch(loadPostRequest(product));
    fetch(baseUrl, optionsForPOSTRequest(product))
        .then(res => res.json())
        .then(product => dispatch(loadPostSuccess()))
        .catch(err => dispatch(loadPostError(err)))
}

export default addProductToCart