export default function SelectedMovieFooter(props){
    return(
        <div className="selecionado">
            <div className="informacoes">
                <div className="filme footer">
                    <img src={props.selected.url} alt=""/>
                </div>
                <div className="nome">
                    <p>{props.selected.movieName}</p>
                    <p>{props.selected.weekday? props.selected.weekday +" - " +props.selected.time:""}</p>
                </div>
            </div>
        </div>
    )
}