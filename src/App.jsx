import React from 'react'
import Header from "./components/header/Header"
import "./index.css"
import Home from './components/home/Home'
import Taste from './components/taste/Taste'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Taste/>
    </div>
  )
}

export default App