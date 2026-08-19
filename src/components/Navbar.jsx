import { Link } from "react-router"
import usersContext from "../context/users/usersContext"
import { useContext } from "react"

export default function Navbar() {
  const userData = useContext(usersContext) 

  return (
    <nav className=" border-b-2 border-purple-900 flex justify-between items-center px-4 py-2">
        <div className="flex gap-3">
          <Link to={'/'}>
            LOGO
          </Link>

         <div className="flex gap-5">
            {userData.user.username
                ? userData.user.username
                : 
               <Link to={"/login"}>
                Login
               </Link>
            }
            <div className="cursor-pointer"
              onClick={()=>userData.setUser({
                username: null,
                password: null,
                file: null,
                objectUrl: null,
              })}>
                logout
            </div>
        </div>
        </div>
        <ul className="flex gap-5 px-2 py-2">
            <li>
              <Link to={'/edit'}>
                Edit Profile
              </Link>              
            </li>
            <li>
              <Link to={'/formControlled'}>
                Form Controlled
              </Link>              
            </li>
            <li>
              <Link to={'/classcomp'}>
                Class Component
              </Link>              
            </li>
            <li>
              <Link to={'/funccomp'}>
                Funct Component
              </Link>
            </li>
            <li>
              <Link to={'/counter'}>
                Counter
              </Link>
            </li>
            <li>
              <Link to={'/LiftingState'}>
                LiftState
              </Link>
            </li>
        </ul>
    </nav>
  )
}
