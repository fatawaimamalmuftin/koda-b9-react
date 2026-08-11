import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav className=" border-b-2 border-purple-900 flex justify-between items-center px-4 py-2">
        <div>
          <Link to={'/pokemon'}>
            LOGO
          </Link>
        </div>
        <ul className="flex gap-5 px-2 py-2">
            <li>
              <Link to={'/classcomp'}>
                Class Component
              </Link>              </li>
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
