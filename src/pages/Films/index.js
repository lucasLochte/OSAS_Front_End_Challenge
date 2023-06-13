import { useState, useEffect } from "react";
import api from "../../services/api";
import './films.css';
import { FiSearch } from 'react-icons/fi';
import Modal from "../../components/Modal";

export default function Films(){

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState();


    useEffect (() => {
        async function loadFilms(){
            const response = await api.get('films');
            setFilms(response.data.results);
            setLoading(false);
        }

        loadFilms();
    }, [])

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
                                <th>Título</th>
                                <th>Diretor</th>
                                <th>Data de lançamento</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {films.map((film, index) => {
                                return(
                                    <tr key={index}> 
                                        <td><strong>{film.title}</strong></td>
                                        <td>{film.director}</td>
                                        <td>{film.release_date}</td>
                                        <td> 
                                                <FiSearch size={25} color="#121212"  className="search"
                                                onClick={() => handleDetails(film)}/>     
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                
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