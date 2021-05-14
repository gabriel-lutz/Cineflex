import { Link } from "react-router-dom"
export default function Success({selected, select}){
    function reset(){
        select({seat:[], seatName:[]})
    }
    return(
        <>
            <div className="display success">
                <h1>Pedido feito com sucesso!</h1>
                <div className="checkout">
                    <h2>Filme e sessão</h2>
                    <p>{selected.movieName}</p>
                    <p>{selected.date}    {selected.time}</p>
                </div>
                <div className="checkout">
                    <h2>Ingressos</h2>
                    {selected.seatName.map(s => <p key={s}>Assento {s}</p>)}
                </div>
                <div className="checkout">
                    <h2>Comprador</h2>
                    <p>Nome: {selected.name}</p>
                    <p>CPF: {selected.cpf}</p>
                </div>
                <Link to="/">
                    <button className="send" onClick={reset}>Voltar para Home</button>
                </Link>
            </div>
         
        </>
    )
}