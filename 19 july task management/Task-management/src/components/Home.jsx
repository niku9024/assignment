import React, { useState } from 'react'
import './Styles.css'
import { useEffect } from 'react';
import axios from "axios"

const Home = () => {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            let res = await axios.get("http://localhost:3000/tasks");
            console.log(res.data);
            setProducts(res.data);
        }
        getData();
    }, []);

    return (
        <div>


            <main>
                <h2>Welcome to Task Manager</h2>
                <p>Manage your tasks efficiently with this simple system.</p>

                <section className="task-section">
                    <h3>Recent Tasks</h3>

                    {
                        product.map((products, index) => {
                            return (
                                <div className="task-card">
                                    <h4>{products.taskTitle}</h4>
                                    <p>{products.taskDescription}</p>
                                    <p><strong>Due:</strong> {products.dueDate}</p>
                                </div>
                            )
                        })
                    }


                </section>
            </main>

        </div>
    )
}

export default Home