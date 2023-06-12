import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Vehicles(){

    const [vehicles, setVehicles] = useState([]);
    const [dataPagination, setDataPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingPagination, setLoadingPagination] = useState(false);

    useEffect(()=> {
        async function loadVehicles(){
            const response = await api.get('vehicles');

            setVehicles(response.data.results);
            setDataPagination(response.data);
            setLoading(false);
        }

        loadVehicles();
    }, [])

    async function handleMore(){
        setLoadingPagination(true);
        if (dataPagination.next !== null){
            const index = dataPagination.next.indexOf('vehicles');
            const substring = dataPagination.next.substring(index);

            const response = await api.get(substring);
            setVehicles(vehicles => [...vehicles, ...response.data.results]);
            setDataPagination(response.data);
            setLoadingPagination(false);

        }
        else{
            setLoadingPagination(false);
        }
        
    }

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

            <div className="div-btn">
                {loadingPagination && <h3>Carregando...</h3>}
                {!loadingPagination && dataPagination.next !== null && <button className="btn-more" onClick={handleMore}>Buscar mais</button>}
            </div>
       
    
        </div>
    )
}