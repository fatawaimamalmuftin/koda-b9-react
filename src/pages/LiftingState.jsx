import { useState, useEffect } from "react"
import Form from "../components/Form"
import Tabel from "../components/Tabel"

export default function LiftingState() {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        console.log("product updated")
    },[product])
    // console.log(product)

    return (
    <main className="bg-gray-300 py-2 px-50 w-screen h-screen flex flex-col gap-4">
        <h1>Product</h1>
        <Tabel show={product}/>
        <Form input={setProduct}/>
    </main>
    )
}