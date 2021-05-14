import { Link } from "react-router-dom";
import "./Session.css"
export default function Session(props){
    const session = props.session
    const selected = props.selected
    const select = props.select
    return(
        <div>
            <p> {session.weekday} - {session.date}</p>
            <div className="times">
            {session.showtimes.map((time,i)=>{ 
                    return(
                        <Link key={i} to={`/assentos/${time.id}`} onClick={()=>{
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