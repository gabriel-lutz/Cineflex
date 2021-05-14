import "./SelectedMovieFooter.css"
export default function SelectedMovieFooter(props){
    return(
        <div className="selectedBox">
            <div className="selectedInfo">
                <div className="movie footer">
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