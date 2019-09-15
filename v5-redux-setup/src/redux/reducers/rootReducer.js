import { combineReducers } from 'redux';
import postReducers from '../reducers/posts-reducer'

export default combineReducers({
     posts: postReducers
})