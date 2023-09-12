import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as CourseReducer } from "./CourseReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers(
    {
        AuthReducer,
        CourseReducer
    }
)

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))