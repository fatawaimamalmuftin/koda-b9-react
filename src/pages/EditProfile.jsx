import { useContext } from "react"
import usersContext from "../context/users/usersContext"

export default function EditProfile() {
    const userData = useContext(usersContext)

    console.log(userData.user)

    return (
        <main className=" py-20 flex justify-center items-center">
            <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                    e.preventDefault()

                    const formData = new FormData(e.target)

                    userData.setUser({
                        ...userData.user,
                        username: formData.get("username"),
                        password: formData.get("password")
                    })
                }}
            >
                <div className="border-2 h-70 w-70 rounded-full overflow-hidden hover:bg-gray-100 flex justify-center items-center">
                    <label className="flex justify-center items-center">
                        <img
                            src={userData.user.objectUrl}
                            alt="profile"
                            className={`${!userData.user.objectUrl && "hidden"}`}
                        />

                        <input
                            name="photo"
                            type="file"
                            accept="image/*"
                            className={`ml-27 ${userData.user.objectUrl && "hidden"}`}
                            onChange={(e) => {
                                const file = e.target.files[0]

                                if (!file) return

                                if (userData.user.objectUrl) {
                                    URL.revokeObjectURL(userData.user.objectUrl)
                                }

                                userData.setUser({
                                    file: file,
                                    objectUrl: URL.createObjectURL(file)
                                })
                            }}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Nama :
                        <input
                            defaultValue={userData.user.username}
                            name="username"
                            className="outline-none px-4 py-2"
                            type="text"
                        />
                    </label>
                </div>

                <div>
                    <label>
                        password :
                        <input
                            autoComplete="password"
                            defaultValue={userData.user.password}
                            name="password"
                            className="outline-none px-4 py-2"
                            type="password"
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    className="border-2 px-4 py-2"
                >
                    Submit
                </button>
            </form>
        </main>
    )
}