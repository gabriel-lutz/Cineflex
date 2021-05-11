import Header from "./Header"
import MovieList from "./MovieList"
import Sessions from "./Sessions"
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App(){
    return(
        <>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <MovieList />
                </Route>
                <Route path="/filme/:id">
                    <Sessions />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}