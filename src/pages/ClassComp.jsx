import { Component } from "react";
export default class ClassComp extends Component {
  state = {
    num : 0,
  }
  render(){
    return(
      <>
      <h1>Component Clas</h1>
      <h1>{this.state.num}</h1>
      <button
      onClick={()=>{
        this.setState((prevState)=>{
          return{
            ...prevState,
            num: prevState.num + 1,
          }
        })
      }}
      >tambah</button>
      </>
    )
  }
}