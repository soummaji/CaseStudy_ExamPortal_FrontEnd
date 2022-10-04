import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
                    <h2 className="text-center mb-4 text-primary">Admin Regintration Form</h2>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputPassword1" />
                        </div>
                        <div className="d-grid mt-5">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <p className="mb-0  text-center">Already have an account? <Link to="/adminLogin"
                            className="text-primary fw-bold">Log
                            In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
