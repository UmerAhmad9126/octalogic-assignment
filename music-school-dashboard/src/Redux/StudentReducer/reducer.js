import { COURSE_FAILURE, COURSE_REQUEST, GET_STUDENT_SUCCESS } from "../actionType"

const initialState = {
    isLoading: false,
    isError: false,
    students: [],
}


export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case COURSE_REQUEST: return { ...state, isLoading: true }
        case COURSE_FAILURE: return { ...state, isError: true, isLoading: false }
        case GET_STUDENT_SUCCESS: return { ...state, isLoading: false, students: payload }
        default: return state;

    }
}