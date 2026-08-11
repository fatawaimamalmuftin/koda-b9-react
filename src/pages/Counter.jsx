import { useState } from "react"

export default function Counter(){
  const [angka, setAngka] = useState(0)

  function kurang(){
    if(angka <= 0){
      alert("ga bisa kurang dari 0")
      return
    }else{
      setAngka(angka - 1)
    }
  }

  function tambah(){
    if(angka >= 10){
      alert("ga bisa lebih dari 10")
      return
    }else{
      setAngka(angka + 1)
    }
  }

  return(
    <>
    <h1 className="flex justify-center it">Coouter Button</h1>
    <div className="flex justify-center items-center h-screen bg-gray-300 gap-3 text-purple-600 ">
      <button className="border-2 rounded-3xl border-purple-600 py-2 px-5"
      onClick={kurang}
      >-</button>
      {angka}
      <button className="border-2 rounded-3xl border-purple-600 py-2 px-5"
      onClick={tambah}
      >+</button>
    </div>
    </>
  )
}