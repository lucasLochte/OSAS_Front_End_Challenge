import { useEffect, useState } from "react";
import api from "../../services/api";

export default function StarShips(){

    const [starships, setStarships] = useState([]);
    const [dataPagination, setDataPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingPagination, setLoadingPagination] = useState(false);

    useEffect(()=> {
        async function loadStarShips(){
            const response = await api.get('starships');

            setStarships(response.data.results);
            setDataPagination(response.data);
            setLoading(false);
        }

        loadStarShips();
    }, [])

    async function handleMore(){
        setLoadingPagination(true);
        if (dataPagination.next !== null){
            const index = dataPagination.next.indexOf('starships');
            const substring = dataPagination.next.substring(index);

            const response = await api.get(substring);
            setStarships(starships => [...starships, ...response.data.results]);
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

            <div className="div-btn">
                {loadingPagination && <h3>Carregando...</h3>}
                {!loadingPagination && dataPagination.next !== null && <button className="btn-more" onClick={handleMore}>Buscar mais</button>}
            </div>
       
    
        </div>
    )
}