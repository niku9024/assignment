import React from 'react'
import './Styles.css'
import axios from 'axios';
import { useState } from 'react';

const Add = () => {

    // temproary store form data
    const [formData, setFormData] = useState({
        taskTitle: "",
        taskDescription: "",
        dueDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = axios.post("http://localhost:3000/tasks", formData)
        console.log("Submitted Data:", formData);
        console.log(res);
        // You can add API calls or state lifting here
        setFormData({
            taskTitle: "",
            taskDescription: "",
            dueDate: ""
        });
    }


    return (
        <div>
            <main>
                <h2>Add New Task</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="taskTitle" placeholder="Enter task title" onChange={handleChange} value={formData.taskTitle} required />

                    <label>Description</label>

                    <textarea name="taskDescription" placeholder="Task description" rows={5} onChange={handleChange} value={formData.taskDescription} required></textarea>

                    <label>Due Date</label>
                    <input name="dueDate" type="date" required title='dueDate' onChange={handleChange} value={formData.dueDate} />

                    <button type="submit">Add Task</button>
                </form>
            </main>
        </div>
    )
}

export default Add