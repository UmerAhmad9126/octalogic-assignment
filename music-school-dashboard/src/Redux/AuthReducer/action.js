import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"
import { toast } from 'react-toastify';

const LoginRequestAction = () => {
    return { type: LOGIN_REQUEST, }
}

const LoginFailureAction = () => {
    return { type: LOGIN_FAILURE, }
}

const loginSuccessAction = (payload) => {
    return { type: LOGIN_SUCCESS, payload }
}


export const loginUser = (userData) => (dispatch) => {

    dispatch(LoginRequestAction());

    return axios.post("https://reqres.in/api/login", userData)
        .then((res) => {
            console.log('res:', res.data);
            dispatch(loginSuccessAction(res.data.token));
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(LoginFailureAction());
            toast.error('Login Failed, Please Use Reqres Email!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
            });
        });

}