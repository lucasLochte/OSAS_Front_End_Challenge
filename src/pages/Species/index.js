import { useEffect, useState } from "react";
import api from "../../services/api";
import Modal from "../../components/Modal";
import { FiSearch } from 'react-icons/fi';

export default function Species(){

    const [species, setSpecies] = useState([]);
    const [dataPagination, setDataPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingPagination, setLoadingPagination] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState();

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

    function handleDetails(item){
        setShowModal(!showModal);
        setDetails(item);
    }

    if (loading){
        return(
            <div>
                <span className="loading">Carregando...</span>
            </div>
        )
    }

    return(
        <div>
            <div className="films">
            
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Língua</th>
                            <th>Tempo de vida médio</th>
                            <th>Altura média</th>
                            <th>Detalhes</th>
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
                                            <td>   
                                                    <FiSearch size={25} color="#121212"  className="search"
                                                    onClick={() => handleDetails(item)}/>          
                                            </td>

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

            {showModal && (
                <Modal
                    content={details}
                    close={() => setShowModal(!showModal)}
                />
            )}
        </div>
    )
}