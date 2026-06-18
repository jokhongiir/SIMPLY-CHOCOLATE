import React from 'react'
import Header from "./components/header/Header"
import "./index.css"
import Home from './components/home/Home'
import Taste from './components/taste/Taste'
import About from './components/about/About'
import Products from './components/products/Products'
import Sellers from './components/sellers/Sellers'
import Loved from './components/loved/Loved'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Taste/>
      <About/>
      <Products/>
      <Sellers/>
      <Loved/>
    </div>
  )
}

export default App