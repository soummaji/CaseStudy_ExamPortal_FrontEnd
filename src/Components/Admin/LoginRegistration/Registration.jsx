import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({ userName: "", email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            userName: user.userName,
            email: user.email,
            password: user.password,
        };
        console.log(sendData);

        axios
            .post("http://localhost:8080/adminRegistration", sendData)
            .then((result) => {
                console.log(result.data);

                if (result.data === true) {
                    toast.success("Registration Successful", {
                        theme:"dark",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => { navigate("adminLogin") }, 3000);
                } else {
                    toast.error("Username already Present! Try Again", {
                        theme:"dark",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    };

    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-4 p-4 shadow-sm border rounded-5 border-primary">
                    <h2 className="text-center mb-4 text-primary">Admin Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}
                                name="email"
                                value={user.email} required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">User Name***</label>
                            <input type="text" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputUsername1" aria-describedby="usernameHelp" onChange={handleChange}
                                name="userName"
                                value={user.userName} required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputPassword1" onChange={handleChange}
                                name="password"
                                value={user.password} required/>
                        </div>
                        <div className="d-grid mt-5">
                            <button className="btn btn-primary" type="submit">Sign Up</button>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
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
