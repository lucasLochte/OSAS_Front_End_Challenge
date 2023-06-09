import { useEffect, useState } from "react";
import api from "../../services/api";

export default function StarShips(){
    const [starships, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function loadStarShips(){
            const response = await api.get('starships');
            console.log(response.data)
            setStarships(response.data.results);
            setLoading(false);
        }

        loadStarShips();
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
                        <th>Modelo</th>
                        <th>Carga Máxima</th>
                        <th>Passageiros</th>
                        <th>Fabricante</th>
                        <th>Equipe</th>
                    </tr>
                </thead>
                <tbody>
                    {starships.map((item, index) => {
                                return(
                                    <tr key={index}> 
                                        <td><strong>{item.name}</strong></td>
                                        <td>{item.model}</td>
                                        <td>{item.cargo_capacity}</td>
                                        <td>{item.passengers}</td>
                                        <td>{item.manufacturer}</td>
                                        <td>{item.crew}</td>
                                        

                                    </tr>
                                );
                    })}
                </tbody>
            </table>
       
    
        </div>
    )
}