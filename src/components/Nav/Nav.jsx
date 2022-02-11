import React from "react";
import s from './Nav.module.css'

const Nav = () => {
    return(
        <nav className={s.sidebar}>
            <div className={s.item}> <a>Prof</a> </div>
            <div className={`${s.item} ${s.active}`}> <a>Mess</a> </div>
            <div className={s.item}> <a>Mess</a> </div>
            <div className={s.item}> <a>Music</a> </div>
            <div className={s.item}> <a>Settings</a> </div>
        </nav>
    )
}

export default Nav