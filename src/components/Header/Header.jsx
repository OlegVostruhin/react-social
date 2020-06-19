import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "./../../assets/images/logo.png"
 
const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div><span className={s.userName}>{props.login} - </span><button className={s.loginButton} onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}><button className={s.loginButton}>Login</button></NavLink> }
        </div>
    </header>
}

export default Header;