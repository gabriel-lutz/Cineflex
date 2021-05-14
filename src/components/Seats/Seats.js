import SelectedMovieFooter from "../SelectedMovieFooter/SelectedMovieFooter"
import Seat from "../Seat/Seat"
import Input from "../Input/Input"
import SeatInfo from "../SeatInfo/SeatInfo"
import axios from 'axios'
import "./Seats.css"
import {useState, useEffect} from "react"
import { useParams, useHistory } from 'react-router-dom';

export default function Seats({selected, select}){
    const params = useParams()
    const [seatsList, setSeatsList] = useState([])
    let history = useHistory()

    useEffect(()=>{
            const response = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.id}/seats`)
            response.then((data)=>{
                setSeatsList(data.data.seats)
            })
    },[params.id])

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