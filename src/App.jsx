import React from 'react'
import Header from "./components/header/Header"
import "./index.css"
import Home from './components/home/Home'
import Taste from './components/taste/Taste'
import About from './components/about/About'
import Products from './components/products/Products'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Taste/>
      <About/>
      <Products/>
    </div>
  )
}

export default App