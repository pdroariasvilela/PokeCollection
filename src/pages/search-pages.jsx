import { useState } from "react"

import Input from "../components/input"
import { getPokemon } from "../services/pokeapi-service"
import styled from "@emotion/styled"
import { RiStarFill } from "react-icons/ri";


const PokemonImg = styled.img`
    max-width : 150px;
    `
const FavoriteButton = styled.button`
    display: flex;
    align-items : center;
    justify-content: center;
    gap: .5rem;
    background-color : gray;
    border : none ;
    padding : .5rem 1rem;
    font-weight : bold;
    color: white;
    cursor : pointer;
`


function SearchPage() {

    const [query, setQuery] = useState('')

    // const [pokemon, setPokemon] = useState(null)

    // const [error , setError] = useState(null)

    const [state , setState] = useState ({
        status : 'iddle',
        data : null,
        error : null
    })

    const {status , data : pokemon , error} = state


    function pokeId(id) {
        id = String(id)

        const newId = id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`

        return newId
    }

    function PokemonData({ pokemon }) {

        return (

            <div>
                <h2>{pokemon.name}</h2>
                <p>{pokeId(pokemon.id)}</p>
                <PokemonImg src={pokemon.sprites.other["official-artwork"].front_default} />
                {pokemon.types.map((element) =>
                    <p key={element.slot}>{element.type.name}</p>
                )}
                <p>Weight : {pokemon.weight / 10} kg</p>
                <p>Height : {pokemon.height / 10} m</p>

                <FavoriteButton>
                    <RiStarFill />
                    Mark as favorite
                </FavoriteButton>
            </div>

        )
    }


    function handleSearchSubmit(event) {

        event.preventDefault();

        console.log(query)

        getPokemon(query).
        then( (data)=> {
            setState({
                status : 'succes',
                data : data,
                error : null
            })
        })

            .catch((_error) => {
                setState({
                    status : 'error',
                    data : null ,
                    error : "No se encontró resultados"
                })
            })
    }



    return (
        <div>
            <h1>searchPage</h1>
            <form onSubmit={handleSearchSubmit}>
                <Input
                    name='query'
                    placeholder='Pokemon name'
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button>Search</button>
            </form>
            { status === 'iddle'  && 'No data pokemon' }
            { status === 'succes' && <PokemonData pokemon={pokemon} />}
            { status === 'error' && <p style={{color : "red"}}>{error}</p>}
            
        </div>
    )
}

export default SearchPage