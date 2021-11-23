import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      New post
    </div>
    <div className={s.posts}>
      <MyPost message='Hi, how are you?' likesCount='23'/>
      <MyPost message='Its my first...' likesCount='12'/>
      <MyPost />
    </div>
  </div>
}

export default MyPosts;