import { useEffect, useState } from "react"

import UsersContext from "./usersContext"

export default function UsersProvider({children}) {
    const [user, setUser] = useState(()=>{
        const data = localStorage.getItem("user")

        return data 
        ? 
        JSON.parse(data)
        :
        {username: null,
        password: null,
        file: null,
        objectUrl: null}
    })

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(user))
    },[user])

  return (
    <UsersContext.Provider
        value={{
            user,
            setUser
        }}
    >
        {children}
    </UsersContext.Provider>
  )
}
