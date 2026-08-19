import { useState } from "react"

import UsersContext from "./usersContext"

export default function UsersProvider({children}) {
    const [user, setUser] = useState({
        username: null,
        password: null,
        file: null,
        objectUrl: null
    })

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
