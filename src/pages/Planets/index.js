import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Planets(){
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function loadPlanets(){
            const response = await api.get('planets');
            console.log(response)
            setPlanets(response.data.results);
            setLoading(false);
        }

        loadPlanets();
    }, [])

    if (loading){
        return(
            <div>
                <span className="loading">Carregando...</span>
            </div>
        )
    }

    return(
        <div className="films">
           
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>População</th>
                        <th>Clima</th>
                        <th>Gravidade</th>
                        <th>Período orbital</th>
                    </tr>
                </thead>
                <tbody>
                    {planets.map((item, index) => {
                            return(
                                <tr key={index}> 
                                    <td><strong>{item.name}</strong></td>
                                    <td>{item.population}</td>
                                    <td>{item.climate}</td>
                                    <td>{item.gravity}</td>
                                    <td>{item.orbital_period}</td>

                                </tr>
                            );
                    })}
                </tbody>
            </table>
       
    
        </div>
    )
}