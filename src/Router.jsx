// import React from 'react'

import ClassComp from "./pages/ClassComp"
import Counter from "./pages/Counter"
import FuncComp from "./pages/FuncComp"
import FetchPokemon from "./pages/FetchPokemon"
import Navbar from "./components/Navbar"
import LiftingState from "./pages/LiftingState"
import Footer from "./components/Footer"
import {Routes,Route} from 'react-router'

export default function Router(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path={'/pokemon'} element={<FetchPokemon/>} />
      <Route path={'/classcomp'} element={<ClassComp/>} />
      <Route path={'/funccomp'} element={<FuncComp/>} />
      <Route path={'/counter'} element={<Counter/>} />
      <Route path={'/LiftingState'} element={<LiftingState/>} />
    </Routes>
    <Footer/>
    </>
  )
}
