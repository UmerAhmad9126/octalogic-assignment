import { COURSE_FAILURE, COURSE_REQUEST, GET_COURSE_SUCCESS, POST_COURSE_SUCCESS } from "../actionType";
import axios from "axios"

const courseRequestAction = () => {
    return { type: COURSE_REQUEST }
}

const courseFailureAction = () => {
    return { type: COURSE_FAILURE }
}

const getcourseSuccessAction = (payload) => {
    return { type: GET_COURSE_SUCCESS, payload }
}

const PostcourseSuccessAction = () => {
    return { type: POST_COURSE_SUCCESS }
}


// get course Data

export const getCourseData = () => (dispatch) => {
    dispatch(courseRequestAction());

    axios.get("http://localhost:8000/courses")
        .then((res) => {
            // console.log('res:', res.data);
            dispatch(getcourseSuccessAction(res.data));
        })
        .catch((err) => {
            // console.log('err:', err);
            dispatch(courseFailureAction());
        })
};



// post course Data
export const postCourseData = (payload) => (dispatch) => {
    dispatch(courseRequestAction());

    axios.post("http://localhost:8000/courses", payload)
        .then((res) => {
            dispatch(PostcourseSuccessAction());
            console.log('res:', res)
        })
        .catch((err) => {
            dispatch(courseFailureAction());
        })
}