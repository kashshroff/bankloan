import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import './constant/Interfaces'
import rootReducer from './module/reducers'

let store: any
if (process.env.NODE_ENV === 'development') store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f: any) => f))
else store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store