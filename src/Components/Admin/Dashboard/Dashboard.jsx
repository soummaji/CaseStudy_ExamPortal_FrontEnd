import React from 'react'
import Navbar from '../../Navbar'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [sub, setSub] = useState([]);
  const navigate = useNavigate();
  const temp = localStorage.getItem("isAuth");
  const username = localStorage.getItem("useremail");
  const [subject, setSubject] = useState({ subject: "", question: "" })
  const [rad, setRad] = useState("");

  useEffect(() => {
    loadData();
  })

  const loadData = async () => {
    return await axios
      .get("http://localhost:8080/viewOnlySubjects")
      .then((response) => {
        let sub = response.data.slice();
        setSub(sub);
      })
  }

  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  }

  const handleSubject = (item) => {
    console.log(item)
    if (!temp) {
      navigate("/")
    } else
      navigate(`/subject/${item}`);
  }

  const radioChange = async (data) => {
    setRad(data);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject.subject === "" || subject.question === "" || rad === "") {
      console.log("error");
      toast.warning("Fields can't be empty", {
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
      const sendData = {
        subject: subject.subject,
        question: subject.question,
        answer: rad
      }
      console.log(sendData);
      axios.post("http://localhost:8080/addSubject", sendData)
        .then((result) => {
          toast.success("Question Added Successfully", {
            theme: "dark",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setSubject({ subject: "", question: "" })
          setRad("")
        })
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-center mt-4'><u>Hello Admin ! Welcome to Online Exam Portal</u></h1>
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

      </div>
      <div className='fixed-bottom d-flex justify-content-center'>
        <button type="button" className="btn btn-primary text-light btn-lg mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Subject</button>
      </div>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Subjects</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="subject" onChange={handleChange} value={subject.subject} />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Question</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="question" onChange={handleChange} value={subject.question} />
                </div>
                <div class="form-check">
                  <input className="form-check-input" type="radio" name="answer" value="True" onChange={() => radioChange('True')} />
                  <label className="form-check-label" for="flexRadioDefault1">
                    True
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="answer" value="True" onChange={() => radioChange('False')} />
                  <label className="form-check-label" for="flexRadioDefault1">
                    False
                  </label>
                </div>
              </div>
              <div className="modal-footer">
              <button className="btn btn-success" type="submit">Save changes</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Dashboard
