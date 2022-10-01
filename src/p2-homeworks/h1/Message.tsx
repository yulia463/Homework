import React from 'react'
import s from "./Message.module.css"

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.messageBlock}>
                <div className={s.name}> {props.name} </div>
                <div className={s.timeText}>
                    <div>{props.message}</div>
                    <div>{props.time}</div>
                </div>
            </div>

        </div>
    )
}

export default Message
