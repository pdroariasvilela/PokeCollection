import { useState } from "react"

import Input from "../components/input"
import { getPokemon } from "../services/pokeapi-service"
import styled from "@emotion/styled"

 function SearchPage() {

    const [query , setQuery] = useState('')

    const [pokemon , setPokemon] = useState(null)

    const PokemonImg = styled.img`
        max-width : 150px;
    `


    function PokemonData({pokemon}){

        return (

            <div>
                <h2>{pokemon.name}</h2>
                <p>{pokemon.id}</p>
                <PokemonImg src={pokemon.sprites.other["official-artwork"].front_default}/>
                {pokemon.types.map((element)=>
                <p key={element.slot}>{element.type.name}</p>
                )}
                <p>Weight : {pokemon.weight /10} kg</p>
                <p>Height : {pokemon.height/10} m</p>
                
                <button>Mark as favorite</button>
            </div>

        )
    }


     function handleSearchSubmit(event){

        event.preventDefault();
        
        console.log(query)

        getPokemon(query).then((data) => setPokemon(data)).catch((error)=> console.log(error))
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
            {pokemon? <PokemonData pokemon={pokemon} /> : 'No data pokemon'}
        </div>
    )
}

export default SearchPage