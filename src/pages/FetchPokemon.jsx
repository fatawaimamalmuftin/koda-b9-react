// import axios from "axios"

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import DetailPokemon from "../components/DetailPokemon";

/**
 * 
 * @param {string} url 
 * @returns {Promise[]}
 */
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
        charPokemono.id_pokemon = dataPokemon.id
        charPokemono.name = dataPokemon.name
        charPokemono.tipe = dataPokemon.types[0].type.name
        charPokemono.gambar = dataPokemon.sprites.front_default

        return charPokemono
    });

    return await Promise.all(dataPokemon)
}

// const url = 
// untuk link detail : https://pokeapi.co/api/v2/pokemon-form/1 < sesuai id paling terahir

export default function FetchPokemon(){

    const [url] = useState("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    const [poke,setPoke] = useState([])
    const [showModal,setShwoModal] = useState(false)
    const [getId,setGetId] = useState(0)
    const [sp,setSp] = useSearchParams('')
    const keyword = sp.get("search")
    
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
    },[url])

    // if(!showModal){
    //     sp.delete("detail")
    //     setSp(sp)
    // }

    // console.log(getId)
    // console.log(sp.get("search"))

    return (
        <>
        <DetailPokemon idPokemon={getId} show={showModal} setShow={setShwoModal}/>

        <main className="min-h-screen bg-gray-100 py-8">

            <h1 className="text-center text-4xl font-bold text-gray-800">
                Fetch Pokemon
            </h1>

            <div className="mt-8 px-6 md:px-20 lg:px-40">
                <div className="flex items-center gap-2 rounded-md border border-gray-400 bg-white px-3 py-2">

                    <input
                        className="w-full text-base outline-none"
                        type="text"
                        name="keyword"
                        placeholder="Input berdasarkan nama pokemon"
                        defaultValue={keyword}
                        onChange={(e) =>{setSp({"search" : e.target.value})}}
                    />

                    <img
                        src="/src/assets/search.svg"
                        alt="search"
                        className="h-6 w-6"
                    />

                </div>
                <h1 className="mt-10">Total Show Pokemon : {poke.length}</h1>
            </div>

            <main className="grid grid-cols-1 gap-5 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-20">

                {keyword
                    ? poke
                        .filter((e) =>
                            e.name
                                .toLowerCase()
                                .includes(keyword.toLowerCase())
                        )
                        .map((v, i) => {
                            return (
                                <article
                                    key={i}
                                    onClick={(e)=>{
                                        setGetId(v.id_pokemon),
                                        setShwoModal(true),
                                        setSp({"detail": e.target.value})
                                    }}
                                    className="cursor-pointer flex flex-col items-center gap-2 rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
                                >
                                    <img
                                        src={v.gambar}
                                        alt={v.name}
                                        className="h-32 w-32"
                                    />

                                    <div className="text-lg font-semibold capitalize text-gray-800">
                                        {v.name}
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        Tipe : {v.tipe}
                                    </div>

                                    <button className="w-full bg-blue-600 text-white px-2 rounded-2xl mt-1 hover:bg-green-500"
                                    value={v.name}
                                    onClick={(e)=>{
                                        setGetId(v.id_pokemon),
                                        setShwoModal(true),
                                        setSp({"detail": e.target.value})
                                    }}
                                    >Detail</button>
                                </article>
                            )
                        })
                    : poke.map((v, i) => {
                        return (
                            <article
                                className="flex flex-col items-center gap-2 rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
                                key={i}
                            >
                                <img
                                    src={v.gambar}
                                    alt={v.name}
                                    className="h-32 w-32"
                                />

                                <div className="text-lg font-semibold capitalize text-gray-800">
                                    {v.name}
                                </div>

                                <div className="text-sm text-gray-600">
                                    Tipe : {v.tipe}
                                </div>
                                
                                <button className="w-full bg-blue-600 text-white px-2 rounded-2xl mt-1 hover:bg-green-500"
                                value={v.name}
                                onClick={(e)=>{
                                    setGetId(v.id_pokemon),
                                    setShwoModal(true),
                                    setSp({"detail": e.target.value})
                                    // console.log(e.target.value)
                                }}
                                >Detail</button>
                            </article>
                        )
                    })}

                    <button></button>
            </main>
        </main>
    </>
)
}