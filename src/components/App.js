import Header from "./Header"
import MovieList from "./MovieList"
import Sessions from "./Sessions"
import Seats from "./Seats"
import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App(){
    const [selectedMovie, setSelectedMovie] = useState({seat: []})
    console.log(selectedMovie)
    return(
        <>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <MovieList select={setSelectedMovie} />
                </Route>
                <Route path="/sessoes/:id">
                    <Sessions selected={selectedMovie} select={setSelectedMovie} />
                </Route>
                <Route path="/assentos/:id">
                    <Seats selected={selectedMovie} select={setSelectedMovie}/>
                </Route>
                <Route path="/success">
                    <Seats selected={selectedMovie} select={setSelectedMovie}/>
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}