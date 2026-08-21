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
import Login from "./pages/Login"
import EditProfile from "./pages/EditProfile"
import FormSurvei from "./pages/FormSurvei"

export default function Router(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<FetchPokemon/>} />
      <Route path={'/FormSurvey'} element={<FormSurvei/>} />
      <Route path={'/edit'} element={<EditProfile/>} />
      <Route path={'/login'} element={<Login/>} />
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
