export default function Tabel({show}) {
    console.log(show)

  return (
    <ul>
        {/* {product} */}
        {show.map((value,i)=>{
            return(
                <li key={i}>{value}</li>
            )
        })}
    </ul>
  )
}
