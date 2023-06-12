import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Species(){

    const [species, setSpecies] = useState([]);
    const [dataPagination, setDataPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingPagination, setLoadingPagination] = useState(false);

    useEffect(()=> {
        async function loadSpecies(){
            const response = await api.get('species');

            setSpecies(response.data.results);
            setDataPagination(response.data);
            setLoading(false);
        }

        loadSpecies();
    }, [])

    async function handleMore(){
        setLoadingPagination(true);
        if (dataPagination.next !== null){
            const index = dataPagination.next.indexOf('species');
            const substring = dataPagination.next.substring(index);

            const response = await api.get(substring);
            setSpecies(species => [...species, ...response.data.results]);
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
                        <th>Língua</th>
                        <th>Tempo de vida médio</th>
                        <th>Altura média</th>
                    </tr>
                </thead>
                <tbody>
                    {species.map((item, index) => {
                                return(
                                    <tr key={index}> 
                                        <td><strong>{item.name}</strong></td>
                                        <td>{item.language}</td>
                                        <td>{item.average_lifespan}</td>
                                        <td>{item.average_height}</td>

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