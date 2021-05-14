import "./Input.css"

export default function Input({select, selected}){
    return(
        <div className="inputSection">
            <p>Nome do comprador:</p>
            <input placeholder="Digite o seu nome..." onChange={(e)=> select({...selected, name: e.target.value})} value={selected.name}></input>
            <p>CPF do comprador:</p>
            <input placeholder="Digite o seu CPF..."  onChange={(e)=> select({...selected, cpf: e.target.value})} value={selected.cpf}></input>
        </div>
    )
}