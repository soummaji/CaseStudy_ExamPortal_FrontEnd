import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const StuLogin = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }
  )

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password }
    if (email === "" || password === "") {
        console.log("error");
        toast.warning("Credentials can't be empty", {
          theme:"dark",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }else{
    setError(false);

        try {
          const response = await axios.post(`http://localhost:8080/studentLogin`, { ...credentials });
          console.log(response.data.StudentId);
          console.log(response.data.State);
          console.log(credentials);

          if (response.data.State === "False") {
            toast.error("Incorrect Email Id/password ! Try Again !", {
              theme:"dark",
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
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
            localStorage.clear();
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("useremail", credentials.email);
            localStorage.setItem("studentId", response.data.StudentId);
            localStorage.setItem("role", "student");
            setTimeout(() => { navigate(`/studentDashboard`) }, 3000);
          }


        } catch (error) {
        }
    }
  };

  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
          <h2 className="text-center mb-4 text-primary">Student Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Id</label>
              <input type="email" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputUsername" aria-describedby="usernameHelp" name="email" onChange={handleEmail}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control bg-info bg-opacity-10 border border-primary" id="exampleInputPassword1" name="password" onChange={handlePassword}  />
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
            <p className="mb-0  text-center">Don't have an account? <Link to="/studentRegistration"
              className="text-primary fw-bold">Sign
              Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StuLogin
