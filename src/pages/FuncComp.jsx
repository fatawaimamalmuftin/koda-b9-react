import { useState } from "react"

export default function FuncComp(){
  const [angka,setAngka] = useState(0)
  return(
    <>
    <h1>Component Function</h1>
    <h1>{angka}</h1>
    <button
    onClick={()=>{setAngka(angka + 1)}}
    >tambah</button>
    </>
  )
}