import { Link } from "react-router-dom";

export default function Movie(props){
    const movie = props.movie
    return(
            <Link to={`/sessoes/${movie.id}`}  >
                <li className="filme" onClick={()=> props.select({movienName: movie.title, url: movie.posterURL})}>
                    <img src={movie.posterURL}></img>
                </li>
            </Link>
       )
}