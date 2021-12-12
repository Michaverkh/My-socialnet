import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {

  return (
    <div className={s.item}>
      <img src="https://vraki.net/sites/default/files/inline/images/1_6.png" alt="" />
      {props.message}
      <button>like {props.likesCount}</button>
    </div>)
}

export default MyPost;