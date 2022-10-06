import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';

const ViewAnswers = () => {

  const { id, subject } = useParams();
  const [data, setData] = useState([]);
  const [sdata, setSdata] = useState([]);

  useEffect(() => {
    loadData();
    loadStudentData();
  }, []);

  const loadData = async () => {
    return await axios
      .get(`http://localhost:8080/displayAnswers/${subject}`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  };

  const loadStudentData = async () => {
    return await axios
      .get(`http://localhost:8080/displayAnswersByStudent/${id}/${subject}`)
      .then((response) => {
        setSdata(response.data)
        console.log(response.data)
      })
  }


  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-center mt-4'><u>All Answers of {subject}</u></h1>

<div className="container mx-auto">
      <div class="row">
        <div class="table-responsive col-md-6 mt-4 ">
          <h3 class="sub-header text-center">Answers</h3>
          <table className="table text-center table-striped table-hover">
            <thead>
              <tr className="table-info">
                <th>SNo.</th>
                <th>Question</th>
                <th>Answers</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.question}</td>
                  <td>{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div >

        <div class="table-responsive col-md-6 mt-4">
          <h3 class="sub-header text-center">Student Answers</h3>
          <table className="table text-center table-striped table-hover">
            <thead>
              <tr className="table-info">
                <th>Sr.no</th>
                <th>Student Answer</th>
              </tr>
            </thead>
            <tbody>
              {sdata.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div >
  )
}

export default ViewAnswers
