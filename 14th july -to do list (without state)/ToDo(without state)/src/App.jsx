import { useState } from 'react'
import task from '../public/task'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const lists=[...new Set(task.map((task)=>task.list))];
  return (
    <>
    <div className='Wrapper'>
       <h1>🗂️ To-Do List(wihtout state)</h1>
        {lists.map((list) => (
          <div key={list} className="list-section">
            <h2>{list}</h2>
            {task
              .filter((task) => task.list === list)
              .map((task) => (
                <div key={task.id} className="todo-item">
                  <p>
                    {task.completed ? '✅' : '❌'} {task.title}
                  </p>
                  <p className="todo-description">{task.description}</p>
                </div>
              ))}
          </div>
        ))}
    </div>
    </>
  )
}

export default App
