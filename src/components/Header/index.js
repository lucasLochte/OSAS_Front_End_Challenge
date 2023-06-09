import { Link } from "react-router-dom";
import './header.css';

export default function Header(){
    return(
        <header>

            <h2>Technical Challenge</h2>

            <div className="menu">
                <Link to="/">Films</Link>
                <Link to="/people">People</Link>
                <Link to="/planets">Planets</Link>
                <Link to="/species">Species</Link>
                <Link to="/starships">StarShips</Link>
                <Link to="/vehicles">Vehicles</Link>
            </div>
        </header>
    )
}