const INITIAL_STATE = {
    posts: []
}
const postReducers = (state = INITIAL_STATE, action) => {
     switch(action.type) {
         case 'FETCH_POSTS':
             return {
                 ...state,
                 posts: action.payload
             }
             default:
                 return state
     }
};
export default postReducers;