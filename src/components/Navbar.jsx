
export default function Navbar({logo}) {
  return (
    <nav className=" border-b-2 border-purple-900 flex justify-between items-center px-4 py-2">
        <div>{logo}</div>
        <ul className="flex gap-5 px-2 py-2">
            <li>Class Component</li>
            <li>Funct Component</li>
            <li>Counter</li>
            <li>Pokemon</li>
        </ul>
    </nav>
  )
}
