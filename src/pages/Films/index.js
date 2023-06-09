import { useState, useEffect } from "react";
import api from "../../services/api";
import './films.css';

export default function Films(){

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function loadFilms(){
            const response = await api.get('films');
            setFilms(response.data.results);
            setLoading(false);
        }

        loadFilms();
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
                            <th>Título</th>
                            <th>Sinopse</th>
                            <th>Diretor</th>
                            <th>Data de lançamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {films.map((film, index) => {
                            return(
                                <tr key={index}> 
                                    <td><strong>{film.title}</strong></td>
                                    <td>{film.opening_crawl}</td>
                                    <td>{film.director}</td>
                                    <td>{film.release_date}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
               
            
        </div>
    )
}