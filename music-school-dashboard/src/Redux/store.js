import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as CourseReducer } from "./CourseReducer/reducer";
import { reducer as StudentReducer } from "./StudentReducer/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers(
    {
        AuthReducer,
        CourseReducer,
        StudentReducer
    }
)

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))