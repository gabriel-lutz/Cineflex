import { Link } from "react-router-dom";
import { useState} from "react"
export default function Session(props){
    const session = props.session
    const selected = props.selected
    const select = props.select
    return(
        <div>
            <p> {session.weekday} - {session.date}</p>
            <div className="times">
            {session.showtimes.map((time)=>{
                    return(
                        <Link to={`/assentos/${time.id}`} onClick={()=>{
                            select({...selected, weekday: session.weekday, time: time.name, date: session.date })
                            }}>
                            <div className="time">
                                {time.name}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}