import { useState } from 'react'
import './App.css'
import Todolist from './ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Wrapper'>
      <Todolist/>
    </div>
    </>
  )
}

export default App
