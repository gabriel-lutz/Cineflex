import { Link } from "react-router-dom";
import "./Movie.css"
export default function Movie(props){
    const movie = props.movie
    return(
                <li className="movie" onClick={()=> props.select({movieName: movie.title, url: movie.posterURL})}>
                    <Link to={`/sessoes/${movie.id}`}>
                        <div className="title">   
                            <img src={movie.posterURL} alt=""></img>
                            <div>
                                <p className="description">Nome: {movie.title}</p>
                                <p className="description">Data de Lançamento: {movie.releaseDate.substring(0,10)}</p>
                            </div>
                        </div>
                    </Link>
                    <div className="description">Synopsis: {movie.overview}</div>
                </li>
       )
}