import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage({avatar, message, time, name}: MessagePropsType) {
    return (
        <div className={s.messageContainer}>
            <img src={avatar} alt='avatar'/>
            <div className={s.message}>
                <div className={s.name}>
                    {name}
                </div>
                <div>
                    {message}
                </div>
                <div className={s.time}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
