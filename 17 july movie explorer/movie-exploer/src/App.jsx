
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import Home from './pages/Home'
import Upcoming from './pages/Upcoming'
import Movie from './pages/Movie'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>

      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='' element={<Home/>} >
        </Route>
        <Route path='movie' element={<Movie/>} />
         <Route path='movie/upcoming' element={<Upcoming/>} />
      </Routes>
      
      
      
      </BrowserRouter>



    </div>
  )
}

export default App
