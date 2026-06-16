import React from 'react'
import Header from "./components/header/Header"
import "./index.css"
import Home from './components/home/Home'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Home/>
    </div>
  )
}

export default App