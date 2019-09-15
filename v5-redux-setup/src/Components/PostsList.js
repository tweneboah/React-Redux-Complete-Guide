import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchPosts } from '../redux/actions/index'

const PostList = (props) => {
    //State
    const [posts, setPost] = useState([])


    //Calling the action creator
    useEffect(() => {
        props.fetchPosts()
    },[]);

    //Updating state
    useEffect(() => {
        setPost(props.state)
    })
    console.log(posts)
  return (
    <div>
      <h2>List of posts</h2>
      <h3>The total post is {posts.length}</h3>

      {posts.map((post) => {
          return(
              <div key = {post.id}>
               <h4>{post.title}</h4>
               <p>{post.body}</p>
              </div>
            )
          })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      state: state.posts.posts
  }
}

export default connect(mapStateToProps, {fetchPosts}) (PostList)
