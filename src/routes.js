import { Route, Routes } from "react-router-dom"
import Films from "./pages/Films";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import StarShips from './pages/StarShips';
import Vehicles from './pages/Vehicles';
import People from "./pages/People";

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Films/> } />
            <Route path="/people" element={ <People/> } />
            <Route path="/planets" element={ <Planets />} />
            <Route path="/species" element={ <Species />} />
            <Route path="/starships" element={ <StarShips/>} />
            <Route path="/vehicles" element={ <Vehicles/> } />
        </Routes>
    )
}