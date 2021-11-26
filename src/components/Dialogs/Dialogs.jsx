import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return(
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Masha' id='1'/>
                <DialogItem name='Dasha' id='2'/>
                <DialogItem name='Misha' id='3'/>
                <DialogItem name='Vasya' id='4'/>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Wats up
                </div>
                <div className={s.message}>
                    The first
                </div>
            </div>
        </div>
    )
}

export default Dialogs;