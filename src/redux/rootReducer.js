import { combineReducers } from 'redux'
import LoginReducer from '../views/login/reducer'


const rootReducer = combineReducers({
  login: LoginReducer,
})

export default rootReducer
