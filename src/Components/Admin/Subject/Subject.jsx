import React from 'react'
import Navbar from '../../Navbar'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Subject = () => {
  const navigate = useNavigate();
  let { subject } = useParams();

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-center mt-4'><u>Online Exam Portal : {subject}</u></h1>
      <div className='mx-5'>
        <div className="card col-md-5 mx-auto mt-4 bg-primary">
          <div className="card-body text-light">
            <h4>
              I want to :-
            </h4>
          </div>
        </div>


        <div className="card col-md-5 mx-auto mt-1 border-0" onClick={() => navigate(`/viewQuestions/${subject}`)}>
          <button type="button" className="btn btn-outline-info py-0">
            <div className="card-body">
             <h5 >View Questions</h5> 
            </div>
          </button>
        </div>
        <div className="card col-md-5 mx-auto mt-1 border-0" onClick={() => navigate(`/selectStudents/${subject}`)}>
          <button type="button" className="btn btn-outline-info py-0">
            <div className="card-body">
              <h5>View Answers</h5>
            </div>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Subject
