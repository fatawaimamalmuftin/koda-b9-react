import {useEffect, useState} from 'react'

/**
 * @typedef error
 * @type {string} - Handle Error
 */

/**
 * @typedef data
 * @type {object}
 * @property {} id_pokemon - an ID pokemon
 * @property {} name - pokemon name
 * @property {} tipe - type pokemon
 * @property {} gambar - profile images pokemon
 */

/**
 * @typedef loading
 * @type {boolean}
 * @property {true}
 * @property {false}
 */

/**
 * @prop {string} url 
 * @returns {loading,data,error}
 */
export default function useFetch(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [eror, setError] = useState()
    
    useEffect(()=>{
        (async () => {
            const res = await fetch(url)
            
            if(!res.ok)setError(res.status)
            
            const data = await res.json()
    
            const urlPokemon = data.results.map((u)=>u.url)
    
            const dataPokemon = urlPokemon.map(async(v)=>{
                const data = await fetch(v)
    
                if(!res.ok)setError(res.status)
                
                const detailPokemon = await data.json()
                
                const charPokemono = new Object()
                charPokemono.id_pokemon = detailPokemon.id
                charPokemono.name = detailPokemon.name
                charPokemono.tipe = detailPokemon.types[0].type.name
                charPokemono.gambar = detailPokemon.sprites.front_default
    
                return charPokemono
            })
    
            const fix = await Promise.all(dataPokemon)

            setData(fix)
            setLoading(false)
        })()
    
    },[url])

    return [data,loading,eror]
}
