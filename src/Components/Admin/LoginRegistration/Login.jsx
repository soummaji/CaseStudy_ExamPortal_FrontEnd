import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ userName: "", password: "" });

    useEffect(() => {
        localStorage.clear();
    }
    )

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            userName: user.userName,
            password: user.password
        }
        console.log(sendData);


        axios.post("http://localhost:8080/adminLogin", sendData)
            .then((result) => {
                console.log(result.data);
                if (result.data === true) {
                    // alert('login Successful');
                    toast.success("Login Successful ! Redirecting to Dashboard...", {
                        theme:"dark",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    console.log(sendData.userName);
                    localStorage.clear();
                    localStorage.setItem("isAuth", "true");
                    localStorage.setItem("useremail", sendData.userName);
                    localStorage.setItem("role", "Admin");
                    setTimeout(() => { navigate(`/adminDashboard`) }, 3000);
                } else {
                    toast.error("Incorrect Username/Password! Try Again", {
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
            })
    }

    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
                    <h2 className="text-center mb-4 text-primary">Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputUsername" aria-describedby="usernameHelp" name="userName" onChange={handleChange} value={user.userName} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputPassword1" name="password" onChange={handleChange} value={user.password} required />
                        </div>
                        <div className="d-grid mt-5">
                            <button className="btn btn-primary" type="submit">Login</button>
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
                        <p className="mb-0  text-center">Don't have an account? <Link to="/adminRegistration"
                            className="text-primary fw-bold">Sign
                            Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
