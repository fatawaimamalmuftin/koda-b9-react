import { useEffect, useState } from "react";

const urlDetail = "https://pokeapi.co/api/v2/pokemon-form/"

async function getData(url) {
    const res = await fetch(url)

    if(!res.ok)throw new Error(res.status)

    const data = await res.json()

    const charPokemono = new Object()
    charPokemono.id_pokemon = data.id
    charPokemono.name = data.name
    charPokemono.tipe = data.types[0].type.name
    charPokemono.gambar = data.sprites.front_default

    return new Array(charPokemono)
    };

export default function DetailPokemon({idPokemon,setShow,show}) {
    
    const [poke,setPoke] = useState([])
    
    useEffect(()=>{
        (async()=>{
            if(!(idPokemon === 0)){
                const url = urlDetail+idPokemon
                try{
                    const data = await getData(url)
                    // console.log(data)
                    setPoke(data)
                }catch(err){
                    console.log("Effect error: " + err)
                    return
                }finally{
                    console.log("Effect complite")
                }
            }
        })()
    },[idPokemon])


  return (
   <article className={`fixed h-screen w-screen bg-black/30 ${show? "fixed":"hidden"} flex justify-center`}>
        <main className="bg-white w-fit p-10 mb-auto mt-10 rounded-2xl">
            <div className="flex justify-between">
            <h1>Pokemon Detail</h1>
            <div className="hover:text-red-400 cursor-pointer text-2xl"
            onClick={()=>setShow(false)}
            >X</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                {poke? poke.map((e,i)=>{
                    return(
                        <div key={i}>
                            <img src={e.gambar} alt={e.name} className="w-100 h-100"/>
                            <h1>Nama pokemon : {e.name}</h1>
                            <h2>Tipe Pokemon : {e.tipe}</h2>
                        </div>
                    )
                }):"Data Kosong"}
            </div>
        </main>    
   </article>
  )
}
