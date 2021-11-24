import React from 'react';
import s from './Navbar.module.css';
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <Link to="/profile">Profile</Link>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <Link to="/dialogs">Messages</Link>
        </div>
        <div className={s.item}>
            News
        </div>
        <div className={s.item}>
            Music
        </div>
        <div className={s.item}>
            Settings
        </div>
    </nav>
}

export default Navbar;