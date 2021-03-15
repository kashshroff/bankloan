import {GET_ERRORS, CLEAR_ERRORS} from '../Actions/types'

const initialState = {
    msg: {}
}

function errorReducer (state = initialState, action: any){
    switch(action.type){
        case GET_ERRORS:
            return{
                msg: action.payload.message
            }
        
        case CLEAR_ERRORS:
            return{
                msg: {},
                status: null,
                id: null
            }

        default: 
            return state
    }
}

export default errorReducer;