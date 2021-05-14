import { Link } from "react-router-dom";

export default function Movie(props){
    const movie = props.movie
    return(
            <Link to={`/sessoes/${movie.id}`}  >
                <li className="filme" onClick={()=> props.select({movieName: movie.title, url: movie.posterURL})}>
                    <img src={movie.posterURL} alt=""></img>
                </li>
            </Link>
       )
}