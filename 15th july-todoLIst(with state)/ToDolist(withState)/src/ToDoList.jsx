import React, { useState } from 'react'
import './ToDolist.css';

  let intialState=[{
      task:'wake up 7am',
      isComplete:false

  }]
function Todolist(){
    const[text,setText]=useState()
    const [tasks,setTasks]=useState(intialState)
    const[edit,setEdit]=useState(null);
    const [editText,setEditText]=useState("");
    
    function addTask(){
        setTasks([...tasks,{task:text,isComplete:false}])
        setText('')
    }
    function markComplete(e,i){
        let newTasks=[...tasks];
        newTasks[i].isComplete=e.target.checked
        setTasks(newTasks);
    }
    function editTask(i){
        setEdit(i);
        setEditText(tasks[i].task)
    }
    function saveTask(i){
        let newTasks=[...tasks]
        newTasks[i].task=editText
        setTasks(newTasks)
        setEdit(null);
    }
    function deleteTask(i){
        let removeTask=[...tasks]
        removeTask.splice(i, 1);
        setTasks(removeTask)
    }
  return (
    <div className='TodoWrapper'>
        <input onChange={(e)=>setText(e.target.value)}
        type='text' value={text}/>
        <button onClick={addTask}>add task</button>
        <ul>
      {tasks.map((v,i)=>{
        return <li key={i}>
            <input type="checkbox" onChange={(e)=>markComplete(e,i)} checked={v.isComplete} />
           {
            edit==i ?(
                <>
                {" "}
                <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText} />{" "}
                    <button onClick={()=>saveTask(i)}>save</button>{" "}
                   
                
                 </>
            ):(
                <>
                {v.task}{" "}
                <button onClick={()=>editTask(i)}>Edit Task</button>
                </>
            )
           }
                <button onClick={()=>deleteTask(i)}>Delete</button>
        </li>
        
      })}
      </ul>
    </div>
  )
}

export default Todolist
