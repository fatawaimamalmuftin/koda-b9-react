import { useState } from "react"

/**
 * @prop {setStateSeter[]} input
 * @returns {HTMLElement}
 */
export default function Form({input}) {
    const [colinput,setColinput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        input((p)=>{
            const newProduct = [...p,colinput]
            return newProduct            
        })
        setColinput('')
    }

  return (
    <form
        className="flex flex-col" 
        onSubmit={handleSubmit}>
            <label htmlFor="product">Input :</label>
            <input 
            type="text" 
            placeholder="input here" 
            name="product" 
            value={colinput}
            onChange={(e)=>{setColinput(e.target.value)}}
            className="focus:outline-none px-4 py-2"/>
            <button
            type="submit"
            className="border-2 text-black hover:text-green-500"
            >Submit</button>
    </form>
  )
}
