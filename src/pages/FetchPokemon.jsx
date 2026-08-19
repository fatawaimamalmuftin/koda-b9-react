import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import DetailPokemon from "../components/DetailPokemon";
import useFetch from "../Hooks/useFetch";

async function getTypes(url) {
    const res = await fetch(url)

    if(!res.ok) throw new Error(res.status)

    const data = await res.json()

    return data.results
}

const urlType = "https://pokeapi.co/api/v2/type"

export default function FetchPokemon(){

    const [poke,setPoke] = useState([])
    const [showModal,setShwoModal] = useState(false)
    const [getId,setGetId] = useState(0)
    const [,setSp] = useSearchParams('')
    const [types,setTypes] = useState([])
    const [keyword,setKeyword] = useState("")
    const [type,setType] = useState("")

    const [data,loading,error] = useFetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    )

    useEffect(()=>{
        ;(async()=>{
            try{

                const alltype = await getTypes(urlType)

                setTypes(alltype.map((e)=>e.name))

            }catch(err){

                console.log("Effect error: " + err)

            }finally{

                console.log("Effect complete")

            }
        })()

        ;(async()=>{
            if(data){
                setPoke(data)
            }
        })()

    },[data])


    if(error){
        console.log(error)
        return null
    }


    return (
        <>

            {loading && (
                <div className="flex w-screen h-screen items-center justify-center">
                    <h1 className="text-2xl font-bold">
                        Loading...
                    </h1>
                </div>
            )}

            {!loading && (
                <>
                    <DetailPokemon
                        idPokemon={getId}
                        show={showModal}
                        setShow={setShwoModal}
                    />

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
                                    onChange={(e) =>{

                                        const v = e.target.value

                                        setKeyword(v)

                                        setSp((prev)=>{

                                            if(v){
                                                prev.set("search", v)
                                            }else{
                                                prev.delete("search")
                                            }

                                            return prev
                                        })

                                    }}
                                />

                                <img
                                    src="/src/assets/search.svg"
                                    alt="search"
                                    className="h-6 w-6"
                                />

                            </div>


                            <div className="flex items-center gap-5 mt-10">

                                <select
                                    className="w-fit h-fit px-4 py-1 border-2 rounded-2xl"
                                    name="filterType"
                                    id="filterType"
                                    onChange={(e)=>{

                                        const v = e.target.value

                                        setType(v)

                                        setSp((prev)=>{

                                            if(v){
                                                prev.set("type",v)
                                            }else{
                                                prev.delete("type")
                                            }

                                            return prev
                                        })

                                    }}
                                >

                                    <option value=''>
                                        -- Select Type --
                                    </option>

                                    {types.map((v,i)=>(
                                        <option key={i} value={v}>
                                            {v}
                                        </option>
                                    ))}

                                </select>


                                <h1>
                                    Total Show Pokemon : {poke.length}
                                </h1>

                            </div>

                        </div>


                        <main className="grid grid-cols-1 gap-5 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-20">

                            {keyword || type

                                ? poke
                                    .filter((e) =>
                                        e.name
                                            .toLowerCase()
                                            .includes(keyword.toLowerCase())
                                        &&
                                        e.tipe
                                            .toLowerCase()
                                            .includes(type.toLowerCase())
                                    )
                                    .map((v, i) => {

                                        return (
                                            <article
                                                key={i}
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


                                                <button
                                                    className="w-full bg-blue-600 text-white px-2 rounded-2xl mt-1 hover:bg-green-500"
                                                    onClick={() => {

                                                        setGetId(v.id_pokemon)
                                                        setShwoModal(true)

                                                        setSp({
                                                            detail: v.name
                                                        })

                                                    }}
                                                >
                                                    Detail
                                                </button>

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


                                            <button
                                                className="w-full bg-blue-600 text-white px-2 rounded-2xl mt-1 hover:bg-green-500"
                                                onClick={() => {

                                                    setGetId(v.id_pokemon)
                                                    setShwoModal(true)

                                                    setSp({
                                                        detail: v.name
                                                    })

                                                }}
                                            >
                                                Detail
                                            </button>

                                        </article>
                                    )

                                })}

                        </main>

                    </main>
                </>
            )}

        </>
    )
}