import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import './Constants/Interfaces'
import rootReducer from './Reducers'

const initialState = {}

let store: any
if (process.env.NODE_ENV === 'development') store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f: any) => f))
else store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store