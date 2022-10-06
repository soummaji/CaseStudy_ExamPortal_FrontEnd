import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        localStorage.clear();
      }
      )

    return (
        <div className="background">
            <div className="">
                <div className='text-center mt-5'>
                    <h1 className="text-light">Welcome to Online Exam Portal</h1>
                </div>
                <div className="container my-5">
                    <div className="row my-5">
                        <div className="card col-md-5 mx-auto my-3">
                            <div className="card-body">
                                <h5 className="card-title text-center">Student</h5>
                                <p className="card-text">Student can login and choose any subject of his/her choice to give exam only once per subject.</p>
                                <div className='text-center'>
                                    <Link to="/studentLogin" className="btn btn-primary">Click Here!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card col-md-5 mx-auto my-3">
                            <div className="card-body">
                                <h5 className="card-title text-center">Admin</h5>
                                <p className="card-text">Admin can login and add Questions, Answers, View and delete questions and view student answers.</p>
                                <div className='text-center'>
                                    <Link to="/adminLogin" className="btn btn-primary">Click Here!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
