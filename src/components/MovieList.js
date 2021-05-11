import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"

export default function MovieList(){
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        const response = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
        response.then((data)=>{
            setMovieList(data.data)
        })
    },[])

    console.log(movieList)
    return(
        <ul className="display">
            <h1>Selecione o filme</h1>
            <div className="filmes">
               {movieList.map((movie)=>{
                   return(
                    <Link to={`/filme/${movie.id}`}>
                        <li className="filme">
                            <img src={movie.posterURL}></img>
                        </li>
                    </Link>
                   )
               })} 
                
                
            </div>
            
        </ul>
    )
}