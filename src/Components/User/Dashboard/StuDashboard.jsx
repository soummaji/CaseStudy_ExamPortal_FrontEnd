import React from 'react'
import Navbar from '../../Navbar'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StuDashboard = () => {

  const [sub, setSub] = useState([]);
  const navigate = useNavigate();
  const temp = localStorage.getItem("isAuthenticated");
  const useremail = localStorage.getItem("useremail");
  const userId = localStorage.getItem("studentId");
  console.log(useremail);
  console.log(userId);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    return await axios
      .get("http://localhost:8080/viewOnlySubjects")
      .then((response) => {
        let sub = response.data.slice();
        console.log(sub)
        console.log(sub.length)
        setSub(sub);
      })
  }

  const handleSubject = async (item) =>{
    console.log(item)
    const check = await axios.get(`http://localhost:8080/getExamSubject/${localStorage.getItem("studentId")}/${item}`)
    console.log(check.data)
    if(check.data === true){
    if (!temp) {
          toast.error('Please Login in Order to add items', {
            theme:"dark",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/")
        } else
          navigate(`/test/${item}`);
    }else{
      toast.warning("You have already attempted this exam", {
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
  }
  

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-center mt-4'><u>Hello {useremail} ! Welcome to Online Exam Portal</u></h1>
      <div className='mx-5'>
        <div className="card col-md-5 mx-auto mt-4 bg-primary">
          <div className="card-body text-light">
            <h4>
              I want to make changes in :-
            </h4>
          </div>
        </div>

        {sub.map((item) =>
          <div className="card col-md-5 mx-auto mt-1 border-0" onClick={() => handleSubject(item)}>
            <button type="button" className="btn btn-outline-info py-0">
              <div className="card-body">
                <h5>{item}</h5>
              </div>
            </button>
          </div>
        )}
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
    </div>
  )
}

export default StuDashboard
