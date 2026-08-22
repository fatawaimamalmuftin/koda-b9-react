import { useContext } from "react"
import usersContext from "../context/users/usersContext"

export default function Login() {
    const userData = useContext(usersContext)

    // console.log(userData.user)

  return (
    <main className="h-screen w-screen">
        <form className="flex flex-col justify-center items-center mt-20"
        onSubmit={(e) => {
                    e.preventDefault()

                    const formData = new FormData(e.target)

                    userData.setUser({
                        username: formData.get("username"),
                        password: formData.get("password")
                    })
                    userData.setUser.password()
                }}>
        <label>
            username
            <input type="text" name="username" className="outline-none px-4 py-2" />
        </label>

        <label>
            Password
            <input autoComplete="password" type="password" name="password" className="outline-none px-4 py-2" />
        </label>
        <button type="submit" className="border-2 rounded-2xl px-4 py-2 hover:bg-green-400">Submit</button>
        </form>
    </main>
  )
}
