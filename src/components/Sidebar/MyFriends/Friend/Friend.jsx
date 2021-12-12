import React from 'react';
import s from './Friend.module.css';


const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.ava} alt="avatar" />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;