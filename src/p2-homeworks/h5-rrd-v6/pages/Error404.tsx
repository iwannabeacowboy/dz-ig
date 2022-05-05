import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div id={s.notfound}>
            <div className={s.notfound}>
                <div className={s.notfound404}>
                    <h3>Oops! Page not found</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>I am sorry, but the page you requested was not found</h2>
            </div>
        </div>

    )
}

export default Error404
