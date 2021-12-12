import React from 'react';
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {

    let friendsElements = props.friends.map(f => <Friend name ={f.name} ava={f.avatar}/>);
    return (
        <div className={s.friends}>
            {friendsElements}
        </div>
    )
}

export default MyFriends;