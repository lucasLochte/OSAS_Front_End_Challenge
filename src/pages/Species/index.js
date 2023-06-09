import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Species(){
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function loadSpecies(){
            const response = await api.get('species');
            console.log(response.data)
            setSpecies(response.data.results);
            setLoading(false);
        }

        loadSpecies();
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
       
    
        </div>
    )
}