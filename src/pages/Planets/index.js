import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Planets(){

    const [planets, setPlanets] = useState([]);
    const [dataPagination, setDataPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingPagination, setLoadingPagination] = useState(false);

    useEffect(()=> {
        async function loadPlanets(){
            const response = await api.get('planets');

            setPlanets(response.data.results);
            setDataPagination(response.data);
            setLoading(false);
        }

        loadPlanets();
    }, [])

    async function handleMore(){
        setLoadingPagination(true);
        if (dataPagination.next !== null){
            const index = dataPagination.next.indexOf('planets');
            const substring = dataPagination.next.substring(index);

            const response = await api.get(substring);
            setPlanets(planets => [...planets, ...response.data.results]);
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

            <div className="div-btn">
                {loadingPagination && <h3>Carregando...</h3>}
                {!loadingPagination && dataPagination.next !== null && <button className="btn-more" onClick={handleMore}>Buscar mais</button>}
            </div>
       
    
        </div>
    )
}