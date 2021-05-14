import SelectedMovieFooter from "./SelectedMovieFooter"
import Seat from "./Seat"
import Input from "./Input"
import SeatInfo from "./SeatInfo"
import axios from 'axios'
import {useState, useEffect} from "react"
import { useParams, useHistory } from 'react-router-dom';

export default function Seats({selected, select}){
    const param = useParams()
    const [seatsList, setSeatsList] = useState([])
    let history = useHistory()

    useEffect(()=>{
            const response = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${param.id}/seats`)
            response.then((data)=>{
                setSeatsList(data.data.seats)
            })
    },[])

    function send(){
        if(selected.name.length >=2 && selected.cpf.length >= 11){
            const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,{ids: [...selected.seat], name: selected.name, cpf: selected.cpf})
            response.then(()=>{history.push("/sucesso")})
            response.catch(()=>{alert("Oops, algo deu errado. Tente novamente!")})
        }else{
            alertClient()
        }
    }

    function alertClient(){
        alert("Digite seu nome, cpf e selecione um assento!!")
    }
    return(
        <div className="display seatsSection">  
            <h1> Selecione o(s) acento(s)</h1>
            <div className="seatsList">
                {seatsList.map((seat, i)=> <Seat key={i} seat={seat} selected={selected} select={select} />)}
                <SeatInfo/>
            </div>

            <Input select={select} selected={selected} />

            <button className="send" onClick={selected.name && selected.cpf && selected.seat? send : alertClient } > 
                <p>Reservar assento(s)</p>
            </button>
            
            <SelectedMovieFooter selected={selected}/>
        </div>
    )
}