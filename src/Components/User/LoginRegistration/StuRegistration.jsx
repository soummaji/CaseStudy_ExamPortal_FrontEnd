import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const StuRegistration = () => {

    const navigate = useNavigate();
    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fullName === "" || email === "" || password === "") {
            setError(true);
            toast.warning("Credentials can't be empty", {
                theme: "dark",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setSubmitted(true);
            setError(false);
            const obj = { fullName, email, password };
            try {
                const response = await axios.post(`http://localhost:8080/studentRegistration`, { ...obj });
                const registered = response.data;
                console.log(response.data);
                console.log(obj);
                if (!registered) {
                    toast.error("User already exists", {
                        theme: "dark",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    toast.success("User registered successfully", {
                        theme: "dark",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => { navigate("studentLogin") }, 3000);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-4 p-4 shadow-sm border rounded-5 border-primary">
                    <h2 className="text-center mb-4 text-primary">Student Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email Id***</label>
                            <input type="email" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail}
                                name="email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleName}
                                name="fullName" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputPassword1" onChange={handlePassword}
                                name="password" />
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
                        <p className="mb-0  text-center">Already have an account? <Link to="/studentLogin"
                            className="text-primary fw-bold">Log
                            In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StuRegistration
