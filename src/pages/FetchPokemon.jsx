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
    console.log(poke)

    return(
        <>
        <h1 className="mt-5 flex justify-center w-screen text-5xl">Fetch Pokemon</h1>
        <main className="grid grid-cols-4 py-20 px-15 gap-4"
        >
            {poke.map((v,i)=>{
                return (
                    <article className="flex flex-col justify-center items-center gap-2 border-2 border-black rounded-xl"
                    key={i}>
                        <img src={v.gambar} alt={v.name} />
                        <div>
                            {v.name}
                        </div>
                        <div>
                            {v.tipe}
                        </div>
                    </article>
                )
            })}
        </main>
        </>
    )
}