import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Vehicles(){
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function loadVehicles(){
            const response = await api.get('vehicles');
            console.log(response.data)
            setVehicles(response.data.results);
            setLoading(false);
        }

        loadVehicles();
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
                    {vehicles.map((item, index) => {
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