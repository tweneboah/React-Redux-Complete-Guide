import axios from 'axios';

export  const fetchPosts = () => {
     return function(dispatch) {
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {
             dispatch({
                 type: 'FETCH_POSTS',
                 payload: res.data
             })
         })
     }
}