// import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav className={s.sidebar}>
            <div className={s.item}>
                <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav