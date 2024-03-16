import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'


const App = () => {
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App