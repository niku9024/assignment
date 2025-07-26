import React from 'react'
import {Link} from 'react-router'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" className=' w-2 h-2' style={{width:'90px',}}/>
                    
                    <div className="collapse navbar-collapse ms-4" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link font-bold text-danger" style={{fontWeight:'bold', fontSize:'20px'}}  to={''}>Home</Link>
                            <Link className="nav-link text-danger" style={{fontWeight:'bold', fontSize:'20px'}} to={'movie'}>Movie</Link>
                            <Link className="nav-link text-danger" style={{fontWeight:'bold', fontSize:'20px'}} to={'movie/upcoming'}>Upcoming</Link>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar