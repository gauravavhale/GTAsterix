import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Products from './page/products/products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PatientList from './component/Patient/PatientList'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navbar/>}>
          <Route path='axiosInstance' element={<Products/>}></Route>
          <Route path='reactQuery' element={<PatientList/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App