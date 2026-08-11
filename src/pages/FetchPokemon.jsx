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
    const [keyword,setKeyword] = useState('')

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
        <h1 className="mt-5 flex justify-center w-screen text-5xl">Fetch Pokemon</h1>
        <div className=" mt-10 flex w-screen text-2xl px-90">
            <label className="flex items-center border-b-2 border-black w-full">
                Search
                <input className="px-4 py-2 w-ful focus:outline-none w-full"
                type="text" 
                name="keyword"
                placeholder="Input berdasarkan nama pokemon"
                onChange={(e)=>{setKeyword(e.target.value)}}/>
                <img src="/src/assets/search.svg" alt="search" className="w-7 h-7"/>
            </label>

        </div>
        <main className="grid grid-cols-4 py-20 px-40 gap-4 font-sans"
        >
            {keyword ? 
            poke.filter((e)=>(e.name.toLowerCase().includes(keyword.toLocaleLowerCase()))).map((v,i)=>{
                return (
                    <article className="flex flex-col py-2 px-2 justify-center items-center gap-2 border-2 border-black rounded-xl"
                    key={i}>
                        <img src={v.gambar} alt={v.name} />
                        <div>
                            {v.name}
                        </div>
                        <div>
                            Tipe : {v.tipe}
                        </div>
                    </article>
                )
            }) : poke.map((v,i)=>{
                return (
                    <article className="flex flex-col py-2 px-2 justify-center items-center gap-2 border-2 border-black rounded-xl"
                    key={i}>
                        <img src={v.gambar} alt={v.name} />
                        <div>
                            {v.name}
                        </div>
                        <div>
                            Tipe : {v.tipe}
                        </div>
                    </article>
                )
            })}
        </main>
        </>
    )
}