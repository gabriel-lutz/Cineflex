import Movie from "./Movie"
import axios from "axios"
import { useState, useEffect } from "react"

export default function MovieList(props){
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        const response = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
        response.then((data)=>{
            setMovieList(data.data)
        })
    },[])
    return(
        <ul className="display">
            <h1>Selecione o filme</h1>
            <div className="filmes">
               {movieList.map((movie)=> <Movie movie={movie} select={props.select} />)} 
            </div>
            
        </ul>
    )
}