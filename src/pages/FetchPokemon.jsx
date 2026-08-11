// import axios from "axios"

import { useEffect, useState } from "react";

async function getData(url) {
    const res = await fetch(url)

    if(!res.ok)throw new Error(res.status)

    const data = await res.json()

    const urlPokemon = data.results.map((pokemon) => pokemon.url);

    const dataPokemon = urlPokemon.map(async(e) => {

        const url = await fetch(e)

        if(!url.ok)throw new Error(url.status)

        const dataPokemon = await url.json()

        const charPokemono = new Object()
        charPokemono.name = dataPokemon.name
        charPokemono.tipe = dataPokemon.types[0].type.name
        charPokemono.gambar = dataPokemon.sprites.front_default

        return charPokemono
    });

    return await Promise.all(dataPokemon)
}

const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"

export default function FetchPokemon(){

    const [poke,setPoke] = useState([])

    useEffect(()=>{
        (async()=>{
            try{
                const data = await getData(url)
                setPoke(data)
            }catch(err){
                console.log("Effect error: " + err)
                return
            }finally{
                console.log("Effect complite")
            }
        })()
    },[])
    // console.log(poke)

    return(
        <>
        <h1>Fetch Pokemon</h1>
        {poke.map(
            <article>
                <img src={poke} alt="" />
            </article>
        )}
        </>
    )
}