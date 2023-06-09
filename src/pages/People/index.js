import { useEffect, useState } from "react";
import api from "../../services/api";

export default function People(){

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function loadPeople(){
            const response = await api.get('people');
            setPeople(response.data.results);
            setLoading(false);
        }

        loadPeople();
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
                        <th>Altura</th>
                        <th>Gênero</th>
                        <th>Data de nascimento</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((item, index) => {
                            return(
                                <tr key={index}> 
                                    <td><strong>{item.name}</strong></td>
                                    <td>{item.height}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.birth_year}</td>

                                </tr>
                            );
                    })}
                </tbody>
            </table>
        
    
        </div>
    )
}