import { FiX } from 'react-icons/fi'
import './modal.css';

export default function Modal({ content, close}){
    console.log(content)

    return(
        <div className="modal">
            <div className="container">
                <button className="close" onClick={close}>
                    <FiX size={25} color="#FFF" />
                    Voltar
                </button>

                <main>
                    <table>
                        <thead>
                            {content.url.includes('people') && 
                            <tr className='row'>
                                <tr>
                                    {content.name && <th>Nome</th>}
                                    <td>{content.name}</td>
                                </tr>
                                <tr>
                                    {content.gender && <th>Gênero</th>}
                                    <td>{content.gender}</td>
                                </tr>
                                <tr>
                                    {content.height && <th>Altura</th>}
                                    <td>{content.height}</td>
                                </tr>
                                <tr>
                                    {content.mass && <th>Peso</th>}
                                    <td>{content.mass}</td>
                                </tr>
                                <tr>
                                    {content.birth_year && <th>Ano de Nascimento</th>}
                                    <td>{content.birth_year}</td>
                                </tr>
                                <tr>
                                    {content.eye_color && <th>Cor dos olhos</th>}
                                    <td>{content.eye_color}</td>
                                </tr>
                                <tr>
                                    {content.hair_color && <th>Cor do cabelo</th>}
                                    <td>{content.hair_color}</td>
                                </tr>
     
                            </tr>}
                            {content.url.includes('planets') && 
                            <tr className='row'>
                                <tr>
                                    {content.name && <th>Nome</th>}
                                    <td>{content.name}</td>
                                </tr>
                                <tr>
                                    {content.climate && <th>Clima</th>}
                                    <td>{content.climate}</td>
                                </tr>
                                <tr>
                                    {content.gravity && <th>Gravidade</th>}
                                    <td>{content.gravity}</td>
                                </tr>
                                <tr>
                                    {content.diameter && <th>Diâmetro</th>}
                                    <td>{content.diameter}</td>
                                </tr>
                                <tr>
                                    {content.orbital_period && <th>Período Orbital</th>}
                                    <td>{content.orbital_period}</td>
                                </tr>
                                <tr>
                                    {content.rotation_period && <th>Período de rotação</th>}
                                    <td>{content.rotation_period}</td>
                                </tr>
                                <tr>
                                    {content.population && <th>Poupulação</th>}
                                    <td>{content.population}</td>
                                </tr>
                                <tr>
                                    {content.terrain && <th>Terreno</th>}
                                    <td>{content.terrain}</td>
                                </tr>
                                <tr>
                                    {content.surface_water && <th>Superfícies de água</th>}
                                    <td>{content.surface_water}</td>
                                </tr>
                            
                          
                            </tr>}
                            {content.url.includes('films') && 
                            <tr className='row'>
                                <tr>
                                    {content.title && <th>Título</th>}
                                    <td>{content.title}</td>
                                </tr>
                                <tr>
                                    {content.opening_crawl && <th>Sinopse</th>}
                                    <td>{content.opening_crawl}</td>
                                </tr>
                                <tr>
                                    {content.director && <th>Diretor</th>}
                                    <td>{content.director}</td>
                                </tr>
                                <tr>
                                    {content.producer && <th>Produtores</th>}
                                    <td>{content.producer}</td>
                                </tr>
                                <tr>
                                    {content.release_date && <th>Data de lançamento</th>}
                                    <td>{content.release_date}</td>
                                </tr>
      
                            </tr>}
                            {content.url.includes('species') && 
                            <tr className='row'>
                                <tr>
                                    {content.name && <th>Nome</th>}
                                    <td>{content.name}</td>
                                </tr>
                                <tr>
                                    {content.classification && <th>Classificação</th>}
                                    <td>{content.classification}</td>
                                </tr>
                                <tr>
                                    {content.language && <th>Língua</th>}
                                    <td>{content.language}</td>
                                </tr>
                                <tr>
                                    {content.designation && <th>Designação</th>}
                                    <td>{content.designation}</td>
                                </tr>
                                <tr>
                                    {content.average_height && <th>Altura média</th>}
                                    <td>{content.average_height}</td>
                                </tr>
                                <tr>
                                    {content.average_lifespan && <th>Tempo médio de vida</th>}
                                    <td>{content.average_lifespan}</td>
                                </tr>
                                <tr>
                                    {content.eye_colors && <th>Cor dos olhos</th>}
                                    <td>{content.eye_colors}</td>
                                </tr>
                                <tr>
                                    {content.skin_colors && <th>Cor da pele</th>}
                                    <td>{content.skin_colors}</td>
                                </tr>
                                <tr>
                                    {content.hair_colors && <th>Cor dos cabelos</th>}
                                    <td>{content.hair_colors}</td>
                                </tr>
      
                            </tr>}
                            {content.url.includes('starships') &&
                            <tr className='row'>
                                <tr>
                                    {content.name && <th>Nome</th>}
                                    <td>{content.name}</td>
                                </tr>
                                <tr>
                                    {content.model && <th>Modelo</th>}
                                    <td>{content.model}</td>
                                </tr>
                                <tr>
                                    {content.starship_class && <th>Classe</th>}
                                    <td>{content.starship_class}</td>
                                </tr>
                                <tr>
                                    {content.passengers && <th>Passageiros</th>}
                                    <td>{content.passengers}</td>
                                </tr>
                                <tr>
                                    {content.cargo_capacity && <th>Capacidade de carga</th>}
                                    <td>{content.cargo_capacity}</td>
                                </tr>
                                <tr>
                                    {content.crew && <th>Funcionários</th>}
                                    <td>{content.crew}</td>
                                </tr>
                                <tr>
                                    {content.manufacturer && <th>Fabricante</th>}
                                    <td>{content.manufacturer}</td>
                                </tr>
                                <tr>
                                    {content.length && <th>Tamanho</th>}
                                    <td>{content.length}</td>
                                </tr>
                                <tr>
                                    {content.max_atmosphering_speed && <th>Velocidade atmosférica máxima</th>}
                                    <td>{content.max_atmosphering_speed}</td>
                                </tr>
    
                            </tr>}
                            {content.url.includes('vehicles') &&
                            <tr className='row'>
                                <tr>
                                    {content.name && <th>Nome</th>}
                                    <td>{content.name}</td>
                                </tr>
                                <tr>
                                    {content.model && <th>Modelo</th>}
                                    <td>{content.model}</td>
                                </tr>
                                <tr>
                                    {content.vehicle_class && <th>Classe</th>}
                                    <td>{content.vehicle_class}</td>
                                </tr>
                                <tr>
                                    {content.passengers && <th>Passageiros</th>}
                                    <td>{content.passengers}</td>
                                </tr>
                                <tr>
                                    {content.cargo_capacity && <th>Capacidade de carga</th>}
                                    <td>{content.cargo_capacity}</td>
                                </tr>
                                <tr>
                                    {content.crew && <th>Funcionários</th>}
                                    <td>{content.crew}</td>
                                </tr>
                                <tr>
                                    {content.manufacturer && <th>Fabricante</th>}
                                    <td>{content.manufacturer}</td>
                                </tr>
                                <tr>
                                    {content.length && <th>Tamanho</th>}
                                    <td>{content.length}</td>
                                </tr>
                                <tr>
                                    {content.max_atmosphering_speed && <th>Velocidade atmosférica máxima</th>}
                                    <td>{content.max_atmosphering_speed}</td>
                                </tr>
    
                            </tr>}
                            
                            
                        </thead>
                        
                    </table>
                    
                </main>
            </div>
        </div>
    )
}