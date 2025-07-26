import React from 'react'
import './Styles.css'
import {Link} from 'react-router'

const Navbar = () => {
    return (
        <div>

            <nav>
                <h1>Task Manager</h1>
                <ul >
                    <li><Link style={{color:'#fff', fontWeight:'bold'}} to={'/'}>Home</Link></li>
                    <li><Link style={{color:'#fff', fontWeight:'bold'}} to={'add'}>Add Task</Link></li>
                    <li><Link style={{color:'#fff', fontWeight:'bold'}} to={'view'}>View Tasks</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar