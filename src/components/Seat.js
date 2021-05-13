import {useState} from "react"
export default function Seat({seat, selected, select}){
    const [selecionado, setSelecionado] = useState(false)
    
    function addSeat(){
        let seatArray = []
        if(!selected.seat){
            seatArray.push(seat.id)
        }else{
            seatArray=[...selected.seat]
            seatArray.push(seat.id)
        }
        select({...selected, seat: [...seatArray]})
    }

    function removeSeat(){
        let removedArray = selected.seat.filter((i)=>i===seat.id? false:true)
        select({...selected, seat: [...removedArray]})
    }

    function choose(){
        if(selecionado){
            setSelecionado(false)
            removeSeat()
        }else{
            setSelecionado(true)
            addSeat()
        }
    }
    function unavailable(){
        alert("O lugar selecionado não está disponível, selecione outro assento.")
    }

    return(
        <button onClick={seat.isAvailable? choose: unavailable}
            className={!seat.isAvailable? "notAvailable" : (selecionado? "selected":"available")}>
            {seat.name}
        </button>
    )
}