// import React from 'react'

import ClassComp from "./pages/ClassComp"
import Counter from "./pages/Counter"
import FuncComp from "./pages/FuncComp"
import FetchPokemon from "./pages/FetchPokemon"
import Navbar from "./components/Navbar"
import LiftingState from "./pages/LiftingState"
import Footer from "./components/Footer"
import {Routes,Route} from 'react-router'
import FormControlled from "./pages/FormControlled"

export default function Router(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<FetchPokemon/>} />
      <Route path={'/formControlled'} element={<FormControlled/>}/>
      <Route path={'/classcomp'} element={<ClassComp/>} />
      <Route path={'/funccomp'} element={<FuncComp/>} />
      <Route path={'/counter'} element={<Counter/>} />
      <Route path={'/LiftingState'} element={<LiftingState/>} />
    </Routes>
    <Footer/>
    </>
  )
}
