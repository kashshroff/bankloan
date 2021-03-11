import { getToken } from './../Utils/index';
import { commonHeaders } from './../Constants/headers';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from './types'
import {returnErrors, clearErrors} from './errorActions'

import axios from 'axios'

// Check token and load user
export const loadUser = () => (dispatch: any, getState: any) => {
    
    // Set to loading screen
    dispatch({ type: USER_LOADING })

    // Get token from LocalStorage
    let token: any = getToken()

    // Set Headers
    let headers: any = commonHeaders();

    if(token){
        headers['x-auth-token'] = token

    }else {
        dispatch(returnErrors("Token not found"))
        dispatch({ type: LOGOUT_SUCCESS })
        return
    }

    // Fetch User
    axios.get('/api/user', {headers})
        .then((res: any) => {
            if(!res.error){
                dispatch(clearErrors())
                dispatch({
                    type: USER_LOADED,
                    payload: res.data
                })
            }else {
                dispatch(returnErrors(res.message))
                dispatch({ type: AUTH_ERROR })
            }
        })
        .catch(err => {
            dispatch(returnErrors(err))
            dispatch({ type: AUTH_ERROR })
        })


}

export const loginUser = (data: Object) => (dispatch: any, getState: any) => {
    dispatch({ type: USER_LOADING })
    dispatch({type: LOGIN_SUCCESS, payload: data})

}

export const registerUser = (data: Object) => (dispatch: any, getState: any) => {
    dispatch({ type: USER_LOADING })
    dispatch({type: REGISTER_SUCCESS, payload: data})

}

export const logoutUser = () => (dispatch: any, getState: any) => {
    dispatch({ type: LOGOUT_SUCCESS })
}