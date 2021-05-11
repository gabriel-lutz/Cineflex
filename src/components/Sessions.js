import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import axios from "axios"
import Session from "./Session"
export default function Sessions(){
    const params = useParams()
    const [sessionsList, setSessionsList] = useState([])

    useEffect(()=>{
            const response = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${params.id}/showtimes`)
            response.then((data)=>{
                setSessionsList(data.data.days)
            })
    },[])
    
    return(
        <ul className="display">
            <h1>Selecione o horário</h1>
            <div className="horarios">
                {sessionsList.map((session)=><Session session={session}/>)}
            </div>
        </ul>

    )
}