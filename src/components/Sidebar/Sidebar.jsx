import React from 'react';
import s from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar";
import MyFriends from "./MyFriends/MyFriends";


const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar />
            <MyFriends friends ={props.state.myFriends}/>
        </div>
    )
}

export default Sidebar;
