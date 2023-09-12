import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: ""
}


export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOGIN_REQUEST: return { ...state, isAuth: false, isLoading: true, };
        case LOGIN_FAILURE: return { ...state, isAuth: false, isError: true, isLoading: false };
        case LOGIN_SUCCESS: return { ...state, isAuth: true, token: payload, isLoading: false }
        default: return state
    }
}