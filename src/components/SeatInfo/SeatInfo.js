import "./SeatInfo.css"
export default function SeatInfo(){
    return(
        <div  className="seatInfo">
            <div>
                <button className="selected"></button>
                <p>Selecionado</p>
            </div>
            <div>
                <button className="available"></button>
                <p>Disponivel</p>
            </div>
            <div>
                <button className="notAvailable"></button>
                <p>Indisponível</p>
            </div>
        </div>
    )
}