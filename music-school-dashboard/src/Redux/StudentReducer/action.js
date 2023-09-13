import { COURSE_FAILURE, COURSE_REQUEST, GET_STUDENT_SUCCESS } from "../actionType";
import axios from "axios"

const courseRequestAction = () => {
    return { type: COURSE_REQUEST }
}

const courseFailureAction = () => {
    return { type: COURSE_FAILURE }
}

const getStudentsDataAction = (payload) => {
    return { type: GET_STUDENT_SUCCESS, payload }
}




// get course Data

export const getStudentsData = () => (dispatch) => {
    dispatch(courseRequestAction());

    axios.get("https://octalogic-backend-9hfj.onrender.com/students?_sort=enrollmentDate&_order=desc")
        .then((res) => {
            // console.log('res:', res.data);
            dispatch(getStudentsDataAction(res.data));
        })
        .catch((err) => {
            // console.log('err:', err);
            dispatch(courseFailureAction());
        })
};



