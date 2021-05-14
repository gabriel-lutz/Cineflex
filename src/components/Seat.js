import {useState} from "react"
export default function Seat({seat, selected, select}){
    const [selecionado, setSelecionado] = useState(false)
    
    function addSeat(){
        let seatArray = []
        let seatNumberArray = []
        if(!selected.seat){
            seatArray.push(seat.id)
            seatNumberArray.push(seat.name)
        }else{
            seatArray=[...selected.seat]
            seatArray.push(seat.id)
            seatNumberArray=[...selected.seatName]
            seatNumberArray.push(seat.name)
        }
        select({...selected, seat: [...seatArray], seatName: [...seatNumberArray]})
    }

    function removeSeat(){
        let removedArray = selected.seat.filter((i)=>i===seat.id? false:true)
        let removedNumberArray = selected.seatName.filter((i)=>i===seat.name? false:true)
        select({...selected, seat: [...removedArray], seatName: [...removedNumberArray]})
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