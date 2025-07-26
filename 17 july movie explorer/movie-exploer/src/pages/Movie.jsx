import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const Movie = () => {

    let [movie, setMovie] = useState([]);
    const [id, setId] = useState("");
    let load = useRef(1);
    



    async function getData() {
        let res = await axios.get(`http://www.omdbapi.com/?s=${id}&page=${load.current}&apikey=a19818e1`)
        
        console.log(res)
        setMovie([...movie,...res.data.Search])
        
    }
    
    
    function handleChange(){
        setMovie([])

    }



    return (
        <div>
            <h1 className='p-5'>Movies</h1>

            <input type="text" className='seach' onChange={(e) => {setId(e.target.value);handleChange()}} placeholder='Enter movie name'/>
            <button className='btn-1' onClick={getData} >search</button>

            <div className='container'>
                <div className='row row-cols-4'>
                    {movie.map((mov, index) => {
                        return (
                            <div className="col">
                                <div className="card" style={{ width: "16rem", marginBottom:'23px' }}>
                                    <img src={mov.Poster} className="card-img-top" alt="..."style={{height:'14rem'}} />
                                    <div className="card-body">
                                        <h5 className="card-title">{mov.Title}</h5>
                                        <p className="card-text"><strong>Released :</strong>{mov.Year}</p>
                                        <a href="#" className="btn btn-primary">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            { movie.length > 0? <button onClick={()=>{load.current+=1; getData()}} style={{marginInline:'50% -50%',marginBottom:'30px', borderRadius:'10px',padding:'7px'}}>load more</button> : ""
}
        </div>
    )
}

export default Movie