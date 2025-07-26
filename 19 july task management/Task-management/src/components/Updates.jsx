import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Updates = ({ id, setEdit }) => {

    const [formData, setFormData] = useState({
        taskTitle: "",
        taskDescription: "",
        dueDate: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        async function getdata() {
            let res = await axios.get('http://localhost:3000/tasks/' + id)
            setFormData({
                taskTitle: res.data.taskTitle,
                taskDescription: res.data.taskDescription,
                dueDate: res.data.dueDate
            })
            console.log(res)
        }
        getdata()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        let res = await axios.put('http://localhost:3000/tasks/' + id, formData)
        console.log("submit data", formData)
        console.log(res)
        setFormData(
            {
                taskTitle: "",
                taskDescription: "",
                dueDate: ""
            }
        )
        setEdit(false);

    }


    return (
        <div>
            <main>
                <h2>Edit Task</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="taskTitle" placeholder="Enter task title" onChange={(e) => { handleChange(e) }} value={formData.taskTitle} required />

                    <label>Description</label>

                    <textarea name="taskDescription" placeholder="Task description" rows={5} onChange={(e) => { handleChange(e) }} value={formData.taskDescription} required></textarea>

                    <label>Due Date</label>
                    <input name="dueDate" type="date" required title='dueDate' onChange={(e) => { handleChange(e) }} value={formData.dueDate} />

                    <button type="submit">Update task</button>
                </form>
            </main>
        </div>
    )
}

export default Updates