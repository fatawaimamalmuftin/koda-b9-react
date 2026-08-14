import { useState } from "react"

export default function FormControlled() {
  const [photo,setPhoto] = useState({
    file: null,
    objectUrl: null,
  })

  return (
    <main className="flex flex-col gap-5 bg-gray-400 font-sans py-10 px-90">
      <h1 className=" text-2xl">Form Controlled</h1> 
      <form className="flex flex-col gap-10 w-full justify-center items-center mb-5">
        {/* Profile */}
        <div className="flex justify-center items-center ">
          <label className="flex justify-center items-center border-2 border-b-black w-70 h-70 rounded-full overflow-hidden">
            <img src={photo.objectUrl} alt="profile" />
            <input 
            className="w-full h-full cursor-pointer hover:bg-gray-300 hidden"
            onChange={(e)=>{
              if(photo.objectUrl){
                URL.revokeObjectURL(photo.objectUrl)
              }
              setPhoto({
                file: e.target.files[0],
                objectUrl: URL.createObjectURL(e.target.files[0])
              })
              console.log(URL.createObjectURL(e.target.files[0]))
              console.log(photo)
            }}
            name="profile"
            type="file"/>
          </label>
        </div>

        {/* Input text */}
        <div>
          <label>
            Nama :
            <input className="px-4 py-y focus:outline-none"
            // onChange={(e)=>{
            //   e.preventDefault()
            //   console.log(e.target.value)}}
             type="text" />
          </label>

             <p className="mt-1 min-h-4 text-xl font-medium  text-red-500"
             ></p>
        </div>

        {/* Input number */}
        <div>
          <label>
            Umur :
            <input className="px-4 py-y focus:outline-none"
            // onChange={(e)=>{console.log(e)}}
             type="number" />
          </label>

             <p className="mt-1 min-h-4 text-xl font-medium  text-red-500"
             ></p>
        </div>

        {/* input radio */}
        <div className="flex gap-2">
          <label htmlFor="gender">
            Gender
          </label>

          <input id="man" type="radio" name="gender" value='man'/>
          <label htmlFor="man">Laki - Laki</label>

          <input id="woman" type="radio" name="gender" value='woman'/>
          <label htmlFor="woman">Perempuan</label>
        </div>
        
        {/* input checkbox */}
        <div className="flex flex-col gap-3">
          <label htmlFor="hobies">Hobi saya : </label>
          <label htmlFor="code">
            <input type="checkbox" name="hobies" id="code" value="code"/>
            Coding
          </label>

          <label htmlFor="read">
            <input type="checkbox" name="hobies" id="read" value="read"/>
            Reading
          </label>

          <label htmlFor="swim">
            <input type="checkbox" name="hobies" id="swim" value="swim"/>
            Swiming
          </label>

          <label htmlFor="sport">
            <input type="checkbox" name="hobies" id="sport" value="sport"/>
            Sporting
          </label>

          <label htmlFor="drive">
            <input type="checkbox" name="hobies" id="drive" value="drive"/>
            Driveing
          </label>
        </div>

        {/* input select */}
        <div className="flex gap-2">
          <label htmlFor="Language">Pilih bahasa</label>
          <select name="language" id="language">
            <option name="language" >Selected</option>
            <option name="language" id="js" value="js">JavaScript</option>
            <option name="language" id="js" value="js">JavaScript</option>
            <option name="language" id="py" value="py">Phyton</option>
          </select>
        </div>
        <button className="border-2 py-2 px-4 rounded-3xl hover:bg-green-500 hover:text-white"
        // type="submit"
        >Submit</button>
      </form>     
    </main>
  )
}
