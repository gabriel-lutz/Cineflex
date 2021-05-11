import { Link } from "react-router-dom";
export default function Session(props){
    const session = props.session
    
    return(
        <div>
            <p> {session.weekday} - {session.date}</p>
            <div className="times">
            {session.showtimes.map((time)=>{
                        return(
                            <Link to={`/assentos/${time.id}`}>
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