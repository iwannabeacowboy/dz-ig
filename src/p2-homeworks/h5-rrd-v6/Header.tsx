import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from './Pages';

function Header() {
    return (
        <div className={s.header}>
            <NavLink
                className={({isActive}) => isActive ? `${s.active} ${s.link}` : s.link}
                to={PATH.PRE_JUNIOR}
            >
                Pre-Junior
            </NavLink>
            <NavLink
                className={({isActive}) => isActive ? `${s.active} ${s.link}` : s.link}
                to={PATH.JUNIOR}
            >
                Junior
            </NavLink>
            <NavLink
                className={({isActive}) => isActive ? `${s.active} ${s.link}` : s.link}
                to={PATH.JUNIOR_PLUS}
            >
                Junior+
            </NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
