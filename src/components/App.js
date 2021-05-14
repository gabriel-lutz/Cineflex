import Header from "./Header/Header"
import MovieList from "./MovieList/MovieList"
import Sessions from "./Sessions/Sessions"
import Seats from "./Seats/Seats"
import Success from "./Success/Success"
import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App(){
    const [selectedMovie, setSelectedMovie] = useState({seat: [], seatName: []})
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <MovieList select={setSelectedMovie} />
                </Route>
                <Route path="/sessoes/:id" exact>
                    <Sessions selected={selectedMovie} select={setSelectedMovie} />
                </Route>
                <Route path="/assentos/:id" exact>
                    <Seats selected={selectedMovie} select={setSelectedMovie}/>
                </Route>
                <Route path="/sucesso" exact>
                    <Success selected={selectedMovie} select={setSelectedMovie}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}