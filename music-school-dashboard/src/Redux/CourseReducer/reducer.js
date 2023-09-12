import { COURSE_FAILURE, COURSE_REQUEST, GET_COURSE_SUCCESS, PATCH_COURSE_SUCCESS, POST_COURSE_SUCCESS } from "../actionType"

const initialState = {
    isLoading: false,
    isError: false,
    courses: [],
}


export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case COURSE_REQUEST: return { ...state, isLoading: true }
        case COURSE_FAILURE: return { ...state, isError: true, isLoading: false }
        case GET_COURSE_SUCCESS: return { ...state, isLoading: false, courses: payload }
        case POST_COURSE_SUCCESS: return { ...state, isLoading: false }
        case PATCH_COURSE_SUCCESS: return { ...state, isLoading: false, }
        default: return state;

    }
}