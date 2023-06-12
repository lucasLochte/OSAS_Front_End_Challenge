import { useEffect, useState } from "react";
import api from "../../services/api";
import './people.css';

export default function People(){

    const [people, setPeople] = useState([]);
    const [dataPagination, setDataPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingPagination, setLoadingPagination] = useState(false);

    useEffect(()=> {
        async function loadPeople(){
            const response = await api.get('people');
            
            setPeople(response.data.results);
            setDataPagination(response.data);
            setLoading(false);
        }

        loadPeople();
    }, [])

    async function handleMore(){
        setLoadingPagination(true);
        if (dataPagination.next !== null){
            const index = dataPagination.next.indexOf('people');
            const substring = dataPagination.next.substring(index);

            const response = await api.get(substring);
            setPeople(people => [...people, ...response.data.results]);
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

            <div className="div-btn">
                {loadingPagination && <h3>Carregando...</h3>}
                {!loadingPagination && dataPagination.next !== null && <button className="btn-more" onClick={handleMore}>Buscar mais</button>}
            </div>

        </div>
    )
}