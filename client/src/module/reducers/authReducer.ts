import { getToken, removeToken, setToken } from '../../utils/index';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from '../actions/types'

const initialState = {
    token: getToken(),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

function authReducer (state = initialState, action: any) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case AUTH_ERROR:
        case LOGIN_FAILED:
        case LOGOUT_SUCCESS:
        case REGISTER_FAILED:
            removeToken()
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: null,
                token: null
            }


        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            setToken(action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }


        default:
            return state
    }
}

export default authReducer;