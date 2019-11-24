import { combineReducers } from 'redux';
import searchReducer from './searchReducers';
import authReducer from './authReducers'

const rootReducer = combineReducers({
    searchReducer,
    authReducer
})

export default rootReducer;