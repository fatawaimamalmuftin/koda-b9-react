
// import { useState } from "react"
// export default function App(){
//   const [angka,setAngka] = useState(0)
//   return(
//     <>
//     <h1>hallo word</h1>
//     <h1>{angka}</h1>
//     <button
//     onClick={()=>{setAngka(angka + 1)}}
//     >tambah</button>
//     </>
//   )
// }

// import { Component } from "react";
// export default class App extends Component {
//   state = {
//     num : 0,
//   }
//   render(){
//     return(
//       <>
//       <h1>hallo world</h1>
//       <h1>{this.state.num}</h1>
//       <button
//       onClick={()=>{
//         this.setState((prevState)=>{
//           return{
//             ...prevState,
//             num: prevState.num + 1,
//           }
//         })
//       }}
//       >tambah</button>
//       </>
//     )
//   }
// }