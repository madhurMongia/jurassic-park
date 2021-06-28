import React from 'react'
import {events} from './event';
import "./styles/events.css"
export default function Events() {
    return (
        <>
        <div className="title">ATTRACTIONS AND EVENTS</div>
        <div className = "events">
            {events.map((event) =>{
                return(
                <div className="card-event">
                <div className="card-img"><img src={event.image} alt="" /></div>
                <div className="card-title">{event.title}</div>
                <div className="card-content">{event.content}</div>
            </div>
                )
            })
            }
        </div>
        </>
    )
}
