import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import axios from "axios"
import Session from "../Session/Session"
import SelectedMovieFooter from "../SelectedMovieFooter/SelectedMovieFooter"
import "./Sessions.css"
export default function Sessions(props){
    const params = useParams()
    const [sessionsList, setSessionsList] = useState([])

    useEffect(()=>{
            const response = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${params.id}/showtimes`)
            response.then((data)=>{
                setSessionsList(data.data.days)
            })
    },[params.id])
    
    return(
        <ul className="display">
            <h1>Selecione o horário</h1>
            <div className="sessionTime">
                {sessionsList.map((session, i)=><Session key={i} session={session} selected={props.selected} select={props.select}/>)}
            </div>
            <SelectedMovieFooter selected={props.selected}/>
        </ul>

    )
}