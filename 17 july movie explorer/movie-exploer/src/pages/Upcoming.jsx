import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Upcoming = () => {

    const [data, setData] = useState({});


    useEffect(() => {
        async function getData() {
            let res = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a19818e1')
            console.log(res.data)
            setData(res.data)
        }
        getData();
    }, [])



    return (
        <div style={{
            margin: '30px',
            
        }}>

            <h1>upcoming</h1>

            <div style={{
                display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
            }}>
                <div className="card mb-3" style={{maxWidth: '640px'}}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src={data.Poster} className="img-fluid rounded-start" alt="..." style={{width:"100%",height:"100%"}}/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">{data.Title}</h5>

                                 <p className="card-text"><strong>Overview :</strong>{data.Plot}</p>

                                <p className="card-text"><strong>Released :</strong>{data.Released}</p>
                                <p className="card-text"><strong>Language :</strong>{data.Language}</p>
                                <p className="card-text"><strong>Voting :</strong>{data.imdbVotes
}</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated {data.Runtime} ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Upcoming