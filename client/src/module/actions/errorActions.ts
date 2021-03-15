import { GET_ERRORS, CLEAR_ERRORS } from './types'

// RETURN ERRORS
export const returnErrors = (message: any) => {
    return {
        type: GET_ERRORS,
        payload: {message: message}
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}