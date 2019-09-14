import { combineReducers } from 'redux';
import userReducer from '../reducers/users-reducers';


export default combineReducers({
    user: userReducer
});