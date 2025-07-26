
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import View from './components/View'
import Navbar from './components/Navbar'
import Updates from './components/Updates'
import { useState } from 'react'

function App() {

 const [id,setId] = useState(null);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='add' element={<Add />} />
          <Route path='view' element={<View setId={setId} />}>
           </Route>
          
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
