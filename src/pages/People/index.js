import { useEffect, useState } from "react";
import api from "../../services/api";
import { FiSearch } from 'react-icons/fi';
import './people.css';
import Modal from "../../components/Modal";

export default function People(){

    const [people, setPeople] = useState([]);
    const [dataPagination, setDataPagination] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingPagination, setLoadingPagination] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState();

    useEffect(()=> {
        async function loadPeople(){
            const response = await api.get('people');
            
            setPeople(response.data.results);
            console.log(response.data)
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
                            <th>Altura</th>
                            <th>Gênero</th>
                            <th>Data de nascimento</th>
                            <th>Detalhes</th>
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